import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpclick = () => {
        console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }
    const handleonchange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }


    // const [mystyle, setmystyle] = useState({
    //     color: "#042743",
    //     backgroundColor: "white"
    // })
    const [text, setText] = useState("Enter Text Here")
    const countWords = (input) => {
        if (!input.trim()) return 0;
        return input.trim().split(/\s+/).length;
    };
    const wordCount = countWords(text);

    // const [btntext, setbtntext] = useState("Enable Dark Mode")

    // const togglestyle = () => {
    //     if (mystyle.color === "#042743") {
    //         setmystyle({
    //             color: "white",
    //             backgroundColor: "#042743",
    //             border: "1px solid white"
    //         })
    //         setbtntext("Enable Light Mode")
    //     }
    //     else {
    //         setmystyle({
    //             color: "#042743",
    //             backgroundColor: "White"
    //         })
    //         setbtntext("Enable Dark Mode")
    //     }
    // }

    // to change text 
    // setText("new text") 
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? 'white' : '#042743' }}  >
                <h1 >{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} style={{ color: props.mode === "dark" ? 'black' : '#042743' }} onChange={handleonchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpclick}>Convert to uppercase</button>
                {/* <button className="btn btn-primary" onClick={togglestyle}>{btntext}</button> */}


            </div>
            <div className="container" style={{ color: props.mode === "dark" ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{wordCount} words and {text.length} characters</p>
                <p>you will take approx {0.008 * text.split(" ").length} minutes to read</p>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : "Write something above to preview it  here"}</p>
            </div>

        </>
    )
}
