import SubjectSiteMap from '../SubjectSiteMap';
import htmlTag from '../../../subjects/html/htmlTag.md';
import { useEffect, useState } from 'react';
import React from 'react'
import MarkdownViewer from '../MarkdownViewer';
import Editor from '../Editor';

const HtmlTag = () => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch(htmlTag)
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

export default HtmlTag
