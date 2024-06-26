import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BsArchive } from "react-icons/bs";
import { MdGTranslate } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

import { FiSun } from "react-icons/fi";
import ThemeContext from "../contexts/LocaleContext";

export default function Navigation({ logout, name }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <>
      <h1>
        <Link to="/notes/">Aplikasi Catatan</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <button onClick={toggleTheme}>{theme === "light" ? <CgDarkMode color="var(--on-background)" /> : <FiSun color="var(--on-background)" />}</button>
          </li>
          <li>
            <MdGTranslate color="var(--on-background)" />
          </li>
          {name !== null ? (
            <>
              <li>
                <Link to="/notes/archives">
                  <BsArchive color="var(--on-background)" />
                </Link>
              </li>
              <li>
                <button onClick={logout}>
                  <FiLogOut color="var(--on-background)" />
                </button>
              </li>
            </>
          ) : null}
        </ul>
      </nav>
    </>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};
