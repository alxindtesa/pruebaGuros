const reverseArray = (original) => {
    const originalMatrix = [...original]
    const parsedArray = []
    for(element of originalMatrix){
        parsedArray.push(element.reverse())
    }
    return parsedArray
}
module.exports = reverseArray