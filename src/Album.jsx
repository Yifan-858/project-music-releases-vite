import React from "react";
// import PropTypes from "prop-types"; 
import data from "./data.json";
import {ArtistName} from "./components/ArtistName";
import {AlbumName} from "./components/AlbumName";
import {CoverImage} from "./components/CoverImage";

export const Album = () => {
  return (
    <section>
      {
        data.albums.items.map((album)=>(
          <div key={album.id} className="album-item">
            <CoverImage album={album}/>
            <AlbumName album={album}/>
            <ArtistName artists={album.artists}/>
          </div>
        ))
      }
    </section>
  )};

// Define PropTypes for the album prop, not albums
// Album.propTypes = {
//   album: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     images: PropTypes.arrayOf(
//       PropTypes.shape({
//         url: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     artists: PropTypes.arrayOf(
//       PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         external_urls: PropTypes.shape({
//           spotify: PropTypes.string.isRequired,
//         }).isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
// };


