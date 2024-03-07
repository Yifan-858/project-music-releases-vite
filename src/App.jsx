import React from "react";
import data from "./data.json";
import {Header} from "./Header";
import {Album} from "./Album";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Album />
    </div>
  );
};


