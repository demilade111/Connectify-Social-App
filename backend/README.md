# Connectify Backend API

A comprehensive Node.js/Express backend for the Connectify social media application with user authentication, posts, notifications, and social features.

## Features

- **User Authentication**: JWT-based authentication with registration, login, password reset
- **Social Features**: Follow/unfollow users, user profiles, user search
- **Posts Management**: Create, like, comment, delete posts with feed pagination
- **Notifications**: Real-time notifications for likes, comments, and follows
- **Security**: Helmet, CORS, rate limiting, input validation
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Express Validator
- **Security**: Helmet, CORS, bcryptjs
- **File Upload**: Multer + Cloudinary (optional)

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

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
   
   Edit `.env` file with your configuration:
   ```env
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/connectify
   JWT_SECRET=your-super-secret-jwt-key
   CLIENT_URL=http://localhost:19006
   ```

4. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

5. **Start the server**:
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Test the API**:
   ```bash
   curl http://localhost:3000/health
   ```

## API Documentation

### Base URL
```
http://localhost:3000/api
```

### Authentication

#### Register
```http
POST /auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Forgot Password
```http
POST /auth/forgot-password
Content-Type: application/json

{
  "email": "john@example.com"
}
```

### Users

#### Get Current User
```http
GET /users/me
Authorization: Bearer <token>
```

#### Get User Profile
```http
GET /users/:id
```

#### Update Profile
```http
PUT /users/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "username": "newusername",
  "bio": "Updated bio",
  "profilePicture": "https://example.com/image.jpg"
}
```

#### Follow User
```http
POST /users/:id/follow
Authorization: Bearer <token>
```

#### Unfollow User
```http
DELETE /users/:id/follow
Authorization: Bearer <token>
```

#### Search Users
```http
GET /users/search?q=john
```

### Posts

#### Get Feed
```http
GET /posts/feed?page=1&limit=10
Authorization: Bearer <token> (optional)
```

#### Create Post
```http
POST /posts
Authorization: Bearer <token>
Content-Type: application/json

{
  "content": "Hello world!",
  "images": ["https://example.com/image.jpg"]
}
```

#### Like Post
```http
POST /posts/:id/like
Authorization: Bearer <token>
```

#### Unlike Post
```http
DELETE /posts/:id/like
Authorization: Bearer <token>
```

#### Add Comment
```http
POST /posts/:id/comments
Authorization: Bearer <token>
Content-Type: application/json

{
  "content": "Great post!"
}
```

#### Get Comments
```http
GET /posts/:id/comments
```

### Notifications

#### Get Notifications
```http
GET /notifications?page=1&limit=20
Authorization: Bearer <token>
```

#### Mark as Read
```http
PUT /notifications/:id/read
Authorization: Bearer <token>
```

#### Mark All as Read
```http
PUT /notifications/read-all
Authorization: Bearer <token>
```

## Data Models

### User
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  profilePicture: String,
  bio: String,
  isVerified: Boolean,
  followers: [ObjectId],
  following: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

### Post
```javascript
{
  content: String,
  images: [String],
  author: ObjectId,
  likes: [ObjectId],
  comments: [{
    content: String,
    author: ObjectId,
    createdAt: Date
  }],
  isDeleted: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Notification
```javascript
{
  recipient: ObjectId,
  sender: ObjectId,
  type: String, // 'like', 'comment', 'follow'
  message: String,
  relatedPost: ObjectId,
  read: Boolean,
  isDeleted: Boolean,
  createdAt: Date
}
```

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Rate Limiting**: Prevents API abuse
- **CORS**: Configurable cross-origin resource sharing
- **Helmet**: Security headers
- **Input Validation**: Express Validator for request validation

## Error Handling

All API responses follow this format:

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "errors": [ ... ] // For validation errors
}
```

## Development

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (Jest)

### Database Indexes

The following indexes are automatically created for performance:
- Users: `email`, `username`
- Posts: `author + createdAt`, `createdAt`
- Notifications: `recipient + createdAt`, `read`

## Deployment

### Environment Variables for Production

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/connectify
JWT_SECRET=your-super-secure-secret
CLIENT_URL=https://your-frontend-domain.com
```

### Docker (Optional)

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License