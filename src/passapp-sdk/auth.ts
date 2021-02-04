import httpRequest from './utils/httpRequest'

export function login(email: string, password: string): Promise<any> {
    return httpRequest(`ws/login`,{
        email: email,
        password: password
        },"post"
    )
}