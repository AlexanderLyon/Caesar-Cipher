
module.exports.encode = function(str, key) {
  let letters = str.toUpperCase().split('');

  return letters.map( (letter) => {
    let charCode = letter.charCodeAt(0);

    if (charCode < 65 || charCode > 90 ) {
      // Non-alphanumeric character
      return String.fromCharCode(charCode);
    }
    else if (charCode + key > 90) {
      return String.fromCharCode(charCode + key - 26);
    }
    else {
      return String.fromCharCode(charCode + key);
    }
  }).join('');
};


module.exports.decode = function(str, key) {
  let letters = str.split('');

  return letters.map( (letter) => {
    let charCode = letter.charCodeAt(0);

    if (charCode < 65 || charCode > 90 ) {
      // Non-alphanumeric character
      return String.fromCharCode(charCode);
    }
    else if (charCode - key < 65) {
      return String.fromCharCode(charCode - key + 26);
    }
    else {
      return String.fromCharCode(charCode - key);
    }
  }).join('');
};
