const validArray = ["A", "T", "C", "G"];
const verifyLetters = (initialArray) => {
  for (element of initialArray) {
    for (let i = 0; i < element.length; i++) {
      if (!validArray.includes(element[i])) return false;
    }
  }
  return true;
};
module.exports = verifyLetters;
