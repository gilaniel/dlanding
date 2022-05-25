import React from "react";
import { Button } from "../components/button";

import BoostEx from "../images/booster_ex.png";
import BoostStat from "../images/boost_stat.png";
import BoostDuqqy from "../images/boost_duqqy.png";

export const Booster = () => {
  return (
    <>
      <div
        className="container full"
        data-sal="fade"
        data-sal-duration="900"
        datdata-sal-delay="900"
      >
        <div className="row align-items-center">
          <div className="col-5">
            <h2>Booster</h2>
            <p className="mb-16 mt-16">
              Create fine-tuned Youtube ad campaigns. We keep every detail into
              account, and will never let you down.
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
              <img src={BoostEx} alt="Duqqy" className="ex-img" />
              <img
                src={BoostStat}
                alt="Duqqy"
                className="stat-img boost-stat"
              />
              <img
                src={BoostDuqqy}
                alt="Duqqy"
                className="bird-img boost-bird-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="booster-bg bg"></div>
    </>
  );
};
