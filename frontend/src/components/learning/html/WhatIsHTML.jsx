import React from 'react';
import SubjectSiteMap from '../SubjectSiteMap';
import whatIsHTML from '../../../subjects/html/whatIsHTML.md';
import { useEffect, useState } from 'react';
import MarkdownViewer from '../MarkdownViewer';


const WhatIsHTML = () => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch(whatIsHTML)
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

export default WhatIsHTML;
