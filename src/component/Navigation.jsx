import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <h1>
        <Link to="/notes/">Aplikasi Catatan</Link>
      </h1>
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/notes/archives">Arsip</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
