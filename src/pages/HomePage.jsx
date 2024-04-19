import React from "react";
import SearchBar from "../component/SearchBar";
import NotesList from "../component/NotesList";
import ButtonAddPage from "../component/ButtonAddPage";
import { showFormattedDate } from "../utils";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes, getArchivedNotes } from "../utils/api";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNotes, setActiveNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setActiveNotes(data);
    });
  }, []);

  async function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const FilterActiveNotes = activeNotes.filter((item) => {
    return item.archived === false && item.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar Search={keyword} SearchHandler={onKeywordChangeHandler} />
        <NotesList ActiveNotes={FilterActiveNotes} ArchiveNotes={[]} FormatDate={showFormattedDate} />
        <div className="homepage__action">
          <ButtonAddPage />
        </div>
      </section>
    </>
  );
}
