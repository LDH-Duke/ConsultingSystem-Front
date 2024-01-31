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
   * 회원 로그인
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
   * 전제 사용자 정보 조회
   * --
   */
  getusers : () => $http.get('/user'),

  /**
   * 상담 문의
   * --
   * 경로 수정 필요
   */
  postquestion : (body) => $http.post('/ask', body),

  /**
   * 상담사 문의
   * --
   */
  postQuestionToCounselor : (counselor_id, body) => $http.post(parameterToPath('/ask/add/:counselor_id', {counselor_id}), body),


  /**
   * 결제 내역
   * --
   */
  getPricedetail : (user_id) => $http.get(parameterToPath('/coin', {user_id})),

  /**
   * 결제 내역 전체 조회
   */
  getCoinHistorys : () => $http.get('/coin'),

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
   * 상담사 로그인
   * --
   */
  postcounselorlogin : (body) => $http.post('/counselor/signin', body),

  /**
   * 즐겨찾기 전체조회 (메인)
   * --
   */
  getFavorites : () => $http.get('/favorite'),

  /**
   * 즐겨찾기 단일조회 (즐겨찾기)
   * --
   */
  getFavorite : (user_id) => $http.get(parameterToPath('/favorite/:user_id', {user_id})),

  /**
   * 즐겨찾기 추가
   * --
   */
  postFavorite : (body) => $http.post('/favorite/add', body),

  /**
   * 즐겨찾기 삭제
   * --
   */
  deleteFavorite : (body) => $http.delete('/favorite/delete', body),
  
  /**
   * 후기 작성
   * --
   */
  postReview : (body) => $http.post('/review/write', body),

  /**
   * 후기 삭제
   * --
   */
  deleteReview : (review_item_id) => $http.delete(parameterToPath('/review/:review_item_id', {review_item_id})),

  /**
   * 후기 수정
   * --
   */
  updateReview : (review_item_id, body) => $http.put(parameterToPath('/review/:review_item_id', {review_item_id}), body),

  /**
   * 단일 후기 조회
   * --
   */
  getReview : (counselor_id) => $http.get(parameterToPath('/review/:counselor_id', {counselor_id})),
  
  /**
   * 전체 후기 조회
   */
  getReviews : () => $http.get('/review'),

  /**
   * 프로필 수정
   * --
   */
  putProfile : (user_id, body) => $http.put(parameterToPath('/user/:user_id', {user_id}), body),

  /**
   * 상담사 프로필 수정
   * --
   */
  putCounselorProfile : (counselor_id, body) => $http.put(parameterToPath('/counselor/:counselor_id', {counselor_id}), body),

  /**
   * 상담사 회원가입 중복확인
   * --
   */
  postCounselorDoublecheck : (body) => $http.post('/counselor/doublecheck', body),
  
  /**
   * 고객 회원가입 중복확인
   * --
   */
  postUserDoublecheck : (body) => $http.post('/user/doublecheck', body),

  /**
   * 상품 등록하기
   * --
   */
  postProduct : (counselor_id, body) => $http.post(parameterToPath('/counselor/production/add/:counselor_id', {counselor_id}), body),

  /**
   * 이미지 등록하기
   */
  postImage : (body) => $http.post('/counselor/addtemp', body),

  /**
   * 상품 구매하기
   * --
   */
  postbuyproduct : (body) => $http.post('/coin/buyproduct', body),
};
export default API;
