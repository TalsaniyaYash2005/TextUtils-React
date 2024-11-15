import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase button is clicked." + text);

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    
    const handleLoClick = () => {
        // console.log("Uppercase button is clicked." + text);
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    
    // const handleItalicClick = () => {
        //     // console.log("Uppercase button is clicked." + text);
        
        //     let newText = text.italics();
        //     setText(newText);
        // }

        const handleClearTextClick = () => {
            // console.log("Uppercase button is clicked." + text);
            
            let newText = "";
            setText(newText);
            props.showAlert("Text is clear!","success");
        }
        
        const handleCopyTextClick = () => {
            // console.log("Uppercase button is clicked." + text);
            
            let text = document.getElementById("mybox");
            // text.select();
            navigator.clipboard.writeText(text.value);
            // setText(newText);
            props.showAlert("Text is copied to Clipboard!","success");
        }
        
        const RemoveExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Hurry! Extra spaces are removed!","success");
        }

        const handleRevStrClick = () => {
            // console.log("Uppercase button is clicked." + text);
    
            const newText = text.split("").reverse().join("");
            setText(newText);
        }
        
        const handleOnChange = (event) => {
            // console.log("Uppercase button is changed.");
            setText(event.target.value);
    }

  const [text, setText] = useState("");
//   text = "new text"; // wrong way to change the state
//   setText("new text"); // correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
      <h1>
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'#042743':'white'}} id="mybox" rows="5"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleRevStrClick}>Reverse Text</button>
      <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyTextClick}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
      {/* <button className="btn btn-primary mx-1" onClick={handleItalicClick}>Convert to Italic</button> */}
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in the TextBox above to preview it."}</p>
    </div>
    </>
  );
}
