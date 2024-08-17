import React, { useState } from "react";
import Textarea from "./components/Textarea";
import Preview from "./components/Preview";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

const App = () => {
  const [inputText, setInputText] =
    useState(`# Welcome to My Markdown Previewer!

## Subheader: Features of this Previewer

This is a simple Markdown previewer. You can use it to convert your Markdown into HTML in real-time. Check out some of the features below:

1. **Bold Text**: You can make text bold by wrapping it in double asterisks or underscores.
2. [Links](https://www.example.com): You can easily add links to your Markdown.
3. \`Inline Code\`: Use backticks to add inline code snippets.
4. Block of Code:

\`\`\`javascript
function greet() {
  console.log("Hello, World!");
}
\`\`\`

> Blockquotes: Use the greater-than symbol to create blockquotes.

![Image](https://via.placeholder.com/150)

- List items: Easily create lists with dashes or asterisks.
`);

  return (
    <div className="h-full bg-[#87b5b5] flex flex-col items-center justify-center p-4 gap-2">
      <Textarea inputText={inputText} setInputText={setInputText} />
      <Preview inputText={inputText} />
    </div>
  );
};

export default App;
