import React from "react";

export const ArtistName = ({ artists }) => {
  return (
    <p>
      {artists.map((artist, index) => (
        <span key={index}>
          <a key={artist.id} href={artist.external_urls.spotify}>
            <p className="artist-name">{artist.name}</p>
          </a>
          {index === artists.length - 2 && " & "}
        </span>
      ))}
    </p>
  );
};
