let env = process.env.NODE_ENV || 'development';

switch (env) {
  case 'development':
    process.env.PORT = 3001;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
    break;
  case 'test':
    process.env.PORT = 3001;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
    break;
  case 'production':
      // Heroku
      process.env.MONGODB_URI = 'mongodb://tofful:123456@ds149268.mlab.com:49268/todoapp';
      break;
  default:
    // Development by default
    process.env.PORT = 3002;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}
