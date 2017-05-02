import ConvertB64toBlob from './ConvertB64toBlob'

const ResizeImage = (file, options) => {
  return new Promise ((resolve, reject) => {
    let img = new Image()
    img.onload = () => {
      let { MAX_WIDTH, MAX_HEIGHT, _blob } = options

      MAX_WIDTH = MAX_WIDTH || 1200
      MAX_HEIGHT = MAX_HEIGHT || 900

      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)

      let width = img.width
      let height = img.height

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width
          width = MAX_WIDTH
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height
          height = MAX_HEIGHT
        }
      }

      height = Math.floor(height)

      canvas.width = width
      canvas.height = height

      ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, width, height)

      let dataURL = canvas.toDataURL('image/png')

      if (_blob) {
        // console.log('blob', ConvertB64toBlob(dataURL))
        resolve( ConvertB64toBlob(dataURL) )
      } else {
        resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""))
      }
    }
    img.src = file
  })
}
export default ResizeImage