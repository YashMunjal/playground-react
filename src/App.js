import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import useLocal from './hooks/useLocal'

function App() {
  const [html, setHtml] = useLocal("html","");
  const [css, setCss] = useLocal("css","");
  const [js, setJs] = useLocal("js","");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
    <html>
      <style>${css}</style>
      <body>${html}</body>
      <script>${js}</script>
    </html>
            `
      );
    }, 250);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JavaScript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default App;
