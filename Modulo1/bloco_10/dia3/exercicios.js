const randomValue = () => Math.round(Math.random() * 100);

const tallBox = (string) => (string.toUpperCase());

const stringFirstCarac = (string) => string.substr(0, 1);

const concatString = (str1, str2) => {
  let array = [str1, str2];
  return array.join('');
}

module.exports = {
  randomValue,
  tallBox,
  stringFirstCarac,
  concatString
}