import React from "react";
import ArtistName from "./components/ArtistName";
import AlbumName from "./components/AlbumName";
import CoverImage from "./components/CoverImage";

const Album = ({ albums }) => {

  return (
    <div className="album-list">
      {data.albums.items.map((album) => (
        <div key={albums.id}>
          <AlbumName name={albums.name} />
          <CoverImage image={album.images[0]?.url} />
          <h2>{album.name}</h2>
          <ArtistName artists={album.artists} />
        </div>
      ))}
    </div>
  );
};

export default Album;
