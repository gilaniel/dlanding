import * as React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import { useStaticQuery, graphql, Link } from "gatsby";

import { Logo } from "./icons";

export function localizedPath(defaultLocale, locale, path) {
  const [, base] = path.split(`/`);
  if (locale === defaultLocale || base === locale) return path;
  return `/${locale}${path}`;
}

const LanguageSwitcher = ({ locales, location }) => {
  const { locale: currentLocale, defaultLocale } = useIntl();

  return (
    <>
      <div className="df ai-center lang-switcher">
        {locales.map((locale) => (
          <div
            key={locale}
            className={`lang-item mr-20 df ai-center tt-uc ${
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
              {locale}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

const Header = ({ location }) => {
  const { formatMessage } = useIntl();

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
      <div className="header">
        <div>
          <div className="row">
            <div className="col-12">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <a href="/" className="logo df ai-center">
                    <Logo />
                  </a>
                </div>
                <div className="col-auto">
                  <ul className="nav-list main-list row align-items-center tt-uc">
                    <li className="col-auto nav-item">
                      <a href="/pricing">Pricing</a>
                    </li>
                    <li className="col-auto nav-item">
                      <a href="/signin">Sign in</a>
                    </li>
                    <li className="col-auto nav-item">
                      <a href="/signup">Create account</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
