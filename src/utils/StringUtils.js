const MAX_QUERY_SIZE = 50;
export default class StringUtils {
  /**
   *
   * @param {string} phrase
   * @param {string} newWord
   */
  static replaceLastWord(phrase, newWord) {
    if (!phrase || phrase.trim().length === 0) {
      return '' + newWord + ' ';
    } else {
      if (phrase.charAt(phrase.length - 1) == ' ') {
        return phrase.trim() + ' ' + newWord + ' ';
      } else {
        const spaceIndex = phrase.lastIndexOf(' ');
        if (spaceIndex == -1) {
          return newWord + ' ';
        } else {
          return phrase.slice(0, spaceIndex).trim() + +' ' + newWord + ' ';
        }
      }
    }
  }

  /**
   *
   * @param {String} str
   * @returns {String} lowercase string which is trimmed from front and end and multiple spaces are replaced with hyphens
   */
  static toLowerCaseId(str) {
    const lowercase = str.trim().toLowerCase();
    return lowercase.replace(/\s\s+/g, '-');
  }
}

export function toUpperCaseId(str) {
  const uppercase = str.trim().toUpperCase();
  return uppercase.replace(/\s\s+/g, '').replace(new RegExp(' ', 'g'), '-');
}

export function toLowerCaseId(str) {
  const lowerCaseStr = str.trim().toLowerCase();
  return lowerCaseStr.replace(/\s\s+/g, '').replace(new RegExp(' ', 'g'), '-');
}

export function toCurrencyFormat(_number, _sep) {
  _number = typeof _number != 'undefined' && _number > 0 ? _number : '';
  _number = _number + '';
  _number = _number
    .replace(
      new RegExp(
        '^(\\d{' + (_number.length % 3 ? _number.length % 3 : 0) + '})(\\d{3})',
        'g'
      ),
      '$1 $2'
    )
    .replace(/(\d{3})+?/gi, '$1 ')
    .trim();
  if (typeof _sep != 'undefined' && _sep != ' ') {
    _number = _number.replace(/\s/g, _sep);
  } else {
    _number = _number.replace(/\s/g, ',');
  }
  return _number;
}

export function formatStringToQueryLength(query) {
  if (query.length > MAX_QUERY_SIZE) {
    return query.slice(0, MAX_QUERY_SIZE - 3) + '...';
  } else {
    return query;
  }
}

export function toTitleCase(str) {
  if (!str || str.length <= 0) return str;
  var sentence = str.toLowerCase().split(' ');
  for (var i = 0; i < sentence.length; i++) {
    if (!sentence[i] || sentence.length <= 0) continue;
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(' ');
}
