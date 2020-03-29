import React, {Fragment} from "react";
import ArtworkCardItem from "./ArtworkCardItem";
import WorkPaging from "./WorkPaging";

const ArtworkCardList = () => {
    return (
        <Fragment>
            <ArtworkCardItem />
            <WorkPaging />
        </Fragment>
    );
};

export default ArtworkCardList;
