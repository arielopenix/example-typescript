import { HttpRequest } from "./utils/httpRequest";

export default class Auth {
  httpReq = new HttpRequest();
  //Functions
  login(email: string, password: string): Promise<any> {
    return this.httpReq.getHttpRequest(
      `ws/security`,
      { email: email, password: password },
      "post"
    );
  }
}
