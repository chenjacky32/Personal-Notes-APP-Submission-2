import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import Archives from "../pages/Archives";
import WrapperDetailNotes from "../pages/DetailNotes";

export default function App() {
  return (
    <div className="app-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/notes/" element={<HomePage />} />
          <Route path="/notes/archives" element={<Archives />} />
          <Route path="/notes/:id" element={<WrapperDetailNotes />} />
          <Route path="/notes/new" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}
