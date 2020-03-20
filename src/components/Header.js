import React from "react";
import classNames from 'classnames';
import { withCookies } from 'react-cookie';
import {NavLink} from "react-router-dom";
import './css/Header.css';

const Header = ({activeNavigation = -1, cookies}) => {
    let navigation = null;
    let navigationItems = [
        {url: "/artwork", title: "작품보기", active: false},
        {url: "/find-author", title: "작가찾기", active: false},
        {url: "/new-webtoon", title: "탄생웹툰", active: false},
        {url: "/login", title: "로그인/회원가입", active: false},
    ];
    const token = cookies.get('token');

    if(activeNavigation !== -1) {
        // '/register' 페이지를 위한 로직
        navigationItems[activeNavigation].active = true;
    }
    if(token) {
        navigationItems.pop();
        navigationItems.push({url: "/logout", title: "로그아웃", active: false});
    }
    navigation = navigationItems.map((item, idx) => (
        item.active ? <li key={idx}><NavLink exact to={ item.url } className="aqua-marine">{ item.title }</NavLink></li>
            : <li key={idx}><NavLink exact to={ item.url } activeClassName="aqua-marine">{ item.title }</NavLink></li>
    ));

    return (
        <header className={"header"}>
            <h1>
                <NavLink exact to="/" className={classNames("aqua-marine")}>커넥툰</NavLink>
            </h1>

            <nav>
                <ul>
                    {navigation}
                </ul>
            </nav>
        </header>
    );
};

export default withCookies(Header);
