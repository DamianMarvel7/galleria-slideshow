import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import jsonFile from "../data.json";
import iconViewImage from "/assets/shared/icon-view-image.svg";
import PaintingFooter from "./PaintingFooter";
import ViewImage from "./ViewImage";

const PaintingDetail = () => {
  const [paintingData, setPaintingData] = useState(jsonFile);
  const { id } = useParams();
  const [headingClass, setHeadingClass] = useState("h1");

  const painting = paintingData.filter((painting) => painting.id == id)[0];

  const [paintingSource, setPaintingSource] = useState();
  const [artistSource, setArtistSource] = useState();

  useEffect(() => {
    const updateVariableBasedOnScreenWidth = () => {
      const imageModule =
        window.innerWidth < 768
          ? painting.images.hero.small
          : painting.images.hero.large;
      setPaintingSource(imageModule);
    };

    updateVariableBasedOnScreenWidth();

    window.addEventListener("resize", updateVariableBasedOnScreenWidth);

    return () => {
      window.removeEventListener("resize", updateVariableBasedOnScreenWidth);
    };
  }, [painting.images]);

  const handleView = () => {
    const viewImage = document.querySelector(".view-image");
    viewImage.style.display = "block";
  };

  return (
    <div>
      <div className="painting-detail container">
        <div className="painting-about">
          <div className="painting-image">
            <img src={paintingSource} alt="" className="paintingHero-img" />
            <button className="btn-view flex" onClick={handleView}>
              <img src={iconViewImage} alt="" />
              <span>view image</span>
            </button>
          </div>
          <div className="painting-name flexcol">
            <p className={headingClass}>{painting.name}</p>
            <p className="subhead1">{painting.artist.name}</p>
          </div>
          <img src={painting.artist.image} alt="" className="author-img" />
        </div>
        <ViewImage painting={painting} />
        <div className="painting-desc">
          <p className="painting-year display">{painting.year}</p>
          <p className="painting-text flexcol">
            {painting.description}{" "}
            <Link to={painting.source}>
              <button className="btn2">GO TO SOURCE</button>
            </Link>
          </p>
        </div>
      </div>
      <PaintingFooter painting={painting} />
    </div>
  );
};

export default PaintingDetail;
