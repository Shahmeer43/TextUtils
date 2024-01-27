import { useState } from "react";
import "../Styles/TextFormStyle.css";
import Summary from "./Summary";

function TextForm({ mode, showAlert }) {
  const [text, setText] = useState("");
  const [history, sethistory] = useState([""]);
  const [historyIndex, setHistoryIndex] = useState(0);

  let onChangeTextAreaValue = (event) => {
    setText(event.target.value);
    sethistory((previoushistory) => [...previoushistory, event.target.value]);
    let i = historyIndex;
    i++;
    setHistoryIndex(i);
  };

  let upperCase = () => {
    if (text.trim() !== "") {
      let textInUppercase = text.toUpperCase();
      setText(textInUppercase);
      sethistory((previoushistory) => [...previoushistory, textInUppercase]);
      let i = historyIndex;
      i++;
      setHistoryIndex(i);
      showAlert("Converted to uppercase!");
    }
  };

  let lowerCase = () => {
    if (text.trim() !== "") {
      let textInLowercase = text.toLowerCase();
      setText(textInLowercase);
      sethistory((previoushistory) => [...previoushistory, textInLowercase]);
      let i = historyIndex;
      i++;
      setHistoryIndex(i);
      showAlert("Converted to lowercase!");
    }
  };

  let reverse = () => {
    if (text.trim() !== "") {
      let change = text.split("").reverse().join("");
      setText(change);
      sethistory((previoushistory) => [...previoushistory, change]);
      let i = historyIndex;
      i++;
      setHistoryIndex(i);
      showAlert("Text reversed!");
    }
  };

  let removeExtraSpaces = () => {
    if (text.trim() !== "") {
      let newText = text.split(/[ ]+/).join(" ");
      setText(newText);
      showAlert("Extra spaces are removed!");
    }
  };

  let copyText = () => {
    if (text.trim() !== "") {
      navigator.clipboard.writeText(text);
      showAlert("Text Copied!");
    }
  };

  let clear = () => {
    if (text.trim() !== "") {
      setText("");
      sethistory((previoushistory) => {
        console.log(previoushistory);
        return [...previoushistory, ""];
      });
      let i = historyIndex;
      i++;
      setHistoryIndex(i);
      showAlert("Cleared!");
    }
  };

  // let splitWords = () => {
  //   let history = text.split(" ").filter((word) => {
  //     return word !== "";
  //   });

  //   return history;
  // };

  let undo = () => {
    let i = historyIndex;
    if (i > 0) {
      i--;
      setHistoryIndex(i);
      setText(history[i]);
    }
  };

  let redo = () => {
    let i = historyIndex;
    if (i < history.length - 1) {
      i++;
      setHistoryIndex(i);
      setText(history[i]);
    }
  };

  return (
    <>
      <div id="container">
        <textarea
          rows="12"
          className="textBoxInput"
          placeholder="Start Writing!..."
          value={text}
          onChange={onChangeTextAreaValue}
          style={{ outlineColor: mode === "dark" ? "white" : "#2596be" }}
        ></textarea>
      </div>
      <div className="btnParentDiv">
        <div className="btnDiv">
          <button className="btn" id="btnUpperCase" onClick={upperCase}>
            UPPERCASE
          </button>
          <button className="btn" id="btnLowerCase" onClick={lowerCase}>
            lowercase
          </button>
          <button className="btn" id="btnReverse" onClick={reverse}>
            Reverse
          </button>
          <button
            className="btn"
            id="btnRemoveExtraSpaces"
            onClick={removeExtraSpaces}
          >
            Clear Spaces
          </button>
          <button className="btn" id="btnCopyText" onClick={copyText}>
            Copy
          </button>
          <button className="btn" id="btnClear" onClick={clear}>
            Clear
          </button>
          <button className="btn" id="btnUndo" onClick={undo}>
            Undo
          </button>
          <button className="btn" id="btnRedo" onClick={redo}>
            Redo
          </button>
        </div>
      </div>
      <Summary data={text} mode={mode} />
    </>
  );
}

export default TextForm;
