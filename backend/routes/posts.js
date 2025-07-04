const express = require('express');
const { body, validationResult } = require('express-validator');
const Post = require('../models/Post');
const User = require('../models/User');
const Notification = require('../models/Notification');
const { auth, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// Get feed posts (with optional authentication)
router.get('/feed', optionalAuth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const posts = await Post.find({ isDeleted: false })
      .populate('author', 'username profilePicture isVerified')
      .populate('comments.author', 'username profilePicture isVerified')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const postsWithUserData = posts.map(post => ({
      ...post.toPublicJSON(req.user?._id),
      author: post.author
    }));

    res.json({
      success: true,
      posts: postsWithUserData,
      pagination: {
        currentPage: page,
        hasMore: posts.length === limit
      }
    });
  } catch (error) {
    console.error('Get feed error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Create a new post
router.post('/', auth, [
  body('content')
    .trim()
    .isLength({ min: 1, max: 2000 })
    .withMessage('Post content must be between 1 and 2000 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const { content, images = [] } = req.body;

    const post = new Post({
      content,
      images,
      author: req.user._id
    });

    await post.save();
    await post.populate('author', 'username profilePicture isVerified');

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      post: post.toPublicJSON(req.user._id)
    });
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Like a post
router.post('/:id/like', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    const alreadyLiked = post.isLikedBy(req.user._id);
    
    if (alreadyLiked) {
      return res.status(400).json({
        success: false,
        message: 'Post already liked'
      });
    }

    post.addLike(req.user._id);
    await post.save();

    // Create notification for post author (if not self-like)
    if (!post.author.equals(req.user._id)) {
      await Notification.createNotification({
        recipient: post.author,
        sender: req.user._id,
        type: 'like',
        message: `${req.user.username} liked your post`,
        relatedPost: post._id
      });
    }

    res.json({
      success: true,
      message: 'Post liked successfully',
      likes: post.likeCount
    });
  } catch (error) {
    console.error('Like post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Unlike a post
router.delete('/:id/like', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    const isLiked = post.isLikedBy(req.user._id);
    
    if (!isLiked) {
      return res.status(400).json({
        success: false,
        message: 'Post not liked yet'
      });
    }

    post.removeLike(req.user._id);
    await post.save();

    res.json({
      success: true,
      message: 'Post unliked successfully',
      likes: post.likeCount
    });
  } catch (error) {
    console.error('Unlike post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get post comments
router.get('/:id/comments', optionalAuth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('comments.author', 'username profilePicture isVerified');
    
    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.json({
      success: true,
      comments: post.comments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    });
  } catch (error) {
    console.error('Get comments error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Add comment to post
router.post('/:id/comments', auth, [
  body('content')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('Comment must be between 1 and 500 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const { content } = req.body;
    const post = await Post.findById(req.params.id);
    
    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    const comment = {
      content,
      author: req.user._id
    };

    post.addComment(comment);
    await post.save();
    await post.populate('comments.author', 'username profilePicture isVerified');

    // Create notification for post author (if not self-comment)
    if (!post.author.equals(req.user._id)) {
      await Notification.createNotification({
        recipient: post.author,
        sender: req.user._id,
        type: 'comment',
        message: `${req.user.username} commented on your post`,
        relatedPost: post._id
      });
    }

    const newComment = post.comments[post.comments.length - 1];

    res.status(201).json({
      success: true,
      message: 'Comment added successfully',
      comment: newComment
    });
  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Delete a post
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    // Check if user owns the post
    if (!post.author.equals(req.user._id)) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this post'
      });
    }

    post.isDeleted = true;
    await post.save();

    res.json({
      success: true,
      message: 'Post deleted successfully'
    });
  } catch (error) {
    console.error('Delete post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get user's posts
router.get('/user/:userId', optionalAuth, async (req, res) => {
  try {
    const { userId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const posts = await Post.find({ 
      author: userId, 
      isDeleted: false 
    })
      .populate('author', 'username profilePicture isVerified')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const postsWithUserData = posts.map(post => ({
      ...post.toPublicJSON(req.user?._id),
      author: post.author
    }));

    res.json({
      success: true,
      posts: postsWithUserData,
      pagination: {
        currentPage: page,
        hasMore: posts.length === limit
      }
    });
  } catch (error) {
    console.error('Get user posts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;