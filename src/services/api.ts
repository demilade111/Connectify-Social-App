import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Change this to your backend URL when deployed
const API_BASE_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests automatically
apiClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      // Navigate to login screen
    }
    return Promise.reject(error);
  }
);

interface User {
  id: string;
  username: string;
  email: string;
  profilePicture?: string;
}

interface Post {
  id: string;
  content: string;
  images?: string[];
  author: User;
  likes: number;
  comments: number;
  createdAt: string;
  isLiked: boolean;
}

interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow';
  message: string;
  from: User;
  createdAt: string;
  read: boolean;
}

// Authentication API
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (username: string, email: string, password: string) => {
    const response = await apiClient.post('/auth/register', { username, email, password });
    return response.data;
  },

  forgotPassword: async (email: string) => {
    const response = await apiClient.post('/auth/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (token: string, newPassword: string) => {
    const response = await apiClient.post('/auth/reset-password', { token, newPassword });
    return response.data;
  },

  verifyOTP: async (email: string, otp: string) => {
    const response = await apiClient.post('/auth/verify-otp', { email, otp });
    return response.data;
  },
};

// Posts API
export const postsAPI = {
  getFeed: async (page = 1, limit = 10) => {
    const response = await apiClient.get(`/posts/feed?page=${page}&limit=${limit}`);
    return response.data;
  },

  createPost: async (content: string, images?: string[]) => {
    const response = await apiClient.post('/posts', { content, images });
    return response.data;
  },

  likePost: async (postId: string) => {
    const response = await apiClient.post(`/posts/${postId}/like`);
    return response.data;
  },

  unlikePost: async (postId: string) => {
    const response = await apiClient.delete(`/posts/${postId}/like`);
    return response.data;
  },

  getComments: async (postId: string) => {
    const response = await apiClient.get(`/posts/${postId}/comments`);
    return response.data;
  },

  addComment: async (postId: string, content: string) => {
    const response = await apiClient.post(`/posts/${postId}/comments`, { content });
    return response.data;
  },

  deletePost: async (postId: string) => {
    const response = await apiClient.delete(`/posts/${postId}`);
    return response.data;
  },
};

// Users API
export const usersAPI = {
  getProfile: async (userId?: string) => {
    const endpoint = userId ? `/users/${userId}` : '/users/me';
    const response = await apiClient.get(endpoint);
    return response.data;
  },

  updateProfile: async (data: Partial<User>) => {
    const response = await apiClient.put('/users/me', data);
    return response.data;
  },

  followUser: async (userId: string) => {
    const response = await apiClient.post(`/users/${userId}/follow`);
    return response.data;
  },

  unfollowUser: async (userId: string) => {
    const response = await apiClient.delete(`/users/${userId}/follow`);
    return response.data;
  },

  getFollowers: async (userId: string) => {
    const response = await apiClient.get(`/users/${userId}/followers`);
    return response.data;
  },

  getFollowing: async (userId: string) => {
    const response = await apiClient.get(`/users/${userId}/following`);
    return response.data;
  },

  searchUsers: async (query: string) => {
    const response = await apiClient.get(`/users/search?q=${encodeURIComponent(query)}`);
    return response.data;
  },
};

// Notifications API
export const notificationsAPI = {
  getNotifications: async () => {
    const response = await apiClient.get('/notifications');
    return response.data;
  },

  markAsRead: async (notificationId: string) => {
    const response = await apiClient.put(`/notifications/${notificationId}/read`);
    return response.data;
  },

  markAllAsRead: async () => {
    const response = await apiClient.put('/notifications/read-all');
    return response.data;
  },
};

export { User, Post, Comment, Notification };