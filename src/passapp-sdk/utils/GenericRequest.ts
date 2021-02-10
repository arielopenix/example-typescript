import { GenericOptions } from './GenericOption';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface GenericRequest {
    method: RequestMethod;
    url: string;
    options?: GenericOptions;
}