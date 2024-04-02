import React, { useEffect, useState } from "react";
import FormInput from "../component/FormInput";
import ButtonInput from "../component/ButtonInput";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const Navigate = useNavigate();

  function AddNoteHandler(notes) {
    addNote(notes);
    Navigate("/notes/");
  }

  function onInputHandler(e) {
    setBody(e.target.innerHTML);
  }

  function EventChangeTitle(e) {
    const newTitle = e.target.value;
    setTitle(newTitle);
    console.log(newTitle);
  }

  function HandleSubmitNote(e) {
    e.preventDefault();
    addNote({ title: title, body: body });
    setTitle("");
    setBody("");
  }

  return (
    <>
      <section className="add-new-page">
        {/* <form onSubmit={HandleSubmitNote}> */}
        <FormInput title={title} InputHandler={onInputHandler} ChangeTitle={EventChangeTitle} body={body} />
        <div className="anewTitlection">
          <ButtonInput addNote={AddNoteHandler} />
        </div>
        {/* </form> */}
      </section>
    </>
  );
}
