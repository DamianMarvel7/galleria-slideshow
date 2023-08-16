import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import a from "../assets/arnolfini-portrait/thumbnail.jpg";
// import b from "../assets/girl-with-pearl-earring/thumbnail.jpg";
// import c from "../assets/guernica/thumbnail.jpg";
// import d from "../assets/lady-with-an-ermine/thumbnail.jpg";
// import e from "../assets/mona-lisa/thumbnail.jpg";
// import f from "../assets/penitent-magdalene/thumbnail.jpg";
// import g from "../assets/starry-night/thumbnail.jpg";
// import h from "../assets/the-basket-of-apples/thumbnail.jpg";
// import i from "../assets/the-boy-in-the-red-vest/thumbnail.jpg";
// import j from "../assets/the-great-wave-off-kanagawa/thumbnail.jpg";
// import k from "../assets/the-night-cafe/thumbnail.jpg";
// import l from "../assets/the-sleeping-gypsy/thumbnail.jpg";
// import m from "../assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg";
// import n from "../assets/the-swing/thumbnail.jpg";
// import o from "../assets/van-gogh-self-portrait/thumbnail.jpg";

const ThumbnailDetail = ({ painting }) => {
  // const thumbnailList = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o];

  return (
    <Link to={`${painting.id}`}>
      <div className="thumbnail">
        <img
          src={`src/${painting.images.thumbnail}`}
          alt=""
          className="thumbnail-img"
        />
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
