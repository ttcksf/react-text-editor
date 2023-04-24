import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
// 追加でインストールするライブラリ
import draftToHtml from "draftjs-to-html";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  // getCurrentContent()で現在の値を取得できる
  // convertToRawは取得した値をHTMLに変換して保存する
  // draftToHtmlはHTML要素をタグにする
  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  let textToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  return (
    <>
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
        />
      </div>
      <div>
        {/* HTMLに変換するエリア */}
        <textarea rows="30" cols="100" disabled value={textToHtml}></textarea>
      </div>
    </>
  );
};

export default TextEditor;
