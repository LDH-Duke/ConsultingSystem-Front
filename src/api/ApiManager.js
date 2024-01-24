/**
 *
 */

// import { getCookie, BACKEND_URL } from '.';

const getCookie = (name, options = null) => {
  const value = window.document.cookie.match(
    '(^|;) ?' + name + '=([^;]*)(;|$)'
  );
  return value ? decodeURIComponent(value[2]) : null;
};

const BACKEND_URL = `http://3.38.166.44:3333`;

export default class ApiManager {
  /**
   *
   */
  constructor() {
    if (!ApiManager.instance) {
      this.BASE_URL =
        process.env.NODE_ENV === 'development'
          ? `${BACKEND_URL}/api/v1`
          // : 'http://3.34.90.66:3333/api/v1';
          : 'http://3.38.166.44:3333/api/v1';
      // ? 'http://localhost:3333/api/v1'
      // ? 'http://localhost:3333/api/v1'
      // 싱글톤 변수 할당
      ApiManager.instance = this;
    }
    return ApiManager.instance;
  }

  /**
   *
   */
  setHeaders = (headers = {}) => {
    this.headers = {
      ...this.headers,
      headers,
    };
  };

  /**
   *
   */
  getHeaders = () => {
    this.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json',
      mode: 'no-cors',
      'Access-Control-Allow-Origin': '*',
      // 'Content-Type': 'application/json;',
      // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Authorization: `Bearer ${encodeURIComponent(getCookie('token'))}`,
    };
    return this.headers;
  };

  /**
   * NOTE Usualy Arrow function, return has same line.
   */
  get = (url, params = null) => this.getRequest(url, 'GET', params);
  delete = (url, body = null, stringify = true) => {
    return this.deleteRequest(url, body, stringify, 'DELETE');
  };

  post = (url, body = null, stringify = true) => {
    return this.postRequest(url, body, stringify, 'POST');
  };
  put = (url, body = null, stringify = true) => {
    return this.postRequest(url, body, stringify, 'PUT');
  };
  multipart = (url, body = null) => {
    return this.multipartRequest(url, body, 'POST');
  };

  /**
   * GET & DELETE
   */
  getRequest = async (url, method = 'GET', params) => {
    try {
      const headers = this.getHeaders();
      const queryString = this._jsonToQueryString(params);
      const response = await fetch(`${this.BASE_URL}${url}${queryString}`, {
        method,
        headers,
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error,
      };
    }
  };

  /**
   * POST & PUT
   */
  postRequest = async (url, body = null, stringify = true, method = 'POST') => {
    try {
      const bodyData = body ? (stringify ? JSON.stringify(body) : body) : {};
      const headers = this.getHeaders();
      const response = await fetch(`${this.BASE_URL}${url}`, {
        method,
        headers,
        ...(body && { body: bodyData }),
        // body: JSON.stringify(body)
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error,
      };
    }
  };

  /**
   * DELETE
   */
  deleteRequest = async (
    url,
    body = null,
    stringify = true,
    method = 'DELETE'
  ) => {
    try {
      const bodyData = body ? (stringify ? JSON.stringify(body) : body) : {};
      const headers = this.getHeaders();
      const response = await fetch(`${this.BASE_URL}${url}`, {
        method,
        headers,
        ...(body && { body: bodyData }),
        // body: JSON.stringify(body)
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error,
      };
    }
  };

  /**
   * Multipart File
   */
  multipartRequest = async (url, body = null, method = 'POST') => {
    try {
      const response = await fetch(`${this.BASE_URL}${url}`, {
        method,
        headers: {
          Accept: '*/*',
          'Cache-Control': 'no-cache',
          'Accept-Encoding': 'gzip, deflate',
          'cache-control': 'no-cache',
          'Access-Control-Allow-Origin': '*', // Required for CORS support to work
          'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          'content-type': 'application/x-www-form-urlencoded',
        },
        processData: false,
        contentType: false,
        mimeType: 'multipart/form-data',
        body: body,
      });
      //console.log(response);
      const responseJson = await response.json();
      //console.log("ERROR : ", responseJson);
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error,
      };
    }
  };

  /**
   * 쿼리스트링 파라미터 만들기
   * --
   */
  _jsonToQueryString = (params = null) => {
    // cno는 필수 파라미터 - 기본값
    let queryString = ``;
    // 파라미터가 있는경우
    if (params) {
      const keys = Object.keys(params);
      if (keys.length > 0) {
        for (let ii in keys) {
          queryString += `&${keys[ii]}=${params[keys[ii]]}`;
        }
        return `?${queryString.slice(1)}`;
      }
    }
    return ``;
  };
}
