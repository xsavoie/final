module.exports = () => {

  const confessionParser = (array) =>{
    let parsedData = array[0][0]
    parsedData["likes"] = array[1]
    parsedData["comments"] = array[2]
  
    return parsedData
  }

  const idParser = (array) => {
    let parsedArray = [];
    for (const object of array) {
      parsedArray.push(object.id);
    }
    return parsedArray;
  }

  return { confessionParser, idParser }
}