import React, { useEffect, useState } from "react";
import "./App.css";
import CodeEditorCom from "./components/CodeEditor";
import Button from "@mui/material/Button";

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [code, setCode] = useState("");

  const handelFix = () => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer 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",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              inputs: `tell is this code right? : ${code}`,
            }),
          }
        );
        const result = await response.json();
        setResponse(result[0]["generated_text"]);
        console.log(result);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  };

  return (
    <div className="App">
      <div className="CodeContainer">
        <CodeEditorCom setCode={setCode} />
      </div>

      <div className="CodeContainer">
        <Button onClick={handelFix} variant="contained">Fix</Button>

        {error && <p>Error: {error.message}</p>}
        {response && (
          <div>
            <pre>{response}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
