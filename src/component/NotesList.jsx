import React from "react";
import NotesItem from "./NotesItem";
import PropTypes, { object } from "prop-types";

export default function NotesList({ getAllNotes, FormatDate }) {
  if (!getAllNotes.length) {
    return (
      <>
        <section className="notes-list-empty">
          <p className="notes-list">Tidak ada Catatan</p>
        </section>
      </>
    );
  }
  return (
    <>
      <section className="notes-list">
        {getAllNotes.map((item) => (
          <NotesItem key={item.id} {...item} FormatDate={FormatDate} />
        ))}
      </section>
    </>
  );
}

NotesList.propTypes = {
  getAllNotes: PropTypes.arrayOf(object).isRequired,
  FormatDate: PropTypes.func.isRequired,
};
