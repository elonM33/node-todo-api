const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

let hashedPassword = '$2a$10$FuNIM3UqMcaySErZkVmlM.oj1V/SXgnrlIHr0tjb.RFiFfc3XIgQi';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// let data = {
//   id: 10,
//   user: "Matt"
// };
//
// let token = jwt.sign(data, 'secret');
//
// console.log(token);
//
// let deco = jwt.verify(token, 'secret');
// console.log(deco);

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
