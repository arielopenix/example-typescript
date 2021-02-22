import { HttpRequest } from "./utils/HttpRequest";

export default class Auth {
  httpReq = new HttpRequest();
  //Services
  login(email: string, password: string): Promise<any> {
    return this.httpReq.post(`ws-security/login`, {
      email: email,
      password: password,
    });
  }
  getUser(token: string): Promise<any> {
    return this.httpReq.post(`ws/getUser`, {
      token: token,
    });
  }
}
