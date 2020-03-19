import React from "react";
import classNames from 'classnames';
import './css/Banner.css';

const Banner = () => {
    return (
        <section className={classNames("banner")}>
            <div className={classNames("banner-title", "white")}>
                웹툰작가를 연결하다. 커넥툰
            </div>
            <div className={classNames("banner-description", "aqua-marine")}>
                connect <span className="white">+</span> webtoon
            </div>
        </section>
    );
};

export default Banner;
