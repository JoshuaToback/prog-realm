import React from "react";

function Latest() {
  return (
    <div className="video-container">
      <div className="video">
        <iframe
          width="400px"
          height="315px"
          src="https://www.youtube.com/embed/9fb8zhiyBPo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h2 className="video-title">Legend of the Blue Eyes Dragon</h2>
        <p>
          Start from the beginning with the first-ever set of Yu-Gi-Oh: Legend
          of the Blue Eyes White Dragon!
        </p>
      </div>
    </div>
  );
}

export default Latest;
