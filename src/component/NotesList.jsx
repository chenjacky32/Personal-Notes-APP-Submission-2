import React from "react";
import NotesItem from "./NotesItem";
import PropTypes, { object } from "prop-types";

export default function NotesList({ FormatDate, ActiveNotes, ArchiveNotes }) {
  if ((!ActiveNotes || !ActiveNotes.length) && (!ArchiveNotes || !ArchiveNotes.length)) {
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
        {ActiveNotes && ActiveNotes.map((item) => <NotesItem key={item.id} {...item} FormatDate={FormatDate} />)}
        {ArchiveNotes && ArchiveNotes.map((item) => <NotesItem key={item.id} {...item} FormatDate={FormatDate} />)}
      </section>
    </>
  );
}

NotesList.propTypes = {
  FormatDate: PropTypes.func.isRequired,
  ActiveNotes: PropTypes.arrayOf(PropTypes.object),
  ArchiveNotes: PropTypes.arrayOf(PropTypes.object),
};
