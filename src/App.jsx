import React from "react";
import data from "./data.json";
import Album from "./Album";

const App = () => {
  return (
    <div>
      <h1>Recent Releases</h1>
      {data.albums.map((album, index) => (
        <Album key={index} album={album} />
      ))}
    </div>
  );
};

export default App;
