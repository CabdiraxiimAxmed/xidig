import Button from '../Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { answer, clearAnswer } from '../../features/answer';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
const AnswerForm = () => {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);
  const [markdownContentEditor, setMarkdownContentEditor] = useState(null);
  function handleTextArea(e) {
    setMarkdownContentEditor(e.target.value);
  }

  async function sendAnswerData(e) {
    e.preventDefault();

    const data = {
      answer: markdownContentEditor,
      username: user.username,
      questionId,
    };
    try {
      await axios.post(`/suaal/${questionId}`, data);
      dispatch(
        answer({
          answer: data.answer,
          username: data.username,
          questionId,
          comments: [],
          likes: 0,
          avatar: user.avatar,
        })
      );
    } catch (e) {
      console.log(e);
    }
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
    <>
      <form className="question-form-container answer-form">
        <div>
          <label>Jawaabta</label>
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
            ></textarea>
            <div className="html-markdown-view">
              {<ReactMarkdown children={markdownContentEditor} />}
            </div>
          </div>
        </div>

        <Button
          text="Gudbi"
          stylingClass="question-form-submit answer-form-submit"
          handleClick={e => sendAnswerData(e)}
        />
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default AnswerForm;
