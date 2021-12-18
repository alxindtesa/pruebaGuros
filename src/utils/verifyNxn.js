const verifyNxn = (initialArray) => {
  const getSizeRows = initialArray.length;
  for (element of initialArray) {
    let getSizeCol = element.length;
    if (getSizeCol !== getSizeRows) return false;
  }
  return true;
};
module.exports = verifyNxn;
