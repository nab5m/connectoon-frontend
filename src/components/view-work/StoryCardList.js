import React, {Fragment} from "react";
import StoryCardItem from "./StoryCardItem";
import WorkPaging from "./WorkPaging";

const StoryCardList = () => {
    return (
        <Fragment>
            <StoryCardItem />
            <WorkPaging />
        </Fragment>
    );
};

export default StoryCardList;
