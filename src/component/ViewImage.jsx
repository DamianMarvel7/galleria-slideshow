import React, { useState } from "react";

const ViewImage = ({ painting }) => {
  const MyImage = import(`.${painting.images.gallery}`);
  const [imageSource, setImageSource] = useState();

  MyImage.then((module) => {
    setImageSource(module.default);
  }).catch((error) => {
    console.error("Error loading image:", error);
  });

  const closeImage = () => {
    const viewImage = document.querySelector(".view-image");
    viewImage.style.display = "none";
    console.log("hasdsajkh");
  };

  return (
    <div className="view-image">
      <p onClick={closeImage}>CLOSE</p>
      <img src={imageSource} alt="" />
    </div>
  );
};

export default ViewImage;
