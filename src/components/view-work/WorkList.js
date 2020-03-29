import React, {Fragment} from "react";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import StoryCardList from "./StoryCardList";
import ArtworkCardList from "./ArtworkCardList";

const WorkList = () => {
    return (
        <Fragment>
            <MainCategory />
            <SubCategory />

            <StoryCardList />
            <ArtworkCardList />
        </Fragment>
    );
};

export default WorkList;
