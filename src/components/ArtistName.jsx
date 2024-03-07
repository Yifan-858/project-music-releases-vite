import React from "react";

export const ArtistName = ({ artists }) => {
  return (
    <p>
      {artists.map((artist, index) => (
        <span key={index}>
          {artist.name}
          {index !== artist.length - 1 && " "}
        </span>
      ))}
    </p>
  );
};
