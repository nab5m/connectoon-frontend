import React from "react";
import classNames from 'classnames';
import styles from './css/StoryCardItem.module.css';

const StoryCardItem = ({chapter, title, subCategory, description, backgroundImageUrl, profileImageUrl, authorName,
                           likeCount, replyCount}) =>
{
    return (
        <div className={classNames("col-xl-3", "col-lg-4", "col-md-6")}>
            <div className={styles.container} style={{backgroundImage: `url(${backgroundImageUrl})`}}>
                <div className={styles.workIntro}>
                    <p>{chapter}</p>
                    <h3>{title}</h3>
                </div>
                <hr className={styles.division} />

                {/* <script> 태그와 <a> 태그의 삽입 공격에 유의할 것 */}
                <div className={styles.workDescription} dangerouslySetInnerHTML={{ __html: description }}>
                </div>
                <div className={styles.authorProfile}>
                    <img src={ profileImageUrl } alt="프로필_사진"/>
                    <span>{authorName} 작가</span>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <img src="/images/heart_select.svg" alt="좋아요" />
                <span className={styles.likeCount}>{likeCount}</span>

                <img src="/images/reply.svg" alt="댓글" />
                <span>{replyCount >= 1000 ? '999+' : replyCount}</span>
            </div>
        </div>
    );
};

export default StoryCardItem;
