import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../component/RegisterInput";
import { register } from "../utils/api";

export default function RegisterPage() {
  const Navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      Navigate("/");
    }
  }
  return (
    <>
      <section className="register-page">
        <h2>Silahkan Registrasi</h2>
        <RegisterInput register={onRegisterHandler} />
        <p>
          Kembali ke <Link to="/">Masuk</Link>
        </p>
      </section>
    </>
  );
}
