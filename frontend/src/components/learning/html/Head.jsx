import React from 'react';
import SubjectSiteMap from '../SubjectSiteMap';
import heading from '../../../subjects/html/heading.md';
import { useEffect, useState } from 'react';
import MarkdownViewer from '../MarkdownViewer';

const Head = () => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch(heading)
      .then(res => res.text())
      .then(md => setMarkdown(md));
  }, []);
  return (
    <div className="subject-content-container">
      <SubjectSiteMap />
      <MarkdownViewer markdown={markdown} />
    </div>
  );
};

export default Head;
