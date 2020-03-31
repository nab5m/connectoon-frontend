import React from "react";
import classNames from 'classnames';
import {NavLink} from "react-router-dom";
import './css/Header.css';
import useStores from "../stores/useStores";
import {observer} from "mobx-react";
import {loadUser} from "../stores/LoginRegisterStore";

const Header = ({activeNavigation = -1}) => {
    let navigation = null;
    let navigationItems = [
        {url: "/view-work/story/all", title: "작품보기", active: false},
        {url: "/find-author", title: "작가찾기", active: false},
        {url: "/new-webtoon", title: "탄생웹툰", active: false},
        {url: "/login", title: "로그인/회원가입", active: false},
    ];
    const {loginRegisterStore} = useStores();
    loadUser(loginRegisterStore);

    const token = loginRegisterStore.token;
    const handleLogout = () => {
        loginRegisterStore.logout();
    };

    if(activeNavigation !== -1) {
        // '/register' 페이지를 위한 로직
        navigationItems[activeNavigation].active = true;
    }
    if(token) {
        navigationItems.pop();
    }
    navigation = navigationItems.map((item, idx) => (
        item.active ? <li key={idx} className="nav-item">
                <NavLink exact to={ item.url } className="aqua-marine">{ item.title }</NavLink>
            </li>
            : <li key={idx} className="nav-item">
                <NavLink exact to={ item.url } activeClassName="aqua-marine">{ item.title }</NavLink>
            </li>
    ));

    return (
        <header className={classNames("header", "navbar", "navbar-expand-sm", "navbar-light")}>
            <h1 className="navbar-brand">
                <NavLink exact to="/" className={classNames("aqua-marine")}>커넥툰</NavLink>
            </h1>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <nav className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {navigation}
                    {token ?
                        <li onClick={handleLogout}>로그아웃</li>
                        : ''
                    }
                </ul>
            </nav>
        </header>
    );
};

export default observer(Header);
