export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}

class Device {
  ua = navigator.userAgent
  get isIphone() {
    return /iPhone/gi.test(this.ua)
  }
  get isAndroid() {
    return /Android/gi.test(this.ua)
  }
  get isWechat() {
    return /micromessenger/gi.test(this.ua)
  }
  get isQQ() {
    return /Mqqbrowser/gi.test(this.ua)
  }
  get isApp() {
    const query = parseQuery(location.search)
    if (query.deviceType) {
      return true
    }
    return false
  }
  get isQQbrowser() {
    return /MQQbrowser/gi.test(this.ua)
  }
}
export const device = new Device()

export const sleep = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const encodeReserveRE = /[!'()*]/g
const encodeReserveReplacer = c => '%' + c.charCodeAt(0).toString(16)
const commaRE = /%2C/g
const encode = str =>
  encodeURIComponent(str)
    .replace(encodeReserveRE, encodeReserveReplacer)
    .replace(commaRE, ',')
const decode = decodeURIComponent

export function parseQuery(query) {
  const res = {}
  query = query.trim().replace(/^(\?|#|&)/, '')
  if (!query) {
    return res
  }
  query.split('&').forEach(param => {
    const parts = param.replace(/\+/g, ' ').split('=')
    const key = decode(parts.shift())
    const val = parts.length > 0 ? decode(parts.join('=')) : null
    if (res[key] === undefined) {
      res[key] = val
    } else if (Array.isArray(res[key])) {
      res[key].push(val)
    } else {
      res[key] = [res[key], val]
    }
  })
  return res
}
export function stringifyQuery(obj) {
  const res = obj
    ? Object.keys(obj)
        .map(key => {
          const val = obj[key]

          if (val === undefined) {
            return ''
          }

          if (val === null) {
            return encode(key)
          }

          if (Array.isArray(val)) {
            const result = []
            val.forEach(val2 => {
              if (val2 === undefined) {
                return
              }
              if (val2 === null) {
                result.push(encode(key))
              } else {
                result.push(encode(key) + '=' + encode(val2))
              }
            })
            return result.join('&')
          }

          return encode(key) + '=' + encode(val)
        })
        .filter(x => x.length > 0)
        .join('&')
    : null
  return res ? `?${res}` : ''
}
