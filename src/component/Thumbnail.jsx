import React, { useState } from "react";
import starryNight from "../assets/starry-night/thumbnail.jpg";
import girlWith from "../assets/girl-with-pearl-earring/thumbnail.jpg";
import jsonFile from "../data.json";
import ThumbnailDetail from "./ThumbnailDetail";
import { getGroupElements } from "../helper";

const Thumbnail = () => {
  const [paintingData, setPaintingData] = useState(jsonFile);

  return (
    <div className="thumbnail__wrapper container">
      <div className="thumbnail-group">
        {getGroupElements(paintingData, 1).map((painting) => (
          <ThumbnailDetail key={painting.name} painting={painting} />
        ))}
      </div>
      <div className="thumbnail-group">
        {getGroupElements(paintingData, 2).map((painting) => (
          <ThumbnailDetail key={painting.name} painting={painting} />
        ))}
      </div>
      <div className="thumbnail-group">
        {getGroupElements(paintingData, 3).map((painting) => (
          <ThumbnailDetail key={painting.name} painting={painting} />
        ))}
      </div>
      <div className="thumbnail-group">
        {getGroupElements(paintingData, 4).map((painting) => (
          <ThumbnailDetail key={painting.name} painting={painting} />
        ))}
      </div>
    </div>
  );
};

export default Thumbnail;
