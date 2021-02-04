
export function HttpRequest (url: any, data: any, method: any, contentType: any, baseUrl: any, noHeaders: any) {
    if (!noHeaders) {
        if (!contentType) contentType = "application/json";
            if (data && contentType === "application/json") {
                data = JSON.stringify(data);
        }
    }
} 