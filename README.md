# Connectify - Social Media App

A complete social media application built with React Native (frontend) and Node.js/Express (backend). Connectify allows users to create accounts, share posts, follow other users, receive notifications, and engage through likes and comments.

## 🚀 Features

### Frontend (React Native + Expo)
- **Authentication Flow**: Login, Registration, Password Reset, OTP Verification
- **Navigation**: Bottom Tab Navigator with Stack Navigation
- **Social Features**: Follow/Unfollow users, User profiles, Search
- **Posts**: Create, view, like, comment on posts
- **Real-time Feed**: Infinite scroll feed with pagination
- **Notifications**: Push notifications for interactions
- **Modern UI**: Styled with styled-components and React Native Elements

### Backend (Node.js + Express + MongoDB)
- **RESTful API**: Complete REST API with proper HTTP methods
- **Authentication**: JWT-based secure authentication
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet, CORS, Rate limiting, Input validation
- **Real-time**: Notification system for user interactions
- **Scalable**: Pagination, indexing, and optimized queries

## 🛠 Tech Stack

### Frontend
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation v6
- **State Management**: Context API with useReducer
- **Styling**: Styled Components
- **UI Components**: React Native Elements
- **HTTP Client**: Axios
- **Storage**: AsyncStorage

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Express Validator
- **Security**: Helmet, CORS, bcryptjs
- **File Upload**: Multer + Cloudinary (optional)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Expo CLI
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/connectify
   JWT_SECRET=your-super-secret-jwt-key
   CLIENT_URL=http://localhost:19006
   ```

4. **Start MongoDB** and run the server:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

### Frontend Setup

1. **Install dependencies** (in root directory):
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Update API URL** in `src/services/api.ts`:
   ```typescript
   const API_BASE_URL = 'http://localhost:3000/api';
   // For physical device, use your computer's IP:
   // const API_BASE_URL = 'http://192.168.1.100:3000/api';
   ```

3. **Start the Expo development server**:
   ```bash
   npm start
   ```

4. **Run on device/emulator**:
   ```bash
   # iOS Simulator
   npm run ios
   
   # Android Emulator
   npm run android
   
   # Web Browser
   npm run web
   ```

## 📱 App Structure

### Frontend Architecture
```
src/
├── components/          # Reusable UI components
│   ├── Auth/           # Authentication components
│   ├── Home/           # Home screen components
│   ├── Post/           # Post-related components
│   ├── Header/         # Header components
│   └── Notification/   # Notification components
├── context/            # React Context for state management
│   └── AuthContext.tsx # Authentication state
├── navigation/         # Navigation configuration
│   └── AppNavigator.tsx # Main navigator
├── screens/            # Screen components
│   ├── HomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── ProfileScreen.tsx
│   └── ...
├── services/           # API services
│   └── api.ts         # HTTP client and API calls
├── shared/            # Shared utilities
└── types.tsx          # TypeScript type definitions
```

### Backend Architecture
```
backend/
├── models/            # Mongoose models
│   ├── User.js       # User model
│   ├── Post.js       # Post model
│   └── Notification.js # Notification model
├── routes/            # Express routes
│   ├── auth.js       # Authentication routes
│   ├── users.js      # User management routes
│   ├── posts.js      # Post management routes
│   └── notifications.js # Notification routes
├── middleware/        # Express middleware
│   └── auth.js       # JWT authentication middleware
└── server.js         # Main server file
```

## 📖 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token
- `POST /api/auth/verify-otp` - Verify email with OTP

### User Endpoints
- `GET /api/users/me` - Get current user profile
- `GET /api/users/:id` - Get user profile by ID
- `PUT /api/users/me` - Update current user profile
- `POST /api/users/:id/follow` - Follow a user
- `DELETE /api/users/:id/follow` - Unfollow a user
- `GET /api/users/search` - Search users

### Post Endpoints
- `GET /api/posts/feed` - Get posts feed
- `POST /api/posts` - Create new post
- `POST /api/posts/:id/like` - Like a post
- `DELETE /api/posts/:id/like` - Unlike a post
- `GET /api/posts/:id/comments` - Get post comments
- `POST /api/posts/:id/comments` - Add comment to post
- `DELETE /api/posts/:id` - Delete post

### Notification Endpoints
- `GET /api/notifications` - Get user notifications
- `PUT /api/notifications/:id/read` - Mark notification as read
- `PUT /api/notifications/read-all` - Mark all notifications as read

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Rate Limiting**: API abuse prevention
- **CORS**: Configurable cross-origin resource sharing
- **Input Validation**: Comprehensive request validation
- **Helmet**: Security headers for Express
- **Async Storage**: Secure local storage for tokens

## 🎨 UI Features

- **Modern Design**: Clean and intuitive user interface
- **Dark/Light Theme**: Consistent color scheme
- **Responsive Layout**: Adapts to different screen sizes
- **Loading States**: Proper loading indicators
- **Error Handling**: User-friendly error messages
- **Navigation**: Smooth transitions between screens

## 🔄 State Management

The app uses React Context API with useReducer for state management:

- **AuthContext**: Manages user authentication state
- **Persistent Storage**: Automatic token persistence
- **Loading States**: Global loading state management
- **Error Handling**: Centralized error handling

## 📱 Testing the App

1. **Register a new account** using the registration screen
2. **Login** with your credentials
3. **Create posts** on the home screen
4. **Follow other users** (create multiple accounts to test)
5. **Like and comment** on posts
6. **Check notifications** for interactions
7. **Update your profile** in the profile section

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables for production
2. Update MONGODB_URI to use cloud database (MongoDB Atlas)
3. Set strong JWT_SECRET
4. Deploy using your preferred platform

### Frontend Deployment
1. **Expo Publishing**:
   ```bash
   expo publish
   ```

2. **Building APK/IPA**:
   ```bash
   expo build:android
   expo build:ios
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Backend README](backend/README.md) for API documentation
2. Ensure MongoDB is running and accessible
3. Verify environment variables are set correctly
4. Check that the API URL in the frontend matches your backend URL

## 🔮 Future Enhancements

- Real-time messaging
- Image/video upload for posts
- Push notifications
- Story features
- Advanced search and filtering
- Admin panel
- Analytics dashboard

---

**Happy Coding! 🎉** 
