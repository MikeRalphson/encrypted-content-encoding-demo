var ece = require('http_ece');
var crypto = require('crypto')
var base64 = require('base64url');

var parameters = {
  key: base64.encode(crypto.randomBytes(16)),
  salt: base64.encode(crypto.randomBytes(16))
};

const data = Buffer.from('Hello, sailor!');

var encrypted = ece.encrypt(data, parameters);

var decrypted = ece.decrypt(encrypted, parameters);

require('assert').equal(decrypted.compare(data), 0);
