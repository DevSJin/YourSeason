// 한국어+글자수(3글자 이상,10글자 이하)
const nickname = /^[a-z0-9|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,10}$/;

// email형식
// eslint-disable-next-line
const email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; // eslint-disable-next-line

// 영어소문자+숫자+특수문자(_,-)+글자수(8글자 이상, 20글자 이하)
const password = /^[a-z0-9_-]{8,20}$/;


const phone = /^[0-9\b -]{0,13}$/;

const regex = { nickname, email, password, phone };

export default regex;