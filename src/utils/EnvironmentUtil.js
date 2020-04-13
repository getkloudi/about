export default class EnvironmentUtil {
  static getApiBaseUrl() {
    return process.env.GATSBY_API_URL;
  }
}
