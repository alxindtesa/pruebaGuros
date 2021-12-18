const convertColumns = (originalMatrix) => {
    const arrayToCols = []
    for (element of originalMatrix) {
        const parsedMatrix = []
        for(subElement of element){
            parsedMatrix.push(subElement)
        }
        arrayToCols.push(parsedMatrix)
      }  
      return arrayToCols
}
module.exports = convertColumns