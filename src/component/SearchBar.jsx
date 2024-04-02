import React, { useState } from "react";

export default function SearchBar({ Search, SearchHandler }) {
  // const [input, setInput] = useState("");

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
