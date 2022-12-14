import 'whatwg-fetch';
import { clearAuthData, getTokenFromLS } from '../utils/local-storage-utils';
import { INCORRECT_URL_ERROR, UNKNOWN_ERROR } from '../constants/messages';

export type RequestError = Error & { response?: any; __error__?: string; status?: number };

export enum RequestMethods {
  get = 'GET',
  put = 'PUT',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE'
}

type GetOptionsParams = {
  body?: BodyInit;
  isFile?: boolean;
  contentType?: string;
  disableCache?: boolean;
  disableAuth?: boolean;
  method?: 'GET' | 'PATCH' | 'PUT' | 'POST' | 'DELETE';
};

export type HttpClient = (url: string, options?: GetOptionsParams) => Promise<any>;

export const parseJSON = (response: Response) =>
  response.json().catch((error) => {
    /* eslint-disable no-console */
    console.error('error', error);
    return {};
  });

const getErrorText = (response: Response) => {
  if (response.status === 404) return INCORRECT_URL_ERROR;
  return response?.statusText || UNKNOWN_ERROR;
};

export const checkStatus = async (response: Response) => {
  const { status, statusText } = response;

  const isSuccessStatus = status >= 200 && status < 300;
  if (isSuccessStatus) return response;

  const body = await parseJSON(response);
  const errorMessage = getErrorText(response);
  const isJwtExpired = body?.__error__ === 'jwt expired';
  const isUnauthorizedStatus = status === 401 && statusText === 'Unauthorized';

  const error = new Error(errorMessage) as RequestError;
  error.response = body;
  error.status = status;

  if (isUnauthorizedStatus) clearAuthData();
  if (isJwtExpired) window.location.reload();

  throw error;
};

export const getRequestParams = (options: GetOptionsParams = { method: RequestMethods.get }) => {
  const { body, method, contentType = 'application/json', isFile } = options;

  const token = getTokenFromLS();
  const headers = new Headers();
  const requestParams = { method, headers } as RequestInit & { headers: Headers };

  if (body) requestParams.body = body;
  if (!isFile) requestParams.headers.set('Content-Type', contentType);
  if (!options.disableAuth) {
    requestParams.headers.set('Authorization', `Bearer ${token}`);
  }

  if (options.disableCache) {
    requestParams.headers.set('pragma', 'no-cache');
    requestParams.headers.set('cache-control', 'no-cache');
    requestParams.cache = 'no-store';
  }

  return requestParams;
};

const httpClient: HttpClient = (url, options: GetOptionsParams = { method: RequestMethods.get }) => {
  const requestParams = getRequestParams(options);

  return fetch(url, requestParams)
    .then(checkStatus)
    .then(parseJSON)
    .catch((error) => {
      error.response = { ...(error?.response ?? {}), __error__: error.message };
      return Promise.reject(error);
    });
};

export default httpClient;
