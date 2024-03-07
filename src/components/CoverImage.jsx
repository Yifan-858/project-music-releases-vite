import React from "react";

const CoverImage = ({ album }) => {
  return <img src={album.images[0]?.url} alt={album.name} />;
};

export default CoverImage;
