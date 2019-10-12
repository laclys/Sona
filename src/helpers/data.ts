import { isPlainObject } from './util'

export function transformRequest(data:any):any {
  if (isPlainObject(data)) {
    console.log(JSON.stringify(data))
    return JSON.stringify(data)
  }
  return data
}