import React, {Fragment} from "react";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import StoryCardList from "./StoryCardList";
import ArtworkCardList from "./ArtworkCardList";
import {withRouter} from "react-router-dom";

const WorkList = ({location}) => {
    let CardList = null;

    // default: /view-work/story/all
    let pathNames =  location.pathname.split('/');
    const subCategory = pathNames.pop();
    const mainCategory = pathNames.pop();

    if (mainCategory === 'story') {
        CardList = StoryCardList();
    }
    else if(mainCategory === 'artwork') {
        CardList = ArtworkCardList();
    }
    else {
        CardList = StoryCardList();
    }

    return (
        <Fragment>
            <MainCategory current={mainCategory} />
            <SubCategory mainCategory={mainCategory} current={subCategory} />
            {CardList}
        </Fragment>
    );
};

export default withRouter(WorkList);
