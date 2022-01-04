import React from 'react';
import SubjectSiteMap from '../SubjectSiteMap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import whatIsHTML from '../../../subjects/html/whatIsHTML.md';
import { useEffect, useState } from 'react';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

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
      <div className="markdown-container">
        {markdown && (
          <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={twilight}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default WhatIsHTML;
