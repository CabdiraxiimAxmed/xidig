import SubjectSiteMap from '../SubjectSiteMap';
import htmlHead from '../../../subjects/html/htmlHead.md';
import { useEffect, useState } from 'react';
import MarkdownViewer from '../MarkdownViewer';
import React from 'react'

const HtmlHead = () => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch(htmlHead)
      .then(res => res.text())
      .then(md => setMarkdown(md));
  }, []);
  return (
    <div className="subject-content-container">
      <SubjectSiteMap />
      <MarkdownViewer markdown={markdown} />
    </div>
  );
}

export default HtmlHead
