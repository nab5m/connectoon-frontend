import React, {Fragment} from "react";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import StoryCardList from "./StoryCardList";
import ArtworkCardList from "./ArtworkCardList";
import {withRouter} from "react-router-dom";

const WorkList = ({location}) => {
    let CardList = null;
    const lastPathName = location.pathname.split('/').pop();
    if (lastPathName === 'story') {
        CardList = StoryCardList();
    }
    else if(lastPathName === 'artwork') {
        CardList = ArtworkCardList();
    }
    else {
        CardList = StoryCardList();
    }

    return (
        <Fragment>
            <MainCategory />
            <SubCategory />
            {CardList}
        </Fragment>
    );
};

export default withRouter(WorkList);
