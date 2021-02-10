export declare type HttpObserve = 'body' | 'events' | 'response';
export declare type ResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';

export class GenericOptions {
    body?: any;
    headers?: any;
    params?: any;
    responseType?: ResponseType;
}