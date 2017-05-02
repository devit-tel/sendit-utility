const UniqueId = (length) => {
  let uuid = ''
  const randomString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for( var i=0; i < length; i++ )
    uuid += randomString.charAt(Math.floor(Math.random() * randomString.length))
  return uuid
}
export default UniqueId