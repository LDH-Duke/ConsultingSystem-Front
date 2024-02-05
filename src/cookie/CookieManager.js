import { Cookies } from 'react-cookie';

export default class CookieManager {
    constructor() {
        if (!CookieManager.instance) {
            this.cookies = new Cookies();
            CookieManager.instance = this;
        }

        return CookieManager.instance;
    }

    /**
     * 쿠키 저장
     * @params name: 저장할 key (string)
     * @params value 저장할 데이터
     */
    setCookie(name, value, options) {
        return this.cookies.set(name, value, {...options});
    }

    /**
     * 쿠키 가져오기
     * name: 가져올 쿠키의 이름 (string)
     */
    getCookie(name) {
        return this.cookies.get(name);
    }

    /**
     * 쿠키 삭제
     * @param {*} name 삭제할 쿠키 이름
     * @param {*} options 
     * @param {*} time 
     */
    remove(name, options, time) {
        this.cookies.remove(name, {...options}, time);
    }
}