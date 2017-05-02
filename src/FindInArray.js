const FindInArray = (nameKey, prop, array) => {
  if ( nameKey && prop && array ) {
    // console.log(nameKey, prop, array)
    for (var i=0; i < array.length; i++) {
      if (array[i][prop] === nameKey) {
        return array[i];
      }
    }
  }
}
export default FindInArray