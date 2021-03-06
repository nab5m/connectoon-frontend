import React, {useState} from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react";
import useStores from "../../stores/useStores";

const RegisterForm = () => {
    const STORY_AUTHOR_ID = 1;
    const IMAGE_AUTHOR_ID = 2;
    const [role, setRole] = useState(STORY_AUTHOR_ID);
    const [error, setError] = useState({});
    const {loginRegisterStore} = useStores();

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

        loginRegisterStore.handleRegisterRequest(role, username, password, name, email).then((result) => {
            if(!result.success) {
                setError(result.data);
            }
        });
    };

    const errorMessage = Object.keys(error).map((fieldName, idx) => {
        return (<p key={idx} className={classNames("aqua-marine")}>
            {error[fieldName]}
        </p>);
    });

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

            <div className="error-text">{ errorMessage }</div>

            <label htmlFor="username" className={classNames("black")}>아이디</label>
            <input
                name="username"
                type="text"
                placeholder="아이디를 입력해주세요."
                className={ error.username ? classNames("border-aqua-marine") : ''}
                required
            />

            <label htmlFor="password" className={classNames("black")}>비밀번호</label>
            <input
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                className={ error.password ? classNames("border-aqua-marine") : ''}
                required
            />

            <label htmlFor="name" className={classNames("black")}>이름</label>
            <input name="name" type="text" placeholder="이름을 입력해주세요." required />

            <label htmlFor="email" className={classNames("black")}>이메일</label>
            <div className={classNames("email-input-container")}>
                <input
                    name="email"
                    type="text"
                    placeholder="이메일을 입력해주세요."
                    className={ error.email ? classNames("border-aqua-marine") : ''}
                />
                <div>@</div>
                <select
                    name="domain"
                    defaultValue=""
                    className={ error.email ? classNames("border-aqua-marine") : ''}
                    required
                >
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

export default observer(RegisterForm);
