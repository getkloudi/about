export function isEmail(str) {
  if (!str) return false;
  if (typeof str !== "string") return false;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(str.toLowerCase());
}

export function isString(str) {
  return typeof str === "string";
}

export function isPhone(str) {
  let temp = str;
  if (!temp) return false;
  if (temp.startsWith("+")) {
    temp = temp.substring(1).trim();
    if (!temp) {
      return false;
    } else {
      temp = temp.replace(/-+/g, "");
      if (temp.length < 6) {
        return false;
      } else {
        if (Number.parseInt(temp, 10)) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    if (temp.length < 6) {
      return false;
    } else {
      if (Number.parseInt(temp, 10) == temp) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export function isNotEmpty(str) {
  if (typeof str !== "string") return false;
  if (str.length === 0) return false;
  return true;
}
