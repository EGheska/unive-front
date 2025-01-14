import React, {useState} from 'react'

const TextAreaComponent = ({ placeholder = "Enter your text here...", rows = 10, cols = 50 }) => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="text-area">
             <textarea
                 value={text}
                 onChange={handleChange}
                 rows={rows}
                 cols={cols}
                 placeholder={placeholder}
                 style={{
                     width: "100%",
                     height: "300px",
                     padding: "10px",
                     fontSize: "16px",
                     borderRadius: "8px",
                     border: "1px solid #ccc",
                     resize: "none",
                 }}
             >

             </textarea>
        </div>
    )
}

export default TextAreaComponent;