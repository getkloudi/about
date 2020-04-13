import EventEmitter2 from 'eventemitter2';

export default class VSCodeConnector extends EventEmitter2.EventEmitter2 {
  constructor() {
    super();
    window.addEventListener('message', event => {
      this.onMessage(event);
    });
  }

  getUserInfo = _ => {
    this.send('extension.getUserInfo', {});
  };

  updateUserInfo = (email, name, token, uid, username) => {
    this.send('extension.updateUserInfo', {
      email: email,
      name: name,
      token: token,
      uid: uid,
      username: username
    });
  };

  send = (type, params) => {
    console.log('onSend ► ', JSON.stringify({ type: type, params: params }));
    window.parent.postMessage({ type: type, params: params }, '*');
  };

  onMessage = message => {
    const data = message.data;
    console.log(`◀ Received Message : ${JSON.stringify(data)}`);
    this.emit(data.type, data.params);
  };
}
