import React from "react";
import { marked } from "marked";

const Preview = ({ inputText }) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(inputText) }}
      className="bg-[#c0d8d8] w-1/2 p-4  "
    />
  );
};

export default Preview;
