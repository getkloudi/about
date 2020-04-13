export default class ErrorUtil {
  static getError(message, status) {
    let err = new Error();
    err.message = message || "Oops! Something unexpected happened";
    err.status = status || 500;
    return err;
  }

  static getAlreadyExistsError(){
    
  }
}
