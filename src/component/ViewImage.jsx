import React, { useState } from "react";

const ViewImage = ({ painting }) => {
  const closeImage = () => {
    const viewImage = document.querySelector(".view-image");
    viewImage.style.display = "none";
  };

  return (
    <div className="view-image">
      <p onClick={closeImage}>CLOSE</p>
      <img src={`${painting.images.gallery}`} alt="" />
    </div>
  );
};

export default ViewImage;
