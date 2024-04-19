import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login } from "../utils/api";
import LoginInput from "../component/LoginInput";
import RegisterPage from "./RegisterPage";

export default function LoginPage({ onLoginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      onLoginSuccess(data);
    }
  }

  return (
    <>
      <section className="login-page">
        <h2>Silakan Masuk</h2>
        <LoginInput login={onLogin} />
        <p>
          Belum ada akun? <Link to="/register">Daftar di sini</Link>
        </p>
      </section>
    </>
  );
}

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};
