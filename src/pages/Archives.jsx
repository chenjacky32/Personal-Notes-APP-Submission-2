import React, { useState } from "react";

export default function Archives() {
  const [input, setInput] = useState("");

  return (
    <>
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
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
        <section className="notes-list-empty">
          <p className="notes-list">Tidak ada Catatan</p>
        </section>
      </section>
    </>
  );
}
