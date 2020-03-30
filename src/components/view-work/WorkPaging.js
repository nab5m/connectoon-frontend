import React, {useState} from "react";
import styles from './css/WorkPaging.module.css';
import {NavLink, withRouter} from "react-router-dom";

const WorkPaging = ({location}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount] = useState(18);

    console.log(location);

    const pageStart = Math.floor((currentPage-1) / 5) * 5 + 1;
    // pageStart = 16, pageCount = 17 => pageEnd = 17
    // pageStart = 6, pageCount = 12 => pageEnd = 10
    const pageEnd = pageStart + 4 > pageCount ? pageCount : pageStart + 4;

    const handleMovingPage = (pageNum, e=null) => {
        if(pageNum < 1 || pageNum > pageCount) {
            e.preventDefault();
            return;
        }
        setCurrentPage(pageNum);
    };

    const PageList = [ ...Array(pageEnd - pageStart + 1).keys() ].map(idx => {
        const pageNum = pageStart + idx;
        return pageNum === currentPage
            ? <li key={pageNum} className={styles.activePage}>
                <NavLink to={`${location.pathname}?page=${pageNum}`}>
                    {pageNum}
                </NavLink>
            </li>
            : <li key={pageNum}>
                <NavLink to={`${location.pathname}?page=${pageNum}`} onClick={() => handleMovingPage(pageNum)}>
                    {pageNum}
                </NavLink>
            </li>
    });

    return (
        <ul className={styles.container}>
            <li>
                <NavLink
                    to={`${location.pathname}?page=${pageStart - 1}`}
                    onClick={(e) => handleMovingPage(pageStart - 1, e)}
                >
                    <img src="/images/chevron_left.svg" alt="이전_페이지" />
                </NavLink>
            </li>
            { PageList }
            <li>
                <NavLink
                    to={`${location.pathname}?page=${pageEnd + 1}`}
                    onClick={(e) => handleMovingPage(pageEnd + 1, e)}
                >
                    <img src="/images/chevron_right.svg" alt="다음_페이지" />
                </NavLink>
            </li>
        </ul>
    );
};

export default withRouter(WorkPaging);
