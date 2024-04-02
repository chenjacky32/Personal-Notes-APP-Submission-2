import React, { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");
  return (
    <>
      <section className="search-bar">
        <input
          type="text"
          placeholder="Cari berdasarkan judul ..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            console.log(input);
          }}
        />
      </section>
    </>
  );
}
