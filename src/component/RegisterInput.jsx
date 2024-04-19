import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

export default function RegisterInput({ register }) {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  function onSubmitHandler(e) {
    e.preventDefault();
    register({ name, email, password });
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className="register-input">
        <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={handlePasswordChange} />
        <button>Register</button>
      </form>
    </>
  );
}
