import React, {useState} from 'react';
import { withCookies } from 'react-cookie';
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {finishLoginRegisterRequest, handleRegisterRequest} from "../../client/LoginRegisterApi";

const RegisterForm = ({history, cookies}) => {
    const STORY_AUTHOR_ID = 1;
    const IMAGE_AUTHOR_ID = 2;
    const [role, setRole] = useState(STORY_AUTHOR_ID);
    const [error, setError] = useState(false);

    const changeRole = (selectedRole) => {
        if(role !== selectedRole) {
            setRole(selectedRole);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.querySelector('input[name=username]').value;
        const password = e.target.querySelector('input[name=password]').value;
        const name = e.target.querySelector('input[name=name]').value;
        const domainSelect = e.target.querySelector('select[name=domain');
        const email = e.target.querySelector('input[name=email]').value
            + domainSelect.options[domainSelect.selectedIndex].value;

        handleRegisterRequest(role, username, password, name, email).then((result) => {
            if(result.success) {
                cookies.set('token', result.data);
                history.push('/');
                finishLoginRegisterRequest();
            } else {
                console.log(result.data);
            }
        });
    }

    return (
        <form className={classNames("register-form")} onSubmit={handleSubmit}>
            <h1 className={classNames("black", "register-title")}>회원가입</h1>

            <label className={classNames("black")}>가입유형을 선택해주세요.</label>
            <div className={classNames("user-role-container")}>
                <div className={classNames("user-role")} onClick={() => changeRole(STORY_AUTHOR_ID)}>
                    <div
                        className={
                            role === STORY_AUTHOR_ID ? classNames("icon-wrapper", "selected")
                                : "icon-wrapper"
                        }
                    >
                        <img
                            src={role === STORY_AUTHOR_ID ? "/images/book-selected.svg" : "images/book.svg"}
                            alt="스토리 작가"
                        />
                    </div>
                    <div>스토리 작가</div>
                </div>
                <div className={classNames("user-role")} onClick={() => changeRole(IMAGE_AUTHOR_ID)}>
                    <div
                        className={
                            role === IMAGE_AUTHOR_ID ? classNames("icon-wrapper", "selected")
                                : "icon-wrapper"
                        }
                    >
                        <img
                            src={role === IMAGE_AUTHOR_ID ? "/images/graphic-tablet-selected.svg"
                                : "images/graphic-tablet.svg"}
                            alt="그림 작가"
                        />
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
                <select name="domain" defaultValue="" required>
                    <option value="" disabled hidden className={classNames("gray")}>
                        선택하기
                    </option>
                    <option value="@gmail.com">gmail.com</option>
                    <option value="@daum.net">daum.net</option>
                    <option value="@naver.com">naver.com</option>
                </select>
            </div>

            <button className={classNames("bg-aqua-marine", "white")}>
                <NavLink exact to="/register">회원가입</NavLink>
            </button>
        </form>
    );
};

export default withCookies(RegisterForm);
