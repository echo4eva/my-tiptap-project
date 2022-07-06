import Tiptap from "./Components/TipTap";
import "./App.css";
import { useState } from "react";
import parser from "html-react-parser";
const App = () => {
  const [desc, setDesc] = useState('');
  return (
    <div className="App">

      <Tiptap setDesc = {setDesc} />
      <div className= "ProseMirror"> {parser(desc)} </div>
    </div>
  );
}

export default App;