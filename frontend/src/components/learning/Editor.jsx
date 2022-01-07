import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-solarized_dark';
const Editor = () => {
  function onChange(value) {
    console.log('value ', value);
    const codeView = document.querySelector(".code-view").contentWindow.document;
    codeView.open();
    codeView.write(value)
    codeView.close();

  }
  return (
    <div className='editor-and-view-container'>
      <AceEditor
      mode="html"
      theme="github"
      onChange={onChange}
      name="editor"
      editorProps={{ $blockScrolling: true }}
      />
      <iframe className='code-view'></iframe>
    </div>
  );
};

export default Editor;
