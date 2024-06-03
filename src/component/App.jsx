import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import Archives from "../pages/Archives";
import WrapperDetailNotes from "../pages/DetailNotes";
import ErrorPage from "../pages/ErrorPage";
import { getUserLogged, putAccessToken } from "../utils/api";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { func } from "prop-types";
import ThemeContext from "../contexts/LocaleContext";

export default function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = React.useState(() => localStorage.getItem("theme") || "light");

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
      } catch (error) {
        console.error("Gagal Fetching :", error);
      }
    };
    fetchData();

    return () => {};
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    try {
      const { data } = await getUserLogged();
      setAuthedUser(data);
    } catch (error) {
      console.error("Gagal Fetching User yang telah login :", error);
    }
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="app-container">
        <header>
          <h1>Login</h1>
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage onLoginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container">
        <header>
          <Navigation logout={onLogout} name={authedUser} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/notes" replace />} />
            <Route path="/notes" element={<HomePage />} />
            <Route path="/notes/archives" element={<Archives />} />
            <Route path="/notes/:id" element={<WrapperDetailNotes />} />
            <Route path="/notes/new" element={<AddPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
