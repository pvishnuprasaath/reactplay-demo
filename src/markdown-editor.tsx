// Create a basic markdown editor in react.js with the following features:
// - Use react hooks
// - Create state for markdown with default text "type markdown here"
// - A text area where users can write markdown
// - Show a live preview of the markdown text as I type
// - Support for basic markdown syntax like headers, bold, italics
// - Use React markdown npm package
// - The markdown text and resulting HTML should be saved in the component's state and updated in real time

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './markdown-editor.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// what if name is not present in user object. how to handle it
const BreakableComponent = (user: { name?: string }) => {
  const username = user.name ?? 'Unknown';

  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
};

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  return (
    <div className="markdown-editor">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <ReactMarkdown className="markdown-preview" children={markdown} />
      {BreakableComponent({ name: 'Hinge Health' })}
    </div>
  );
};

export default MarkdownEditor;
