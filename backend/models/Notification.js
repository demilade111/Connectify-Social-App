const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['like', 'comment', 'follow', 'mention'],
    required: true
  },
  message: {
    type: String,
    required: true
  },
  relatedPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    default: null
  },
  relatedComment: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  read: {
    type: Boolean,
    default: false
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Indexes for better performance
notificationSchema.index({ recipient: 1, createdAt: -1 });
notificationSchema.index({ read: 1 });

// Method to mark as read
notificationSchema.methods.markAsRead = function() {
  this.read = true;
};

// Method to get public notification data
notificationSchema.methods.toPublicJSON = function() {
  return {
    id: this._id,
    type: this.type,
    message: this.message,
    sender: this.sender,
    relatedPost: this.relatedPost,
    read: this.read,
    createdAt: this.createdAt
  };
};

// Static method to create notification
notificationSchema.statics.createNotification = async function({
  recipient,
  sender,
  type,
  message,
  relatedPost = null,
  relatedComment = null
}) {
  // Don't create notification if sender and recipient are the same
  if (recipient.toString() === sender.toString()) {
    return null;
  }

  // Check if similar notification already exists (to avoid spam)
  const existingNotification = await this.findOne({
    recipient,
    sender,
    type,
    relatedPost,
    createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } // Within last 24 hours
  });

  if (existingNotification) {
    return existingNotification;
  }

  const notification = new this({
    recipient,
    sender,
    type,
    message,
    relatedPost,
    relatedComment
  });

  return await notification.save();
};

module.exports = mongoose.model('Notification', notificationSchema);