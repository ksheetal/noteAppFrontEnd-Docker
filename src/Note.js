import Notes from "./components/Notes";
import { useState, useEffect } from "react";
const axios = require("axios");

function Note() {
  const [notes, setNotes] = useState([]);

  function handleDelete(id) {
    console.log("delete called + ", id);
    const requestOptions = {
      method: "DELETE",
    };

    axios
      .delete("http://localhost:8080/note/deleteNote/" + id, requestOptions)
      .then((response) => {
        console.log(response);
        axios
          .get("http://localhost:8080/note/getAllNotes", {})
          .then((response) => {
            setNotes(response.data.notes);
          })
          .catch((error) => {});
        return response;
      })
      .then((result) => {
        console.log(result);
      });
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080/note/getAllNotes", {})
      .then((response) => {
        setNotes(response.data.notes);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="app">
      <h1>showing all {notes.length} notes </h1>
      {notes.map((note, i) => {
        return (
          <div key={i}>
            {" "}
            <Notes
              title={note.noteTitle}
              desc={note.noteDesc}
              id={note._id}
              handleDelete={handleDelete}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Note;
