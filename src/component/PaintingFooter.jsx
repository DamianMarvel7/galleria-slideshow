import React, { useEffect, useState } from "react";
import iconBack from "/assets/shared/icon-back-button.svg";
import iconNext from "/assets/shared/icon-next-button.svg";
import { useNavigate } from "react-router-dom";

const PaintingFooter = ({ painting }) => {
  const navigate = useNavigate();
  const [btnNextOpacity, setBtnNextOpacity] = useState("1");
  const [btnPrevOpacity, setBtnPrevOpacity] = useState("1");

  const nextPage = () => {
    setBtnPrevOpacity("1");
    if (painting.id <= 13) {
      setBtnNextOpacity("1");
      navigate(`/${painting.id + 1}`);
    }
    if (painting.id == 13) {
      setBtnNextOpacity("0.5");
    }
  };

  const prevPage = () => {
    setBtnNextOpacity("1");
    if (painting.id >= 1) {
      setBtnPrevOpacity("1");
      navigate(`/${painting.id - 1}`);
    }
    if (painting.id == 1) {
      setBtnPrevOpacity("0.5");
    }
  };

  useEffect(() => {
    if (painting.id == 0) {
      setBtnPrevOpacity("0.5");
      setBtnNextOpacity("1");
    } else if (painting.id == 14) {
      setBtnPrevOpacity("1");
      setBtnNextOpacity("0.5");
    }
  }, []);

  return (
    <div>
      <div
        className="progress-bar"
        style={{ width: ((painting.id / 14) * 100).toFixed(2) + "%" }}
      ></div>
      <footer className="container">
        <div className="footer-left">
          <p className="h3">{painting.name}</p>
          <p>{painting.artist.name}</p>
        </div>
        <div className="footer-right flex">
          <img
            src={iconBack}
            alt=""
            onClick={prevPage}
            style={{ opacity: btnPrevOpacity }}
            className="iconBack"
          />
          <img
            src={iconNext}
            alt=""
            onClick={nextPage}
            style={{ opacity: btnNextOpacity }}
            className="iconNext"
          />
        </div>
      </footer>
    </div>
  );
};

export default PaintingFooter;
