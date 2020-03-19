import React from 'react';
import '../css/LoginRegisterForm.css';
import classNames from 'classnames';
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    return (
        <form className={classNames("login-form")} onSubmit={(e) => {e.preventDefault();}}>
            <h1 className={classNames("black")}>로그인</h1>

            <label htmlFor="username" className={classNames("black")}>아이디</label>
            <input name="username" type="text" placeholder="아이디를 입력해주세요." required />

            <label htmlFor="password" className={classNames("black")}>비밀번호</label>
            <input name="password" type="password" placeholder="비밀번호를 입력해주세요." required />

            <button type="submit" className={classNames("login-button", "bg-aqua-marine", "white")}>
                로그인
            </button>
            <button className={classNames("register-button", "bg-white", "aqua-marine")}>
                <NavLink exact to="/register">회원가입</NavLink>
            </button>
        </form>
    );
};

export default LoginForm;
