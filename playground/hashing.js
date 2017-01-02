const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 10,
  user: "Matt"
};

let token = jwt.sign(data, 'secret');

console.log(token);

let deco = jwt.verify(token, 'secret');
console.log(deco);

// let message = '';
// let hash = SHA256(message).toString();
//
// // console.log(`Message: ${message}`);
// // console.log(`Hash: ${hash}`);
//
// let data = {
//   id: "Hola"
// };
//
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString()
// };
