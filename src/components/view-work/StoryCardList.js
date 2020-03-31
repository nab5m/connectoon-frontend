import React from "react";
import classNames from 'classnames';
import StoryCardItem from "./StoryCardItem";
import WorkPaging from "./WorkPaging";
import styles from './css/StoryCardList.module.css';

const StoryCardList = () => {
    return (
        <div className={classNames('container', styles.container)}>
            <div className="row">
                <StoryCardItem
                    chapter="01"
                    title="치즈인더트랩"
                    description="평범한 대학생 홍설,<br> 평범하지 않은 유정을 만나 .."
                    backgroundImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/11E0C15F-CFF6-4D91-BAE5-1050AFC2E9CA.png"
                    profileImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/E0AA3F1C-F1F6-4341-B311-02E2B3DEC99B.png"
                    authorName="망난희"
                    likeCount={100}
                    replyCount={1024}
                />
                <StoryCardItem
                    chapter="01"
                    title="치즈인더트랩"
                    description="평범한 대학생 홍설,<br> 평범하지 않은 유정을 만나 .."
                    backgroundImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/11E0C15F-CFF6-4D91-BAE5-1050AFC2E9CA.png"
                    profileImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/E0AA3F1C-F1F6-4341-B311-02E2B3DEC99B.png"
                    authorName="망난희"
                    likeCount={100}
                    replyCount={1024}
                />
                <StoryCardItem
                    chapter="01"
                    title="치즈인더트랩"
                    description="평범한 대학생 홍설,<br> 평범하지 않은 유정을 만나 .."
                    backgroundImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/11E0C15F-CFF6-4D91-BAE5-1050AFC2E9CA.png"
                    profileImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/E0AA3F1C-F1F6-4341-B311-02E2B3DEC99B.png"
                    authorName="망난희"
                    likeCount={100}
                    replyCount={1024}
                />
                <StoryCardItem
                    chapter="01"
                    title="치즈인더트랩"
                    description="평범한 대학생 홍설,<br> 평범하지 않은 유정을 만나 .."
                    backgroundImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/11E0C15F-CFF6-4D91-BAE5-1050AFC2E9CA.png"
                    profileImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/E0AA3F1C-F1F6-4341-B311-02E2B3DEC99B.png"
                    authorName="망난희"
                    likeCount={100}
                    replyCount={1024}
                />
                <StoryCardItem
                    chapter="01"
                    title="치즈인더트랩"
                    description="평범한 대학생 홍설,<br> 평범하지 않은 유정을 만나 .."
                    backgroundImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/11E0C15F-CFF6-4D91-BAE5-1050AFC2E9CA.png"
                    profileImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/E0AA3F1C-F1F6-4341-B311-02E2B3DEC99B.png"
                    authorName="망난희"
                    likeCount={100}
                    replyCount={1024}
                />
            </div>
            <WorkPaging />
        </div>
    );
};

export default StoryCardList;
