import React, { useState } from "react";
import Swal from "sweetalert2";

function InputSection() {
  const [text, setText] = useState("");

  const onchangeHandler = (event) => {
    setText(event.target.value);
  };
  const uperCaseClickHandler = () => {
    if (text.trim() === "") {
      Swal.fire("Input is empty!", "Please enter some text.", "warning");
    } else {
      const newText = text.toUpperCase();
      setText(newText);
      Swal.fire("Text converted to uppercase successfully!", "", "success");
    }
  };
  const loweerCaseHandler = () => {
    if (text.trim() === "") {
      Swal.fire("Input is empty!", "Please enter some text.", "warning");
    } else {
      const newText = text.toLowerCase();
      setText(newText);
      Swal.fire("Text converted to lowerCase successfully!", "", "success");
    }
  };
  const clearTextHandler = () => {
    if (text.trim() === "") {
      Swal.fire("Input is empty!", "Please enter some text.", "warning");
    } else {
      setText("");
      Swal.fire("Text cleared successfully!", "", "success");
    }
  };

  return (
    <>
      <div
        className="form-group"
        style={{
          margin: "30px 150px",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h3 style={{ marginBottom: 10 }}>Enter text to analyze below</h3>
        <textarea
          className="form-control"
          value={text}
          rows="6"
          onChange={onchangeHandler}
        ></textarea>
        <div style={{ margin: "20px 0px" }}>
          <button
            onClick={uperCaseClickHandler}
            type="button"
            className="btn btn-success"
          >
            Convert To UperCase
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={loweerCaseHandler}
          >
            Convert To LowerCase
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={clearTextHandler}
          >
            Clear Text
          </button>
        </div>
        <div>
          <h2>Preview</h2>
          <div style={{ marginBottom: 30 }}>{text}</div>
        </div>
      </div>
    </>
  );
}

export default InputSection;
