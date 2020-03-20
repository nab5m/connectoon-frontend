import React from "react";
import { withCookies } from 'react-cookie';

const Logout = ({history, cookies}) => {
    cookies.remove('token');
    history.push('/');

    return (<div>로그아웃</div>);
};

export default withCookies(Logout);
