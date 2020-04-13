import localSource from './local/LocalSource';
import remoteSource from './remote/RemoteSource';

class AuthRepository {
  async signIn(authInfo) {
    const data = await remoteSource.signIn(authInfo);
    localSource.setUserInfo(
      data.userName,
      data.uid,
      data.token,
      authInfo.email
    );
    return data;
  }

  async signUp(info) {
    await remoteSource.signUpForEAP(info);
  }

  signOut() {
    localSource.cleanup();
  }

  isAuthenticated() {
    if (typeof window !== `undefined`) {
      const token = localSource.getAuthToken();
      return token || false;
    } else {
      return false;
    }
  }

  getUserName() {
    return localSource.getUserName();
  }

  getName() {
    return localSource.getName();
  }

  getUid() {
    return localSource.getUid();
  }

  getAuthToken() {
    return localSource.getAuthToken();
  }
}

export default new AuthRepository();
