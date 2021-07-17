import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Note from "./Note";
import AddNote from "./components/AddNote";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Note} />
          <Route exact path="/addNote" component={AddNote} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
