const convertVerticalColumns = (originalMatrix) => {
    const data = [...originalMatrix]
    return data.map((_, colIndex) => data.map(row => row[colIndex]));
}
module.exports = convertVerticalColumns