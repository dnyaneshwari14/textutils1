import { useState } from "react"

export default function TextForm (props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success");
    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!","success");
    }
    const handleClearClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success");
    }

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }

    const handleCopy =()=> {
        console.log("i am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied","success");

    }

 const [text,setText]= useState('');
 // setText("new text");
 return (
    <>
    <div className="container" style={{ color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control"  value= {text}  onChange={handleOnChange} style={{ backgroundColor :props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"> </textarea>
         </div>

         <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button> 
         <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
         <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
         <button disabled={text.length===0}className="btn btn-info mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{ color:props.mode==='dark'?'white':'#042743'}}>
        <h2> Your text summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length }Minutes read </p>
        <h2>Preview</h2>
        <p>{ text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
     
  )
}
