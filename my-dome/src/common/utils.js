const decode = decodeURIComponent;

class Device {
  ua = navigator.userAgent;
  get isIos() {
    return /iP[ad|od|hone]/gi.test(this.ua);
  }
  get isAndroid() {
    return /Android/gi.test(this.ua);
  }
  get isWechat() {
    return /micromessenger/gi.test(this.ua);
  }
  get isAndroidQQ() {
    return (
      /(Android)/i.test(this.ua) &&
      /MQQBrowser/i.test(this.ua) &&
      /\sQQ/i.test(this.ua.split('MQQBrowser'))
    );
  }
  get isIOSQQ() {
    return /(iPhone|iPad|iPod|iOS)/i.test(this.ua) && /\sQQ/i.test(this.ua);
  }
}

export function parseQuery(query) {
  const res = {};
  query = query.trim().replace(/^(\?|#|&)/, '');
  if (!query) {
    return res;
  }
  query.split('&').forEach(param => {
    const parts = param.replace(/\+/g, ' ').split('=');
    const key = decode(parts.shift());
    const val = parts.length > 0 ? decode(parts.join('=')) : null;
    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });
  return res;
}

export const device = new Device();
