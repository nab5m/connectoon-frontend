import React from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

const RegisterForm = () => {
    return (
        <form className={classNames("register-form")} onSubmit={(e) => {e.preventDefault();}}>
            <h1 className={classNames("black", "register-title")}>회원가입</h1>

            <label className={classNames("black")}>가입유형을 선택해주세요.</label>
            <div className={classNames("user-role-container")}>
                <div className={classNames("user-role")}>
                    <div className={classNames("icon-wrapper", "selected")}>
                        <img src="/images/book.svg" alt="스토리 작가" />
                    </div>
                    <div>스토리 작가</div>
                </div>
                <div className={classNames("user-role")}>
                    <div className={classNames("icon-wrapper")}>
                        <img src="/images/graphic-tablet.svg" alt="그림 작가" />
                    </div>
                    <div>그림 작가</div>
                </div>
            </div>

            <label htmlFor="username" className={classNames("black")}>아이디</label>
            <input name="username" type="text" placeholder="아이디를 입력해주세요." required />

            <label htmlFor="password" className={classNames("black")}>비밀번호</label>
            <input name="password" type="password" placeholder="비밀번호를 입력해주세요." required />

            <label htmlFor="name" className={classNames("black")}>이름</label>
            <input name="name" type="text" placeholder="이름을 입력해주세요." required />

            <label htmlFor="email" className={classNames("black")}>이메일</label>
            <div className={classNames("email-input-container")}>
                <input name="email" type="text" placeholder="이메일을 입력해주세요." />
                <div>@</div>
                <select name="domain" required>
                    <option value="" disabled selected hidden className={classNames("gray")}>
                        선택하기
                    </option>
                    <option value="gmail">gmail.com</option>
                    <option value="daum">daum.net</option>
                    <option value="naver">naver.com</option>
                </select>
            </div>

            <button className={classNames("bg-aqua-marine", "white")}>
                <NavLink exact to="/register">회원가입</NavLink>
            </button>
        </form>
    );
};

export default RegisterForm;
