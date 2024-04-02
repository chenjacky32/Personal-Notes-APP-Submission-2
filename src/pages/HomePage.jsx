import React from "react";
import SearchBar from "../component/SearchBar";
import NotesList from "../component/NotesList";
import ButtonAddPage from "../component/ButtonAddPage";
import { getAllNotes, getActiveNotes, getArchivedNotes, getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      AllNotes: getAllNotes(),
      isArchive: getActiveNotes(),
      isArchived: getArchivedNotes(),
      Search: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(keyword) {
    this.setState(() => {
      return {
        Search: keyword,
      };
    });
  }

  render() {
    const ActiveNotes = this.state.AllNotes.filter((item) => {
      return item.archived === false && item.title.toLowerCase().includes(this.state.Search.toLowerCase());
    });
    const ArchiveNotes = this.state.AllNotes.filter((item) => {
      return item.archived === true && item.title.toLowerCase().includes(this.state.Search.toLowerCase());
    });

    return (
      <>
        <section className="homepage">
          <h2>Catatan Aktif</h2>
          <SearchBar Search={this.state.Search} SearchHandler={this.onSearchHandler} />
          <NotesList ActiveNotes={ActiveNotes} FormatDate={showFormattedDate} isArchive={this.state.isArchive} />
          <div className="homepage__action">
            <ButtonAddPage />
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;
