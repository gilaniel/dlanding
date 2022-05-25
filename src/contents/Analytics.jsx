import React from "react";

import { Button } from "../components/button";

import AnaEx from "../images/analytics_ex.png";
import AnaStat from "../images/ana_stat_1.png";
import AnaStat2 from "../images/ana_stat_2.png";
import AnaDuqqy from "../images/ana_duqqy.png";

import Sun from "../images/sun.svg";
import Moon from "../images/moon.svg";

export const Analytics = () => {
  return (
    <>
      <div
        className="container full analytics"
        data-sal="fade"
        data-sal-duration="900"
        datdata-sal-delay="900"
      >
        <div className="row align-items-center">
          <div className="col-5">
            <h2>Analytics</h2>
            <p className="mb-16 mt-16">
              We live Youtube and process tons of data for years. Get insights
              about anything on the platform for free.
            </p>
            <div className="mb-24">
              <div className="input-wrap">
                <input type="text" placeholder="URL video" className="input" />
                <div className="search-ico"></div>
              </div>
            </div>
            <Button text="Try duqqy" />
          </div>
          <div className="col-7">
            <div className="img-wrap text-end">
              <img src={AnaEx} alt="Duqqy" className="ex-img" />
              <img src={AnaStat} alt="Duqqy" className="stat-img ana-stat" />
              <img src={AnaStat2} alt="Duqqy" className="stat-img ana-stat-2" />
              <img
                src={AnaDuqqy}
                alt="Duqqy"
                className="bird-img ana-bird-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="analytics-bg bg">
        <div className="sun-moon">
          <div className="sun-container">
            <img src={Sun} alt="Duqqy" />
          </div>
          <img src={Moon} alt="Duqqy" className="moon-img" />
        </div>
      </div>
    </>
  );
};
