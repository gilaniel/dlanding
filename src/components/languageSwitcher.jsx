import React, { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { Link } from "gatsby";

import En from "../images/en.svg";
import Ru from "../images/ru.svg";
import Check from "../images/check.svg";

import { Arrow } from "./icons";
import classNames from "classnames";

export function localizedPath(defaultLocale, locale, path) {
  const [, base] = path.split(`/`);
  if (locale === defaultLocale || base === locale) return path;
  return `/${locale}${path}`;
}

export const LanguageSwitcher = ({ locales, location }) => {
  const { locale: currentLocale, defaultLocale, formatMessage } = useIntl();
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const getFlag = (locale) => {
    switch (locale) {
      case "en":
        return En;
      default:
        return Ru;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div className="language-container">
        <div
          ref={ref}
          className="language-current-item"
          onClick={() => setOpen(!isOpen)}
        >
          <img
            width="16px"
            src={getFlag(currentLocale)}
            alt="Duqqy"
            className="mr-8"
          />
          <div className="mr-8">{formatMessage({ id: currentLocale })}</div>
          <Arrow style={{ transform: `rotate(${isOpen ? 0 : "180deg"})` }} />
        </div>
        <div className={classNames("language-drop", { active: isOpen })}>
          {locales.map((locale) => (
            <div
              key={locale}
              className={`lang-item ${
                locale === currentLocale ? "active" : ""
              }`}
            >
              <Link
                to={
                  locale === defaultLocale
                    ? location.pathname.replace(`/${currentLocale}`, "")
                    : localizedPath(defaultLocale, locale, location.pathname)
                }
              >
                <div>
                  <img src={getFlag(locale)} alt="Duqqy" className="mr-8" />
                  <span>{formatMessage({ id: locale })}</span>
                </div>
                {locale === currentLocale && <img src={Check} alt="Duqqy" />}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
