import React from "react";
import { Button } from "../components/button";

import DarkEx from "../images/dark_ex.png";

export const Dark = ({ children }) => {
  return (
    <>
      <div
        className="text-center dark-content"
        data-sal="slide-up"
        data-sal-duration="900"
        datdata-sal-delay="900"
      >
        <div className="mb-20">
          <h2 className="color-white">Turn off the light</h2>
          <p className="color-white mt-16 mb-24">
            Switch to a dark theme for comfortable work at night
          </p>
          <Button text="Try duqqy" className="yellow" />
        </div>
        <img src={DarkEx} alt="Duqqy" className="ex-img" />
      </div>
      <div className="bg dark-bg">{children}</div>
    </>
  );
};
