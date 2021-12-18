const detectMutationOblique = (originalMatrix) => {
  let finalCounter = 0;
  for (let i = 0; i < originalMatrix.length; i++) {
    for (let d = 0; d < originalMatrix[i].length; d++) {
      const letterFind = originalMatrix[i][d];
      let counter1 = 0;
      let counter2 = 0;
      for (let z = i + 1; z < originalMatrix.length; z++) {
        counter1++;
        if (letterFind === originalMatrix[z][counter1 + d]) {
          counter2++;
        } else {
          if (counter2 === 0 || counter2 === 3) {
          } else {
            counter2--;
          }
        }
      }
      if (counter2 === 3) {
        finalCounter++;
      }
    }
  }
  return finalCounter;
};
module.exports = detectMutationOblique;
