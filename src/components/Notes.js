import "../components/Notes.css";
const axios = require("axios");

function Notes(props) {
  return (
    <div className="notes">
      <h3>{props.title}</h3>
      <p> {props.desc}</p>
      <button className="btn" onClick={() => props.handleDelete(props.id)}>
        delete{" "}
      </button>
      <button className="btn">update </button>
    </div>
  );
}
export default Notes;
