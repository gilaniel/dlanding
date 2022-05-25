import React from "react";
import Waves from "../images/Waves.png";

import { Button } from "../components/button";

import MusicEx from "../images/music_ex.png";
import MusicDuqqy from "../images/music_duqqy.png";

export const Music = () => {
  return (
    <>
      <div
        className="container music full"
        data-sal="fade"
        data-sal-duration="900"
        datdata-sal-delay="900"
      >
        <div className="row align-items-center">
          <div className="col-7">
            <div className="img-wrap text-start">
              <img src={MusicEx} alt="Duqqy" className="ex-img" />
              <div className="stat-img music-stat">
                <div className="dark-card">
                  <div className="row align-items-center justify-content-between">
                    <div className="card-title color-white col">Get access</div>
                    <div className="color-yellow card-license col text-end">
                      License model
                    </div>
                  </div>
                  <p className="color-white mt-16 mb-16">
                    We learn music everyday, and know how different it could be.
                    Pick a tune from the catalogue of more than 500k songs, that
                    suits your video vibe best. No claims, no worries.
                  </p>
                  <div className="color-white">
                    <span className="card-price">$15</span>
                    <span>/month</span>
                  </div>
                </div>
              </div>
              <img
                src={MusicDuqqy}
                alt="Duqqy"
                className="bird-img music-bird-img"
              />
            </div>
          </div>
          <div className="col-5">
            <h2>Music</h2>
            <p className="mb-16 mt-24">
              Get access to our catalogue with more than half a million songs
              for every mood and spirit.
            </p>

            <Button text="Try duqqy" />
          </div>
        </div>
      </div>
      <div className="music-bg bg"></div>
      <img src={Waves} alt="Duqqy" className="waves" />
    </>
  );
};
