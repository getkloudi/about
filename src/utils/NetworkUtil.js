import Axios from 'axios';

export default class NetworkUtil {
  static get(baseUrl, endPoint, headers, queryParams) {
    const url = baseUrl + endPoint;
    return Axios.get(url, {
      headers: { ...headers, 'Access-Control-Allow-Origin': '*' },
      params: queryParams
    });
  }

  static post(baseUrl, endPoint, headers, body) {
    const url = baseUrl + endPoint;
    return Axios.post(url, body, {
      headers: headers
    });
  }

  static delete(baseUrl, endPoint, headers) {
    const url = baseUrl + endPoint;
    return Axios.delete(url, {
      headers: { ...headers, 'Access-Control-Allow-Origin': '*' }
    });
  }

  static postFormData(url, headers, body) {}
}
