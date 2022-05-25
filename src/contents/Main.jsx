import React, { useState } from "react";
import classNames from "classnames";

import { Button } from "../components/button";

import BackSlide from "../images/back.png";
import Border from "../images/slide_border.png";
import BoostSlide from "../images/boost_slide.png";
import MusicSlide from "../images/music_slide.png";
import AnaSlide from "../images/ana_slide.png";

import BoostBird from "../images/boost_slide_duqqy.png";
import MusicBird from "../images/music_duqqy.png";
import AnaBird from "../images/ana_duqqy.png";

import { CSSTransition } from "react-transition-group";

export const Main = () => {
  const [active, setActive] = useState(0);
  const [left, setLeft] = useState("-2px");
  const products = ["Booster", "Music", "Analytics"];
  const handlerProductClick = (index) => {
    setActive(index);

    let left = `${index * 33.33333}%`;
    if (index === 0) {
      left = "-2px";
    }

    if (index === 2) {
      left = `${305 - 303 / 3}px`;
    }

    setLeft(left);
  };

  const productSwitcher = () => {
    return (
      <div className="row product-switcher align-items-center">
        {products.map((item, i) => (
          <div
            key={i}
            className={classNames("product-item col-4", {
              active: active === i,
            })}
            onClick={() => handlerProductClick(i)}
          >
            {item}
          </div>
        ))}

        <div className="switch-item" style={{ left }}></div>
      </div>
    );
  };

  return (
    <>
      <div className="container main" data-sal="fade" data-sal-duration="900">
        <div className="row align-items-end">
          <div className="col-5">
            {productSwitcher()}
            <h1>
              All-in-one solution <br /> for creators
            </h1>
            <p className="color-white mt-16 mb-24">
              An essential toolbox every creator needs. Music, ads, analytics in
              one place at one time.
            </p>
            <Button text="Try duqqy" className="yellow" />
          </div>
          <div className="col-7">
            <div className="slides-contaiter">
              <img src={BackSlide} alt="Duqqy" className="back-slide" />
              <div className="slide-border">
                <img src={Border} alt="Duqqy" />
                <CSSTransition
                  in={active === 0}
                  timeout={100}
                  classNames="slider"
                  unmountOnExit
                >
                  <img src={BoostSlide} alt="Duqqy" className="active-slide" />
                </CSSTransition>
                <CSSTransition
                  in={active === 0}
                  timeout={100}
                  classNames="slider"
                  unmountOnExit
                >
                  <img
                    src={BoostBird}
                    alt="Duqqy"
                    className="boost-bird bird"
                  />
                </CSSTransition>
                <CSSTransition
                  in={active === 1}
                  timeout={100}
                  classNames="slider"
                  unmountOnExit
                >
                  <img src={MusicSlide} alt="Duqqy" className="active-slide" />
                </CSSTransition>
                <CSSTransition
                  in={active === 1}
                  timeout={100}
                  classNames="slider"
                  unmountOnExit
                >
                  <img
                    src={MusicBird}
                    alt="Duqqy"
                    className="music-bird bird"
                  />
                </CSSTransition>
                <CSSTransition
                  in={active === 2}
                  timeout={100}
                  classNames="slider"
                  unmountOnExit
                >
                  <img src={AnaSlide} alt="Duqqy" className="active-slide" />
                </CSSTransition>
                <CSSTransition
                  in={active === 2}
                  timeout={100}
                  classNames="slider"
                  unmountOnExit
                >
                  <img src={AnaBird} alt="Duqqy" className="ana-bird bird" />
                </CSSTransition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-bg bg"></div>
    </>
  );
};