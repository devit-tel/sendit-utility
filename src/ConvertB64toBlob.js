const ConvertB64toBlob = (dataURL) => {
  return fetch(dataURL)
    .then(res => res.blob())
    .then(blob => {
      return blob
    })
}
export default ConvertB64toBlob