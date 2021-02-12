import { HttpRequest } from "./utils/HttpRequest";

export default class Auth {
  httpReq = new HttpRequest();
  //Services
  login(email: string, password: string): Promise<any> {
    return this.httpReq.post(
      `ws-security`,
      { email: email, password: password }
    );
  }
}
