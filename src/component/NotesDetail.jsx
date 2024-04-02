import React from "react";
import ArchivesButton from "./ArchiveButton";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";

export default function NotesDetail({ id, title, body, createdAt, FormatDate, deleteNote, ArchiveNote }) {
  return (
    <>
      <section className="detail-page">
        <h3 className="detail-page__title">{title}</h3>
        <p className="detail-page__createdAt">{FormatDate(createdAt)}</p>
        <div className="detail-page__body">{body}</div>
        <div className="detail-page__action">
          <ArchivesButton id={id} ArchiveNote={ArchiveNote} />
          <DeleteButton id={id} deleteNote={deleteNote} />
        </div>
      </section>
    </>
  );
}

NotesDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  FormatDate: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  ArchiveNote: PropTypes.func.isRequired,
};
