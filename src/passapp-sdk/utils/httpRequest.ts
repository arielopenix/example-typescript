import { ResponseType } from "./GenericOption";
import { GenericRequest } from "./GenericRequest";

export class HttpRequest {
  get<T>(
    url: string,
    params?: any,
    headers?: any,
    responseType?: ResponseType
  ): Promise<T> {
    const options: GenericRequest = {
      method: "GET",
      url,
      options: { params, headers, responseType },
    };
    return this.requestAll<T>(options);
  }
  post<T, K>(
    url: string,
    body?: T,
    params?: any,
    headers?: any,
    responseType?: ResponseType
  ): Promise<K> {
    const options: GenericRequest = {
      method: "POST",
      url,
      options: { params, headers, body, responseType },
    };
    return this.requestAll<K>(options);
  }
  patch<T, K>(
    url: string,
    body: T,
    params?: any,
    headers?: any,
    responseType?: ResponseType
  ): Promise<K> {
    const options: GenericRequest = {
      method: "PATCH",
      url,
      options: { params, headers, body, responseType },
    };
    return this.requestAll<K>(options);
  }
  put<T, K>(
    url: string,
    body: T,
    params?: any,
    headers?: any,
    responseType?: ResponseType
  ): Promise<K> {
    const options: GenericRequest = {
      method: "PUT",
      url,
      options: { params, headers, body, responseType },
    };
    return this.requestAll<K>(options);
  }
  delete<T>(
    url: string,
    headers?: any,
    responseType?: ResponseType
  ): Promise<T> {
    const options: GenericRequest = {
      method: "DELETE",
      url,
      options: { headers, responseType },
    };
    return this.requestAll<T>(options);
  }
  requestAll<T>(requestOptions: GenericRequest): Promise<T> {
    const { method, url, options } = requestOptions;
    return new Promise((resolve, reject) => {
      //const configValue: string = (process.env.REACT_APP_BASE_URL as string);
      fetch(process.env.REACT_APP_BASE_URL + url, {
        method: method,
        body: JSON.stringify(options?.body),
      })
        .then((response) => {
          response
            .json()
            .then((json) => {
              if (json.status === "error") {
                reject(json.msg);
              } else {
                if (json.data) {
                  resolve(json.data);
                } else {
                  resolve(json);
                }
              }
            })
            .catch((err) => {
              console.log(err);
              reject(err.msg);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}
