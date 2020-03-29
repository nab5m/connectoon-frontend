import React from "react";
import styles from './css/MainCategory.module.css';
import {NavLink, withRouter} from "react-router-dom";

const MainCategory = ({location, match}) => {
    const navItems = [
        {
            'id': 1,
            'title': '스토리',
            'url': match.url + '/story',
        },
        {
            'id': 2,
            'title': '작화',
            'url': match.url + '/artwork',
        },
    ];

    const NavList = navItems.map(item => {
        console.log(item.url + ' ' + location.pathname);
        return item.url === location.pathname
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
