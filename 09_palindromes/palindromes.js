const palindromes = function (str) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const formattedStr = str
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  const rev = formattedStr.split('').reverse().join('');

  return formattedStr === rev;
};

// Do not edit below this line
module.exports = palindromes;
