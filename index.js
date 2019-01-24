const crypto = require('crypto')
const util = require('util');

const ece = require('http_ece');
const base64 = require('base64url');

const parameters = {
  key: base64.encode(crypto.randomBytes(16)),
  salt: base64.encode(crypto.randomBytes(16))
};

const data = Buffer.from('Hello, sailor!');

const encrypted = ece.encrypt(data, parameters);

console.log('Encrypted data (base64):');
console.log(util.inspect(encrypted.toString('base64'), {depth: null, colors: true}));

const decrypted = ece.decrypt(encrypted, parameters);

require('assert').equal(decrypted.compare(data), 0, 'Decrypted data does not match original');
console.log('Decrypted data matches original!');
