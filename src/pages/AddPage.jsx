import React, { useEffect, useState } from "react";
import FormInput from "../component/FormInput";
import ButtonInput from "../component/ButtonInput";
import { useNavigate } from "react-router-dom";
import { addNote, getActiveNotes, getArchivedNotes } from "../utils/api";

export default function AddPage() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const Navigate = useNavigate();

  async function addingNote(note) {
    await addNote({ title: title, body: body });

    setTitle("");
    setBody("");
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

  return (
    <>
      <section className="add-new-page">
        <FormInput title={title} InputHandler={onInputHandler} ChangeTitle={EventChangeTitle} body={body} />
        <div className="anewTitlection">
          <ButtonInput addNote={addingNote} />
        </div>
      </section>
    </>
  );
}
