import React from "react";
import NotesDetail from "../component/NotesDetail";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";

export default function WrapperDetailNotes() {
  const { id } = useParams();
  return <DetailNotes id={id} />;
}

class DetailNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };
  }

  render() {
    if (this.state.notes === null) {
      return <p>Notes is not found!</p>;
    }

    return (
      <>
        <NotesDetail {...this.state.notes} FormatDate={showFormattedDate} />
      </>
    );
  }
}
