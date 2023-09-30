import React, { useState } from "react";

function InputSection() {
  const [inputValue, setInputValue] = useState("Enter Text Here");
  const inputValueHandler = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  const uperCaseClickHandler = () => {
    // setInputValue(inputValue.toUpperCase());
    let upperCaseValue = inputValue.toUpperCase();
    setInputValue(upperCaseValue);
  };
  return (
    <>
      <div className="form-group" style={{ margin: "30px 200px" }}>
        <h3 style={{ marginBottom: 10 }}>Example textarea</h3>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          onChange={inputValueHandler}
        ></textarea>
        <div style={{ margin: "20px 0px" }}>
          <button
            onClick={uperCaseClickHandler}
            type="button"
            className="btn btn-success"
          >
            Convert To UperCase
          </button>
          <button type="button" className="btn btn-success">
            Convert To LowerCase
          </button>
          <button type="button" className="btn btn-success">
            Clear Text
          </button>
        </div>
        <div>
          <h2>Preview</h2>
          {/* <div>{inputValue}</div> */}
        </div>
      </div>
    </>
  );
}

export default InputSection;
