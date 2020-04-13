import keyStore from './KeyValStore';
import stateStore from '../StateStore';
import VSCodeConnector from '../../utils/VSCodeConnector';

class LocalSource {
  constructor() {
    if (typeof window !== `undefined` && process.env.PLATFORM === `VSCODE`) {
      this.connection = new VSCodeConnector();
      this.connection.getUserInfo();
      this.connection.on('app.userInfo', payload => {
        if (!!payload) {
          stateStore.set('KLOUDI_AUTH_TOKEN', payload.token);
          stateStore.set('KLOUDI_UID', payload.uid);
          stateStore.set('KLOUDI_USERNAME', payload.username);
          return;
        }
      });
    }
  }

  getAuthToken() {
    if (process.env.PLATFORM === 'VSCODE')
      return stateStore.get('KLOUDI_AUTH_TOKEN');
    return (
      keyStore.get('KLOUDI_AUTH_TOKEN') || stateStore.get('KLOUDI_AUTH_TOKEN')
    );
  }

  setAuthToken(token) {
    if (process.env.PLATFORM === 'VSCODE')
      stateStore.set('KLOUDI_AUTH_TOKEN', token);
    keyStore.set('KLOUDI_AUTH_TOKEN', token);
  }

  removeAuthToken() {
    if (process.env.PLATFORM === 'VSCODE')
      stateStore.removeData('KLOUDI_AUTH_TOKEN');
    keyStore.remove('KLOUDI_AUTH_TOKEN');
  }

  getUserName() {
    if (process.env.PLATFORM === 'VSCODE')
      return stateStore.get('KLOUDI_USERNAME');
    return keyStore.get('KLOUDI_USERNAME') || stateStore.get('KLOUDI_USERNAME');
  }

  setUserName(username) {
    if (process.env.PLATFORM === 'VSCODE')
      stateStore.set('KLOUDI_USERNAME', username);
    keyStore.set('KLOUDI_USERNAME', username);
  }

  removeUserName() {
    if (process.env.PLATFORM === 'VSCODE')
      stateStore.removeData('KLOUDI_USERNAME');
    keyStore.remove('KLOUDI_USERNAME');
  }

  getName() {
    if (process.env.PLATFORM === 'VSCODE') return stateStore.get('KLOUDI_NAME');
    return keyStore.get('KLOUDI_NAME') || stateStore.get('KLOUDI_NAME');
  }

  setName(name) {
    if (process.env.PLATFORM === 'VSCODE') stateStore.set('KLOUDI_NAME', name);
    keyStore.set('KLOUDI_NAME', name);
  }

  removeName() {
    if (process.env.PLATFORM === 'VSCODE') stateStore.removeData('KLOUDI_NAME');
    keyStore.remove('KLOUDI_NAME');
  }

  getUid() {
    if (process.env.PLATFORM === 'VSCODE') return stateStore.get('KLOUDI_UID');
    return keyStore.get('KLOUDI_UID') || stateStore.get('KLOUDI_UID');
  }

  setUid(uid) {
    if (process.env.PLATFORM === 'VSCODE') stateStore.set('KLOUDI_UID', uid);
    keyStore.set('KLOUDI_UID', uid);
  }

  removeUid() {
    if (process.env.PLATFORM === 'VSCODE') stateStore.removeData('KLOUDI_UID');
    keyStore.remove('KLOUDI_UID');
  }

  getEmail() {
    if (process.env.PLATFORM === 'VSCODE')
      return stateStore.get('KLOUDI_EMAIL');
    return keyStore.get('KLOUDI_EMAIL') || stateStore.get('KLOUDI_EMAIL');
  }

  setEmail(email) {
    if (process.env.PLATFORM === 'VSCODE')
      stateStore.set('KLOUDI_EMAIL', email);
    keyStore.set('KLOUDI_EMAIL', email);
  }

  removeEmail() {
    if (process.env.PLATFORM === 'VSCODE')
      stateStore.removeData('KLOUDI_EMAIL');
    keyStore.remove('KLOUDI_EMAIL');
  }

  cleanup() {
    stateStore.clear();
    if (process.env.PLATFORM === `WEB`) keyStore.clear();
    if (typeof window !== `undefined` && process.env.PLATFORM === `VSCODE`)
      this.removeUserInfoInVSCodeExtension();
  }

  getUserInfo() {
    return {
      email: this.getEmail(),
      name: this.getName(),
      token: this.getAuthToken(),
      uid: this.getUid(),
      username: this.getUserName()
    };
  }

  setUserInfo(username, uid, token, email = undefined, name = undefined) {
    this.setAuthToken(token);
    this.setUid(uid);
    this.setUserName(username);
    this.setEmail(email);
    this.setName(name);
  }

  updateUserInfoInVSCodeExtension(
    username,
    uid,
    token,
    email = undefined,
    name = undefined
  ) {
    this.connection.updateUserInfo(email, name, token, uid, username);
  }

  removeUserInfoInVSCodeExtension() {
    this.connection.updateUserInfo(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    );
  }

  removeUserInfo() {
    this.cleanup();
  }
}

export default new LocalSource();
