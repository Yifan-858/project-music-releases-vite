import React from "react";
import data from "./data.json";
import Album from "./Album";

const App = () => {
  return (
    <div className="container">
      {data.albums.items.map((album, index) => (
        <Album key={index} album={album} />
      ))}
    </div>
  );
};

export default App;
