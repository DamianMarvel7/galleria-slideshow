import React, { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ThumbnailDetail = ({ painting }) => {
  const MyImage = import(`.${painting.images.thumbnail}`);
  const [imageSource, setImageSource] = useState();

  MyImage.then((module) => {
    setImageSource(module.default);
  }).catch((error) => {
    console.error("Error loading image:", error);
  });

  return (
    <Link to={`${painting.id}`}>
      <div className="thumbnail">
        <img src={imageSource} alt="" className="thumbnail-img" />
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
