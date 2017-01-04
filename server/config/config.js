let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  let config = require('./config.json');
  let envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}

if (env === 'production') {
  process.env.MONGODB_URI = 'mongodb://tofful:123456@ds149268.mlab.com:49268/todoapp';
}

// switch (env) {
//   case 'development':
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
//     break;
//   case 'test':
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
//     break;
//   case 'production':
//       // Heroku
//       process.env.MONGODB_URI = 'mongodb://tofful:123456@ds149268.mlab.com:49268/todoapp';
//       break;
//   default:
//     // Development by default
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// }
