import Button from './Button';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
const AskQuestion = () => {
  const { username } = useParams();
  const [markdownEditorContent, setMarkdownEditorContent] = useState(null);
  const [tagString, setTagString] = useState(null);
  const [questionName, setQuestionName] = useState(null);
  function handleTextArea(e) {
    setMarkdownEditorContent(e.target.value);
  }
  function handleQuestionInput(e) {
    setQuestionName(e.target.value);
  }
  function handleTagInput(e) {
    setTagString(e.target.value);
  }
  async function sendQuestionData(e) {
    e.preventDefault();
    let data = {};
    let tags = null;
    if (tagString) tags = tagString.split(' ');
    /**
     * question content @markdownEditorContent
     * question name  @questionName
     * user name  @username
     * tags
     */
    data = { question: markdownEditorContent, questionName, username, tags };
    console.log(data);
    const response = await axios.post('/suaal', data);
    console.log(response.data);
  }
  function markdownEditorButtons(e) {
    e.preventDefault();
    if (e.target.className.includes('active')) {
      e.target.classList.add('active');
    } else {
      const btns = document.querySelectorAll('.markdown-menu-btn');
      btns.forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
    }
    if (e.target.innerHTML === 'Qor') {
      document.querySelector('.markdown-editor').style.display = 'block';
      document.querySelector('.html-markdown-view').style.display = 'none';
    } else {
      document.querySelector('.markdown-editor').style.display = 'none';
      document.querySelector('.html-markdown-view').style.display = 'block';
    }
  }
  return (
    <form className="question-form-container">
      <div>
        <label>magaca su,aasha</label>
        <input
          type="text"
          onChange={e => handleQuestionInput(e)}
          spellCheck="false"
        />
      </div>
      <div>
        <label>su,aasha</label>
        {/* TODO: add the icons */}
        <div className="markdown-wrapper">
          <div className="markdown-menu">
            <Button
              text="Qor"
              stylingClass="markdown-menu-btn active"
              handleClick={markdownEditorButtons}
            />
            <Button
              text="Daawo"
              stylingClass="markdown-menu-btn"
              handleClick={markdownEditorButtons}
            />
          </div>
          <textarea
            className="markdown-editor"
            onChange={e => handleTextArea(e)}
            spellCheck="false"
          ></textarea>
          <div className="html-markdown-view">
            <ReactMarkdown children={markdownEditorContent} />
          </div>
        </div>
      </div>
      <div>
        <label>Tag</label>
        <input
          type="text"
          spellCheck="false"
          className="tag"
          onChange={e => handleTagInput(e)}
        />
      </div>
      <Button
        text="Gudbi"
        stylingClass="question-form-submit"
        handleClick={e => sendQuestionData(e)}
      />
    </form>
  );
};

export default AskQuestion;
