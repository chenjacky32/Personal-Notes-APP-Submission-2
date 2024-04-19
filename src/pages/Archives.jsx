import React from "react";
import SearchBar from "../component/SearchBar";
import NotesList from "../component/NotesList";
import ButtonAddPage from "../component/ButtonAddPage";
import { showFormattedDate } from "../utils";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes, getArchivedNotes } from "../utils/api";

export default function Archives() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNotes, setActiveNotes] = React.useState([]);
  const [archivedNotes, setArchivedNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setArchivedNotes(data);
    });
  }, []);

  async function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const FilterArchiveNotes = archivedNotes.filter((item) => {
    return item.archived === true && item.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <section className="homepage">
        <h2>Catatan Arsip</h2>
        <SearchBar Search={keyword} SearchHandler={onKeywordChangeHandler} />
        <NotesList ActiveNotes={[]} FormatDate={showFormattedDate} ArchiveNotes={FilterArchiveNotes} />
        <div className="homepage__action">
          <ButtonAddPage />
        </div>
      </section>
    </>
  );
}
