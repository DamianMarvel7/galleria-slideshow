import React, { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ThumbnailDetail = ({ painting }) => {
  return (
    <Link to={`${painting.id}`}>
      <div className="thumbnail">
        <img src={painting.images.thumbnail} alt="" className="thumbnail-img" />
        <div
          className="thumbnail-desc flexcol flow"
          style={{ "--flow-spacer": ".5em" }}
        >
          <h2 className="h2">{painting.name}</h2>
          <p className="subhead1">{painting.artist.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default ThumbnailDetail;
