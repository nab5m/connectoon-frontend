import React from "react";
import styles from './css/MainCategory.module.css';
import {NavLink, withRouter} from "react-router-dom";

const MainCategory = ({match, current}) => {
    const navItems = [
        {
            'id': 1,
            'title': '스토리',
            'url': match.url + '/story/all',
        },
        {
            'id': 2,
            'title': '작화',
            'url': match.url + '/artwork/all',
        },
    ];

    const NavList = navItems.map(item => {
        const splitItemUrl = item.url.split('/');
        const mainCategory = splitItemUrl[splitItemUrl.length-2];

        return mainCategory === current
            ? <li key={item.id} className={styles.active}>
                <NavLink exact to={item.url}>{item.title}</NavLink>
            </li>
            : <li key={item.id}>
                <NavLink exact to={item.url}>{item.title}</NavLink>
            </li>
    });

    return (
        <ul className={styles.mainCategory}>
            {NavList}
        </ul>
    );
};

export default withRouter(MainCategory);
