import React from "react";
import data from "./data.json";

const ArtistName = ({ artists }) => {
  return (
    <p>
      {artists.map((artist, index) => (
        <span key={index}>
          {artist.name}
          {index !== artists.length - 1 && ", "}
        </span>
      ))}
    </p>
  );
};

export default ArtistName;
