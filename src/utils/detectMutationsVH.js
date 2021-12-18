const detectMutationsVH = (original) => {
    const originalMatrix = [...original]
    let finalCounter = 0
    for (element of originalMatrix) {
        for(let i = 0; i < element.length; i++){
            const letterFind = element[i]
            let counter = 0
            for(let m = i+1;m<element.length;m++){
                if(letterFind === element[m]){
                    counter++
                }else{
                    if(counter <3){
                        counter--
                    }
                }
            }
            if(counter===3){
                finalCounter++
            }
        }
      }
      return finalCounter
}
module.exports = detectMutationsVH