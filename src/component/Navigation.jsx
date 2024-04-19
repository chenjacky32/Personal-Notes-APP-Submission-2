import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BsArchive } from "react-icons/bs";
import { MdGTranslate } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

import { FiSun } from "react-icons/fi";
import ThemeContext from "../contexts/LocaleContext";

export default function Navigation({ logout }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <>
      <h1>
        <Link to="/notes/">Aplikasi Catatan</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <button onClick={toggleTheme}>{theme === "light" ? <CgDarkMode /> : <FiSun />}</button>
          </li>
          <li>
            <MdGTranslate />
          </li>
          <li>
            <Link to="/notes/archives">
              <BsArchive />
            </Link>
          </li>
          <li>
            <button onClick={logout}>
              <FiLogOut />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};
