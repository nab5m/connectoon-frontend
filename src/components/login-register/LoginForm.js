import React, {useState} from 'react';
import '../css/LoginRegisterForm.css';
import classNames from 'classnames';
import {NavLink} from "react-router-dom";
import {handleLoginRequest} from "../../client/LoginRegisterApi";
import { withCookies } from 'react-cookie';

const LoginForm = ({history, cookies}) => {
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.querySelector('input[name=username]').value;
        const password = e.target.querySelector('input[name=password]').value;

        handleLoginRequest(username, password).then((result) => {
            if(result.success) {
                cookies.set(
                    'token',
                    result.data,
                    /* {    로컬호스트에서는 동작하지 않습니다
                        httpOnly: true
                    } */
                );
                history.push('/');
            } else {
                setError(true);
            }
        });
    };

    return (
        <form className={classNames("login-form")} onSubmit={handleSubmit}>
            <h1 className={classNames("black", "login-title")}>로그인</h1>

            {error && <p className={classNames("error-text", "aqua-marine")}>아이디나 비밀번호를 다시 확인해주세요</p>}
            <label
                htmlFor="username"
                className={error ? classNames("black", "aqua-marine") : "black"}
            >
                아이디
            </label>
            <input
                name="username"
                type="text"
                placeholder="아이디를 입력해주세요."
                className={error ? "border-aqua-marine" : ""}
                required
            />

            <label
                htmlFor="password"
                className={error ? classNames("black", "aqua-marine") : "black"}
            >
                비밀번호
            </label>
            <input
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                className={error ? "border-aqua-marine" : ""}
                required />

            <button type="submit" className={classNames("bg-aqua-marine", "white")}>
                로그인
            </button>
            <NavLink exact to="/register">
                <button className={classNames("border-aqua-marine", "bg-white", "aqua-marine")}>회원가입</button>
            </NavLink>
        </form>
    );
};

export default withCookies(LoginForm);
