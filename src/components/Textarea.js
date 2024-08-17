import React from "react";

function Textarea({ inputText, setInputText }) {
  return (
    <textarea
      id="editor"
      onChange={(e) => setInputText(e.target.value)}
      value={inputText}
      className="bg-[#c0d8d8] w-2/5 h-[300px] border-solid border-2 border-black p-4 resize-none"
    />
  );
}

export default Textarea;
