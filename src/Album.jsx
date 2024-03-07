import React from "react";
import data from "./data.json";
import ArtistName from "./AlbumComponents/ArtistName";
import AlbumName from "./AlbumComponents/AlbumName";
import CoverImage from "./AlbumComponents/CoverImage";

const Album = ({ album }) => {

  return (
    <div>
      <AlbumName name={album.name} />
      <CoverImage image={album.images[0]?.url} />
      <h2>{album.name}</h2>
      <ArtistName artists={album.artists} />
    </div>
  );
};


export default Album;