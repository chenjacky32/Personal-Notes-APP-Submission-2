import React from "react";
import NotesDetail from "../component/NotesDetail";
import { useParams } from "react-router-dom";
import { getNote, archiveNote, unarchiveNote, deleteNote, getActiveNotes, getArchivedNotes } from "../utils/api";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

export default function DetailNotes() {
  const [notes, setNotes] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNotes(data);
    });
  }, [id]);

  if (notes === null) {
    return <p>Notes is not found!</p>;
  }

  async function onDeleteNotes(id) {
    await deleteNote(id);
  }

  async function onArchiveNotes(id) {
    await archiveNote(id);
  }

  async function onUnarchiveNotes(id) {
    await unarchiveNote(id);
  }

  return (
    <>
      <NotesDetail {...notes} FormatDate={showFormattedDate} deleteNote={onDeleteNotes} ArchiveNote={onArchiveNotes} UnarchiveNote={onUnarchiveNotes} />
    </>
  );
}
