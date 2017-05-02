export { GetLocation } from './GetLocation'
export { UniqueId } from './UniqueId'
export { FindInArray } from './FindInArray'
export { Spinner } from './Spinner'
export { CarouselText } from './CarouselText'
export { ResizeImage } from './ResizeImage'
export { ConvertB64toBlob } from './ConvertB64toBlob'
export { GetURLParamByName } from './GetURLParamByName'
import GetURLParamByName from './GetURLParamByName'

export const isAndroid = !!GetURLParamByName('android')