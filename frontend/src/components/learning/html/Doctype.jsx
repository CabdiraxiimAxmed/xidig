import SubjectSiteMap from '../SubjectSiteMap';
import doctype from '../../../subjects/html/doctype.md';
import { useEffect, useState } from 'react';
import React from 'react'
import MarkdownViewer from '../MarkdownViewer';

const Doctype = () => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch(doctype)
      .then(res => res.text())
      .then(md => setMarkdown(md));
  }, []);
  return (
    <div className='subject-content-container'>
      <SubjectSiteMap />
      <MarkdownViewer markdown={markdown} />
    </div>
  )
}

export default Doctype
