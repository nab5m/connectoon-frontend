import React from "react";
import { withCookies } from 'react-cookie';
import {clearUserProfile} from "../client/LoginRegisterApi";

const Logout = ({history, cookies}) => {
    cookies.remove('token');
    clearUserProfile();
    history.push('/');

    return (<div>로그아웃</div>);
};

export default withCookies(Logout);
