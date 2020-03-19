import React from "react";
import classNames from 'classnames';
import {NavLink} from "react-router-dom";
import './css/Header.css';

const Header = () => {
    return (
        <header className={"header"}>
            <h1>
                <NavLink exact to="/" className={classNames("aqua-marine")}>커넥툰</NavLink>
            </h1>

            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="aqua-marine">작품보기</NavLink></li>
                    <li><NavLink exact to="/find-author" activeClassName="aqua-marine">작가찾기</NavLink></li>
                    <li><NavLink exact to="/new-webtoon" activeClassName="aqua-marine">탄생웹툰</NavLink></li>
                    <li><NavLink exact to="/login" activeClassName="aqua-marine">로그인/회원가입</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
