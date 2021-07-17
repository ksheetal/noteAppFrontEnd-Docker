import "./AddNote.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");
function AddNote() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(noteDesc);
    console.log(noteTitle);
    axios
      .post("http://localhost:8080/note/AddNote", {
        noteTitle: "Fred",
        noteDesc: "Flintstone@gmail.com",
      })
      .then(function (response) {
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="addNote">
      <h1> add note</h1>
      <div className="addNoteForm">
        <form onSubmit={handleSubmit}>
          <label>
            Note Title
            <input
              type="text"
              onChange={(e) => {
                setNoteTitle(e.target.value);
              }}
            />
          </label>
          <label>
            Note Description
            <input
              type="text"
              onChange={(e) => {
                setNoteDesc(e.target.value);
              }}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddNote;
