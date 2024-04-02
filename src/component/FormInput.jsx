import React from "react";

export default function FormInput({ title, InputHandler, body, ChangeTitle }) {
  return (
    <>
      <div className="add-new-page__input">
        <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={title} onChange={ChangeTitle} />
        <div className="add-new-page__input__body" contentEditable="true" data-placeholder="Sebenarnya saya adalah ...." onInput={InputHandler}></div>
      </div>
    </>
  );
}
