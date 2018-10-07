const cipher = require('./cipher.js');
const key = 5;

const encodedString = cipher.encode('The quick brown fox jumps over the lazy dog', key);
console.log("Encoded:", encodedString); // YMJ VZNHP GWTBS KTC OZRUX TAJW YMJ QFED ITL

const decodedString = cipher.decode(encodedString, key);
console.log("Decoded:", decodedString);
