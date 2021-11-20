module.exports = () => {

  const confessionParser = (array) =>{
    let parsedData = array[0][0]
    parsedData["likes"] = array[1]
    parsedData["comments"] = array[2]
  
    return parsedData
  }

  return { confessionParser }
}