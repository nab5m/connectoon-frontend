import {observable, action, computed} from "mobx";
import axios from 'axios';
import Cookie from 'mobx-cookie';

const DEBUG = true;
const PRODUCTION_SERVER_URL = 'http://ec2-15-165-171-10.ap-northeast-2.compute.amazonaws.com:8080/';
const DEVELOP_SERVER_URL = 'http://localhost:8000/';

const getServerUrl = () => {
    return DEBUG ? DEVELOP_SERVER_URL : PRODUCTION_SERVER_URL;
};

export const loadUser = (loginRegisterStore) => {
    // 사용자가 페이지 새로고침
    // 토큰 쿠키는 있는데 사용자 프로필 정보는 없는
    if(loginRegisterStore.token && !loginRegisterStore.userProfile) {
        loginRegisterStore.loadUserId();
    }
};

export const redirectLoggedInUser = (loginRegisterStore, history) => {
    if(loginRegisterStore.token) {
        alert('이미 로그인한 사용자입니다');
        history.push('/');
    }
};

export default class LoginRegisterStore {
    @observable pending = false;
    @observable userProfile = null;
    @observable cookie = new Cookie('token');
    @computed
    get token() {
        return this.cookie.value;
    }

    @action
    setToken = (token) => {
        this.cookie.set(token);
    };

    @action
    removeToken = () => {
        this.cookie.remove();
    };

    /*
        로그인/회원가입 => loadUserId => loadUserProfile
    */
    @action
    handleLoginRequest = (username, password) => {
        const url = getServerUrl() + 'api/token/';
        const data = { username: username, password: password };

        return axios.post(url, data).then((response) => {
            this.setToken(response.data.token);
            this.loadUserId();
            return {success: true, data: response.data.token};
        }).catch((error) => {
            return {success: false, data: error.response};
        });
    };

    @action
    handleRegisterRequest = (role, username, password, name, email) => {
        const url = getServerUrl() + 'api/register/';
        const data = {
            roles: [role],
            username: username,
            password: password,
            name: name,
            email: email
        };

        return axios.post(url, data).then(response => {
            this.setToken(response.data.token);
            this.loadUserId();
            return {success: true, data: response.data.token};
        }).catch(error => {
            return {success: false, data: error.response.data};
        });
    };

    @action
    loadUserId = () => {
        const url = getServerUrl() + 'api/user-id/';
        const headers = { 'Authorization': `Token ${this.token}` };

        axios.get(url, { headers: headers }).then((response) => {
            // save id
            this.userProfile = { ...response.data };
            this.loadUserProfile();
        }).catch((error) => {
            console.log(error.response);
        });
    };

    @action
    loadUserProfile = () => {
        const url = getServerUrl() + 'api/account/' + this.userProfile['id'] + '/';
        const headers = { 'Authorization': `Token ${this.token}` };

        axios.get(url, { headers: headers }).then((response) => {
            this.userProfile = {...this.userProfile, ...response.data};
        }).catch((error) => {
            console.log(error.response);
        });
    };

    @action
    logout = () => {
        this.removeToken();
        this.userProfile = null;
    };
};
