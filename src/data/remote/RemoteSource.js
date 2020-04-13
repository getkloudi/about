import EnvironmentUtil from '../../utils/EnvironmentUtil';
import NetworkUtil from '../../utils/NetworkUtil';
import ErrorUtil from '../../utils/ErrorUtil';

/**
 * This class has a let of repeated code.
 * It can be simplified a lot by using get post methods local to the module.
 * NetworkUtil class should be merged with this class and NetowrkUtil should be removed.
 */

function parseResponse(res) {
  if (isError(res)) {
    throw ErrorUtil.getError(res.data.status, res.data.message);
  } else {
    return res.data.data;
  }
}

function isError(res) {
  return res.status >= 400 || res.data.status >= 400;
}

function getBaseUrl() {
  return EnvironmentUtil.getApiBaseUrl();
}

class RemoteSource {
  async signUpForEAP(userInfo) {
    const baseUrl = getBaseUrl();
    const endPoint = '/auth/signup-eap/';
    const res = await NetworkUtil.post(baseUrl, endPoint, null, userInfo);
    return parseResponse(res);
  }
}

export default new RemoteSource();
