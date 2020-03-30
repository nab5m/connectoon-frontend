import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import styles from './css/SubCategory.module.css';

const SubCategory = ({match, mainCategory, current}) => {
    const navItems = [
        {
            id: 1,
            title: '전체보기',
            url: `${match.url}/${mainCategory}/all`
        },
        {
            id: 2,
            title: '순정',
            url: `${match.url}/${mainCategory}/romance`
        },
        {
            id: 3,
            title: '일상',
            url: `${match.url}/${mainCategory}/life`
        },
        {
            id: 4,
            title: '개그',
            url: `${match.url}/${mainCategory}/fun`
        },
        {
            id: 5,
            title: '판타지',
            url: `${match.url}/${mainCategory}/fantasy`
        },
        {
            id: 6,
            title: '액션',
            url: `${match.url}/${mainCategory}/action`
        },
        {
            id: 7,
            title: '드라마',
            url: `${match.url}/${mainCategory}/drama`
        },
        {
            id: 8,
            title: '스릴러',
            url: `${match.url}/${mainCategory}/thrill`
        },
        {
            id: 9,
            title: '시대극',
            url: `${match.url}/${mainCategory}/history`
        },
        {
            id: 10,
            title: '스포츠',
            url: `${match.url}/${mainCategory}/sports`
        },
    ];
    const NavList = navItems.map(item => {
        const subCategory = item.url.split('/').pop();
        return subCategory === current ?
            <li key={item.id} className={styles.active}>
                <NavLink exact to={item.url}>{item.title}</NavLink>
            </li> :
            <li>
                <NavLink exact to={item.url}>{item.title}</NavLink>
            </li>;
    });

    return (
        <ul className={styles.subCategory}>
            {NavList}
        </ul>
    );
};

export default withRouter(SubCategory);
