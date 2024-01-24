import ApiManager from './ApiManager';
const $http = new ApiManager();

const parameterToPath = (path, params = {}) => {
    const keys = Object.keys(params);
    let newStr = path;
    for (let key of keys) {
      newStr = newStr.replace(`:${key}`, params[key]);
    }
    return newStr;
  };

const API = {
  /**
   * 상담사 정보 조회
   * --
   */
  getCounselors : () => $http.get('/counselor'),

  /**
   * 선택 상담사 정보 조회
   * --
   */
  getCounselor : (counselor_id) => $http.get(parameterToPath('/counselor/:counselor_id', {counselor_id})),

  /**
   * 회원가입
   * --
   */
  postsignup : (body) => $http.post('/user/signup', body),

  /**
   * 로그인
   * --
   */
  postsignin : (body) => $http.post('/user/signin', body),

  /**
   * 선물하기
   * --
   */
  postdonation : (body) => $http.post('/coin/buyproduct', body),

  /**
   * 사용자 정보 조회
   * --
   */
  getuser : (user_id) => $http.get(parameterToPath('/user/:user_id' , {user_id})),

  /**
   * 상담 문의
   * --
   * 경로 수정 필요
   */
  postquestion : (body) => $http.post('/ask', body),

  /**
   * 결제 내역
   * --
   */
  getPricedetail : (user_id) => $http.get(parameterToPath('/coin', {user_id})),

  /**
   * 검색
   * --
   * 경로 수정 필요
   */
  getSearch : (searchword) => $http.get(parameterToPath('/search/:searchword', {searchword})),

  /**
   * 상담사 등록하기
   * --
   */
  postcounselorsignup : (body) => $http.post('/counselor/signup', body),

  /**
   * 즐겨찾기
   * --
   */
  postFavorite : (body) => $http.post('/favorite/add', body),
  deleteFavorite : (body) => $http.delete('/favorite/delete', body),
  
  /**
   * 후기 작성
   * --
   */
  postReview : (body) => $http.post('/review/write', body),

  /**
   * 프로필 수정
   * --
   * 경로 수정해야됨
   */
  putProfile : (user_id, body) => $http.put(parameterToPath('/user/:profile', {user_id}), body),

  /**
   * 상담사 프로필 수정
   * --
   */
  putCounselorProfile : (counselor_id, body) => $http.put(parameterToPath('/counselor/:counselor_id', {counselor_id}), body),
};
export default API;
