// generateSecret.js
const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex'); // Generates a 64-byte (128-character hex) random string
console.log(secret);
