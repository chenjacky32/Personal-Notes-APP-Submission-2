import React from "react";
import SearchBar from "../component/SearchBar";
import NotesList from "../component/NotesList";
import ButtonAddPage from "../component/ButtonAddPage";
import { getAllNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: getAllNotes(),
    };
  }

  render() {
    return (
      <>
        <section className="homepage">
          <h2>Catatan Aktif</h2>
          <SearchBar />
          <NotesList getAllNotes={this.state.isActive} FormatDate={showFormattedDate} />
          <div className="homepage__action">
            <ButtonAddPage />
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;
