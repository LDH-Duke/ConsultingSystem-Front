/**
 * 
 */

export default class ApiManager { 
  constructor(){
    if(!ApiManager.instance){
      ApiManager.instance = this;
      this.baseUrl = `https://jsonplaceholder.typicode.com`
    }
    return ApiManager.instance
  }

  /**
   * GET
   */
  get(path, parameters=null) {
    // parameter
    let params = '';
    if(parameters){
      const keys = Object.keys(parameters);
      params='?'
      for(let key of keys){
        params += `${key}=${parameters[key]}&`
      }
    }
    // url
    const url = `${this.baseUrl}${path}${params}`
    // Http
    return fetch(url, {
      method: 'GET',
    }).then(result => result.json())
  }
}