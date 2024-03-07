import React from "react";
import PropTypes from "prop-types"; 
import ArtistName from "./components/ArtistName";
import AlbumName from "./components/AlbumName";
import CoverImage from "./components/CoverImage";

const Album = ({ album }) => {
  return (
    <div>
      <CoverImage image={album.images[0]?.url} />
      <AlbumName name={album.name} />
      <h2>{album.name}</h2>
      <div>
        {album.artists.map((artist, index) => (
          <div key={index}>
            <ArtistName name={artist.name} />
            <a href={artist.external_urls.spotify}>View Artist</a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define PropTypes for the album prop, not albums
Album.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        external_urls: PropTypes.shape({
          spotify: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Album;
