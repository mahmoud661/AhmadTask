import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function CodeEditorCom(props) {
  const [code, setCode] = useState(``);

  const handelonChange = (evn) => {
    setCode(evn.target.value);
    props.setCode(evn.target.value);
  }

  return (
    <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter your code."
      onChange={handelonChange}
      padding={15}
      style={{
        backgroundColor: "#333333",
        height: "50vh",
        minWidth: "100%",
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
      }}
    />
  );
}
