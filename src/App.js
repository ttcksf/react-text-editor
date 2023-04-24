import logo from "./logo.svg";
import "./App.css";
import TextEditor from "./component/Editor";

// https://www.npmjs.com/package/react-draft-wysiwyg
// https://jpuri.github.io/react-draft-wysiwyg/#/docs
// https://www.npmjs.com/package/draftjs-to-html
// https://www.npmjs.com/package/html-to-draftjs

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Text Editor</h1>
      </header>
      <div className="editor">
        <TextEditor />
      </div>
    </div>
  );
}

export default App;
