import React from "react";
import PropTypes, { func } from "prop-types";
import useInput from "../hooks/useInput";

export default function LoginInput({ login }) {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  function onSubmitHandler(e) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <>
      <form className="login-input" onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button>Masuk</button>
      </form>
    </>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
