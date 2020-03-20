import axios from 'axios';

const DEBUG = true;
const PRODUCTION_SERVER_URL = 'http://localhost:8000/';
const DEVELOP_SERVER_URL = 'http://localhost:8000/';

// ToDo: update in index component
let pending = false;
let userId = null;
let userProfile = null;

const waitForLoginRegisterRequest = () => {
    pending = true;
};
const finishLoginRegisterRequest = () => {
    pending = true;
};

const getServerUrl = () => {
      return DEBUG ? DEVELOP_SERVER_URL : PRODUCTION_SERVER_URL;
};

const getUserId = () => {
    return userId;
};
const getUserProfile = () => {
    return userProfile;
};
const clearUserProfile = () => {
    userId = null;
    userProfile = null;
};

const isAuthenticated = (cookies, history) => {
    if(cookies.get('token')) {
        if(getUserId()) {
            return true;
        } else {
            loadUserId(cookies, history);
            return true;
        }
    }
    return false;
};

// 새로고침한 사용자
// 인증 토큰은 쿠키에 저장되어 있는데 사용자의 프로필 정보가 없는 경우
const loadUserId = (cookies, history) => {
    const url = getServerUrl() + 'api/user-id/';
    const headers = { 'Authorization': `Token ${cookies.get('token')}` };

    axios.get(url, { headers: headers }).then((response) => {
        userId = response.data.id;
        loadUserProfile(cookies, history, userId);
    }).catch((error) => {
        console.log(error.response);
    });
};

// ToDo: 그냥 mobX로 바꾸자
const loadUserProfile = (cookies, history, id) => {
    console.log("loadUserProfile");

    const url = getServerUrl() + 'api/account/' + id + '/';
    const headers = { 'Authorization': `Token ${cookies.get('token')}` };

    axios.get(url, { headers: headers }).then((response) => {
        userProfile = {...response.data};
        history.push('/');
    }).catch((error) => {
        console.log(error.response);
    });
};

const handleLoginRequest = (username, password) => {
    const url = getServerUrl() + 'api/token/';
    const data = { username: username, password: password };

    waitForLoginRegisterRequest();

    return axios.post(url, data).then((response) => {
        return {success: true, data: response.data.token};
    }).catch((error) => {
        return {success: false, data: error.response};
    });
};

const handleRegisterRequest = (role, username, password, name, email) => {
    const url = getServerUrl() + 'api/register/';
    const data = {
        roles: [role],
        username: username,
        password: password,
        name: name,
        email: email
    };

    waitForLoginRegisterRequest();

    return axios.post(url, data).then(response => {
        return {success: true, data: response.data.token};
    }).catch(error => {
        return {success: false, data: error.response.data};
    });
};

const redirectLoggedInUser = (cookies, history) => {
    if(isAuthenticated(cookies, history) && !pending) {
        alert('이미 로그인한 사용자입니다');
        history.push('/');
    }
};

export {getUserProfile};
export {clearUserProfile};
export {isAuthenticated};
export {finishLoginRegisterRequest};

export {handleLoginRequest};
export {handleRegisterRequest};
export {redirectLoggedInUser};
