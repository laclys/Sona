import { format } from "url"

const toString = Object.prototype.toString

export function isDate(val: any) : val is Date {
  return toString.call(val) === '[Object Date]'
}

export function isObject(val: any) : val is Object {
  return val !== null && typeof val === 'object'
}

export function isPlainObject (val:any) : val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}


// tips: 如果括号开头的语句不加分号，那么代码压缩后合并到一行后非常容易变成一个函数的调用了，所以需要加分号。另外以 +、-、/、()、[] 这些字符开头的语句，都需要加分号。