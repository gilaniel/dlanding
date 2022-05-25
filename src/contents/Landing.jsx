import React, { useEffect, useRef, useState } from "react";

import classNames from "classnames";

import Seo from "../components/Seo";

import { Section } from "../components/section";
import { Booster } from "../contents/Booster";
import { Music } from "../contents/Music";
import { Analytics } from "../contents/Analytics";
import { Dark } from "../contents/Dark";
import { Main } from "../contents/Main";
import { Footer } from "../contents/Footer";

export const Landing = ({ props }) => {
  let [idle, setIdle] = useState(true);
  let [activeSlide, setActiveSlide] = useState(0);
  const wrapRef = useRef();
  const pages = ["1", "2", "3", "4", "5", "6"];

  const handleWheel = ({ deltaY }) => {
    if (idle) {
      setIdle(false);

      if (deltaY > 0 && activeSlide < pages.length - 1) {
        setActiveSlide((prev) => prev + 1);
      }

      if (deltaY < 0 && activeSlide > 0) {
        setActiveSlide((prev) => prev - 1);
      }

      setTimeout(() => {
        setIdle(true);
      }, 1000);
    }
    // deltaY
  };

  const handleResize = () => {
    changeSlide();
  };

  function debounce(func, time) {
    var time = time || 100; // 100 by default if no param
    var timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, time, event);
    };
  }

  const handleNavClick = (index) => {
    setActiveSlide(index);
  };

  const changeSlide = () => {
    let top = window.innerHeight * activeSlide;

    if (activeSlide > 0 && top / activeSlide < 700) {
      top = 700 * activeSlide;
    }

    wrapRef.current.style.transform = `translate3d(0px, -${top}px, 0px)`;

    changeTheme();
  };

  const changeTheme = () => {
    const body = document.getElementsByTagName("body")[0];

    if ([0, 4].includes(activeSlide)) {
      body.classList.add("dark");
      return;
    }

    body.classList.remove("dark");
  };

  const getNavItems = () => {
    return (
      <>
        {pages.map((item, index) => (
          <div
            key={item}
            className={classNames("fp-nav_item", {
              active: index === activeSlide,
            })}
            onClick={() => handleNavClick(index)}
          >
            <div></div>
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.addEventListener("wheel", handleWheel);
    window.addEventListener("resize", debounce(handleResize, 150));

    return () => {
      body.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", debounce(handleResize));
    };
  }, [idle, activeSlide]);

  useEffect(() => {
    changeSlide();

    const sunContainer = document.querySelector(".sun-container");

    if (activeSlide === 4) {
      sunContainer.classList.add("moon");
    } else {
      sunContainer.classList.remove("moon");
    }
  }, [activeSlide]);

  return (
    <>
      <Seo />
      <div ref={wrapRef} className="fullpage-wrapper">
        <Section>
          <Main />
        </Section>
        <Section>
          <Booster />
        </Section>
        <Section>
          <Music />
        </Section>
        <Section className="analytics-section">
          <Analytics />
        </Section>
        <Section>
          <Dark></Dark>
        </Section>
        <Section>
          <Footer location={props.location} />
        </Section>
      </div>

      <div className="fp-nav" data-sal="fade" data-sal-duration="300">
        {getNavItems()}
      </div>
    </>
  );
};
