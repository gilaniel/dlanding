import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Duqqy from "../images/duqqy_footer.png";

import Insta from "../images/insta.svg";
import Yt from "../images/yt.svg";
import Twit from "../images/tw.svg";
import Spot from "../images/spot.svg";
import { LanguageSwitcher } from "../components/languageSwitcher";

export const Footer = ({ location }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          i18nLocales {
            locales
          }
        }
      }
    }
  `);

  return (
    <>
      <div
        className="footer-content text-center"
        data-sal="fade"
        data-sal-duration="900"
        datdata-sal-delay="900"
      >
        <h3>Don't worry, be</h3>
        <h3 className="color-main">DUQQY!</h3>
        <img src={Duqqy} alt="Duqqy" className="ex-img" />
      </div>
      <div className="footer-bg bg"></div>
      <div className="footer-nav">
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto"></div>
              <div className="col-auto">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <LanguageSwitcher
                      location={location}
                      locales={site.siteMetadata.i18nLocales.locales}
                    />
                  </div>
                  <div className="col-auto">
                    <ul className="nav-list main-list row align-items-center tt-uc">
                      <li className="col-auto nav-item">
                        <a href="/insta">
                          <img src={Insta} alt="Duqqy" />
                        </a>
                      </li>
                      <li className="col-auto nav-item">
                        <a href="/twit">
                          <img src={Twit} alt="Duqqy" />
                        </a>
                      </li>
                      <li className="col-auto nav-item">
                        <a href="/yt">
                          <img src={Yt} alt="Duqqy" />
                        </a>
                      </li>
                      <li className="col-auto nav-item">
                        <a href="/spot">
                          <img src={Spot} alt="Duqqy" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
