import React from "react";
import classNames from 'classnames';
import styles from './css/ArtworkCardItem.module.css';
import cardFooterStyles from './css/CardFooter.module.css';

const ArtworkCardItem = ({title, thumbnailImageUrl, profileImageUrl, authorName
                             , likeCount, replyCount}) =>
{
    return (
        <div className={classNames(styles.container, "col-xl-3", "col-lg-4", "col-md-6", "col-sm-6", "mb-4")}>
            <div className={styles.thumbnailWrapper}>
                <img src={thumbnailImageUrl} alt="썸네일" />
            </div>
            <div className={styles.workInfo}>
                <h2>{title}</h2>
                <div className={styles.authorProfile}>
                    <img src={profileImageUrl} alt="프로필_사진" />
                    <span>{authorName}</span>
                </div>
            </div>
            <div className={cardFooterStyles.cardFooter}>
                <img src="/images/heart_select.svg" alt="좋아요" />
                <span className={cardFooterStyles.likeCount}>{likeCount}</span>

                <img src="/images/reply.svg" alt="댓글" />
                <span>{replyCount >= 1000 ? '999+' : replyCount}</span>
            </div>
        </div>
    );
};

export default ArtworkCardItem;
