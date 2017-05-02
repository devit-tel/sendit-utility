const GetLocation = () => {
  return new Promise ((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let latitude = position.coords.latitude
          let longitude = position.coords.longitude
          let accuracy = position.coords.accuracy
          resolve({
            success: true,
            data: {
              lat: latitude,
              lng: longitude,
              acc: accuracy
            }
          })
        },
        (error) => {
          const errors = { 
            1: 'Permission denied',
            2: 'Position unavailable',
            3: 'Request timeout'
          }
          reject({
            error: true,
            message: errors[error.code]
          })
          // console.log(errors[error.code])
        },
        {
          maximumAge:600000,
          timeout:5000,
          enableHighAccuracy: true
        }
      )
    } else {
      reject({
        error: true,
        message: 'Location not support!'
      })
      // console.log('Location not support!')
    }
  })
}
export default GetLocation