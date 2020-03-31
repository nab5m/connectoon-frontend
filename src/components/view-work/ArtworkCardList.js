import React from "react";
import classNames from 'classnames';
import ArtworkCardItem from "./ArtworkCardItem";
import WorkPaging from "./WorkPaging";
import styles from './css/ArtworkCardList.module.css';

const ArtworkCardList = () => {
    return (
        <div className={classNames('container', styles.container)}>
            <div className="row">
                <ArtworkCardItem
                    title="로맨스 스릴러 치즈인더트랩"
                    thumbnailImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/458B64B4-4B0F-49D9-B963-C88CA059C0CF.png"
                    profileImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/E0AA3F1C-F1F6-4341-B311-02E2B3DEC99B.png"
                    authorName="망난희 작가"
                    likeCount={100}
                    replyCount={1000}
                />
                <ArtworkCardItem
                    title="로맨스 스릴러 치즈인더트랩"
                    thumbnailImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/458B64B4-4B0F-49D9-B963-C88CA059C0CF.png"
                    profileImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/E0AA3F1C-F1F6-4341-B311-02E2B3DEC99B.png"
                    authorName="망난희 작가"
                    likeCount={100}
                    replyCount={1000}
                />
                <ArtworkCardItem
                    title="로맨스 스릴러 치즈인더트랩"
                    thumbnailImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/458B64B4-4B0F-49D9-B963-C88CA059C0CF.png"
                    profileImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/E0AA3F1C-F1F6-4341-B311-02E2B3DEC99B.png"
                    authorName="망난희 작가"
                    likeCount={100}
                    replyCount={1000}
                />
                <ArtworkCardItem
                    title="로맨스 스릴러 치즈인더트랩"
                    thumbnailImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/458B64B4-4B0F-49D9-B963-C88CA059C0CF.png"
                    profileImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/E0AA3F1C-F1F6-4341-B311-02E2B3DEC99B.png"
                    authorName="망난희 작가"
                    likeCount={100}
                    replyCount={1000}
                />
                <ArtworkCardItem
                    title="로맨스 스릴러 치즈인더트랩"
                    thumbnailImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/458B64B4-4B0F-49D9-B963-C88CA059C0CF.png"
                    profileImageUrl="https://cdn.zeplin.io/5e4e618501e9837d3d37cde2/assets/E0AA3F1C-F1F6-4341-B311-02E2B3DEC99B.png"
                    authorName="망난희 작가"
                    likeCount={100}
                    replyCount={1000}
                />
            </div>

            <WorkPaging />
        </div>
    );
};

export default ArtworkCardList;
