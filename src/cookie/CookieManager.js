import { Cookies } from 'react-cookie';

export default class CookieManager {
    constructor() {
        if (!CookieManager.instance) {
            this.cookies = new Cookies();
            CookieManager.instance = this;
        }

        return CookieManager.instance;
    }

<<<<<<< HEAD
    /**
     * 쿠키 저장
     * @params name: 저장할 key (string)
     * @params value 저장할 데이터
     */
=======
>>>>>>> c40c7a37945ef6be26bcbbea76c97f53a084db7e
    setCookie(name, value, options) {
        return this.cookies.set(name, value, {...options});
    }

<<<<<<< HEAD
    /**
     * 쿠키 가져오기
     * name: 가져올 쿠키의 이름 (string)
     */
=======
>>>>>>> c40c7a37945ef6be26bcbbea76c97f53a084db7e
    getCookie(name) {
        return this.cookies.get(name);
    }

<<<<<<< HEAD
    /**
     * 쿠키 삭제
     * @param {*} name 삭제할 쿠키 이름
     * @param {*} options 
     * @param {*} time 
     */
=======
>>>>>>> c40c7a37945ef6be26bcbbea76c97f53a084db7e
    remove(name, options, time) {
        this.cookies.remove(name, {...options}, time);
    }
}