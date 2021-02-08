import { getHttpRequest } from './utils/httpRequest'

export class Auth {

    login(email: string, password: string): Promise<any> {
        return getHttpRequest(`ws/login`,{
            email: email,
            password: password
            },"post"
        )
    }
}
