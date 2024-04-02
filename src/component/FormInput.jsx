import { func } from "prop-types";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function FormInput({ title, InputHandler, body, ChangeTitle }) {
  const [editcontent, setEditcontent] = useState(body);

  function handleInput(e) {
    setEditcontent(e.target.innerHTML);
    InputHandler(e);
  }

  return (
    <>
      <div className="add-new-page__input">
        <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={title} onChange={ChangeTitle} />
        <div className="add-new-page__input__body" contentEditable="true" data-placeholder="Sebenarnya saya adalah ...." onInput={handleInput}>
          {/* {body} */}
          {/* {editcontent} */}
        </div>
      </div>
    </>
  );
}

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  InputHandler: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
  ChangeTitle: PropTypes.func.isRequired,
};
