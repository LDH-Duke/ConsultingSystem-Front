import { Cookies } from 'react-cookie';

export default class CookieManager {
    constructor() {
        if (!CookieManager.instance) {
            this.cookies = new Cookies();
            CookieManager.instance = this;
        }

        return CookieManager.instance;
    }

    setCookie(name, value, options) {
        return this.cookies.set(name, value, {...options});
    }

    getCookie(name) {
        return this.cookies.get(name);
    }

    remove(name, options, time) {
        this.cookies.remove(name, {...options}, time);
    }
}