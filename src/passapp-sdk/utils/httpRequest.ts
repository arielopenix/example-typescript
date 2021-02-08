export class HttpRequest {
  getHttpRequest(
    url: string,
    data: any,
    method: 'get' | 'post' | 'put' | 'delete',
    contentType?: string,
    baseUrl?: string,
    noHeaders?: any
  ) {
    if (!noHeaders) {
      if (!contentType) contentType = "application/json";
      if (data && contentType === "application/json") {
        data = JSON.stringify(data);
      }
    }
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl ? baseUrl : process.env.REACT_APP_BASE_URL}${url}`, {
        method: method || "get",
        body: data || null,
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
  getBaseUrl() {
    return process.env.REACT_APP_BASE_URL;
  }
}
  

