import React from 'react'
import SubjectSiteMap from '../SubjectSiteMap';
import body from '../../../subjects/html/body.md';
import { useEffect, useState } from 'react';
import MarkdownViewer from '../MarkdownViewer';
import Editor from '../Editor'
const Body = () => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch(body)
      .then(res => res.text())
      .then(md => setMarkdown(md));
  }, []);
  return (
    <>
    <div className="subject-content-container">
      <SubjectSiteMap />
      <MarkdownViewer markdown={markdown} />
    </div>
    <Editor />
    </>
  );
}

export default Body
