import React from 'react';
import '../css/LoginRegisterForm.css';
import classNames from 'classnames';
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    return (
        <form className={classNames("login-form")} onSubmit={(e) => {e.preventDefault();}}>
            <h1 className={classNames("black", "login-title")}>로그인</h1>

            <label htmlFor="username" className={classNames("black")}>아이디</label>
            <input name="username" type="text" placeholder="아이디를 입력해주세요." required />

            <label htmlFor="password" className={classNames("black")}>비밀번호</label>
            <input name="password" type="password" placeholder="비밀번호를 입력해주세요." required />

            <button type="submit" className={classNames("bg-aqua-marine", "white")}>
                로그인
            </button>
            <NavLink exact to="/register">
                <button className={classNames("border-aqua-marine", "bg-white", "aqua-marine")}>회원가입</button>
            </NavLink>
        </form>
    );
};

export default LoginForm;
