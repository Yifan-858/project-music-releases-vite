import React from "react";


export const CoverImage = ({ album }) => {
  return <img src={album.images[0]?.url} alt={album.name} />;
};

