import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SearchBar({ Search, SearchHandler }) {
  return (
    <>
      <section className="search-bar">
        <input
          type="text"
          placeholder="Cari berdasarkan judul ..."
          value={Search}
          onChange={(e) => {
            SearchHandler(e.target.value);
          }}
        />
      </section>
    </>
  );
}

SearchBar.propTypes = {
  Search: PropTypes.string.isRequired,
  SearchHandler: PropTypes.func.isRequired,
};
