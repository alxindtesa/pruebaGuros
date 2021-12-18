const convertVerticalColumns = require("./convertVerticalColumns");
const convertColumns = require("./convertColumns");
const detectMutationsVH = require("./detectMutationsVH");
const detectMutationOblique = require("./detectMutationOblique");
const reverseArray = require("./reverseArray");
const verifyLetters = require("./verifyLetters");
const verifyNxn = require("./verifyNxn");
const pipeline =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);
const hasMutation = (initialArray) => {
  if (typeof initialArray !== "object") return undefined;
  if (initialArray.length === undefined || initialArray.length===0) return undefined;
  const originalMatrix = convertColumns(initialArray);
  if (!verifyLetters(originalMatrix)) return undefined;
  if (!verifyNxn(originalMatrix)) return undefined;
  const verifyOriginalMatrix = detectMutationsVH(originalMatrix);
  const verifyTransposeMatrix = pipeline(
    convertVerticalColumns,
    detectMutationsVH
  )(originalMatrix);
  const verifyObliqueOriginal = detectMutationOblique(originalMatrix);
  const verifyObliqueReverse = pipeline(
    reverseArray,
    detectMutationOblique
  )(originalMatrix);
  const verifyMutations =
    verifyOriginalMatrix +
    verifyTransposeMatrix +
    verifyObliqueOriginal +
    verifyObliqueReverse;
  if (verifyMutations > 1) return true;
  return false;
};
module.exports = hasMutation;
