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
          // 最小限のツールバーのみ表示
          // toolbar={{
          //   options: ["inline", "blockType"],
          // }}
          // ツールバーの表記を日本語にする
          // localization={{
          //   locale: "ja",
          // }}
          // プレースホルダーの文章
          // placeholder="ここに入力してください"
          // メンションの設定
          mention={{
            separator: " ",
            trigger: "@",
            suggestions: [
              { text: "田中太郎", value: "田中太郎", url: "tanakataro" },
              { text: "山田花子", value: "山田花子", url: "yamadahanako" },
              { text: "鈴木順平", value: "鈴木順平", url: "suzukijunpei" },
            ],
          }}
          // ハッシュタグの有効化
          // hashtag={{
          //   separator: " ",
          //   trigger: "#",
          // }}
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
