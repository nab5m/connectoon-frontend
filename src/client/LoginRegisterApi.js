import axios from 'axios';

const DEBUG = true;
const PRODUCTION_SERVER_URL = 'http://localhost:8000/';
const DEVELOP_SERVER_URL = 'http://localhost:8000/';

const getServerUrl = () => {
      return DEBUG ? DEVELOP_SERVER_URL : PRODUCTION_SERVER_URL;
};

const handleLoginRequest = (username, password) => {
    const url = getServerUrl() + 'api/token/';
    const data = { username: username, password: password };

    return axios.post(url, data).then((response) => {
        return {success: true, data: response.data.token};
    }).catch((error) => {
        return {success: false, data: error.response};
    });
};

const redirectLoggedInUser = (cookies, history) => {
    if(cookies.get('token')) {
        alert('이미 로그인한 사용자입니다');
        history.push('/');
    }
};

export {handleLoginRequest};
export {redirectLoggedInUser};
