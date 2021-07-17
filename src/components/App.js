import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
var hiddenElement = document.getElementById('test1');
hiddenElement.href = 'data:attachment/text,' + encodeURI([html]);
hiddenElement.target = '_blank';
hiddenElement.download = 'index.html';
var hiddenElement = document.getElementById('test2');
hiddenElement.href = 'data:attachment/text,' + encodeURI([css]);
hiddenElement.target = '_blank';
hiddenElement.download = 'index.css';
var hiddenElement = document.getElementById('test3');
hiddenElement.href = 'data:attachment/text,' + encodeURI([js]);
hiddenElement.target = '_blank';
hiddenElement.download = 'index.js';
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
   
      <div className="pane top-pane">
      <img src="https://bookface-images.s3.amazonaws.com/logos/7e69eded1f41ba6345f75227e93c32d796e51060.png" alt="Dyte Logo" width="170" height="80" class="dyte"></img>
      <div class="select">
      <select name="slct" id="size_select">
      <option selected disabled>Choose a file</option>
        <option value="option1"> HTML  </option>
        <option value="option2"> CSS  </option>
        <option value="option3"> JS  </option>        
      </select>
      </div>
      
      <div id="option1" class="size_chart">
      <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
      </div>
      <div id="option2" class="size_chart">
      <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </div>
      <div id="option3" class="size_chart">
      <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      </div>

      <link href='//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css' rel='stylesheet'/>
      <div class="whitebuttondemo"> <a id='test1'>Download HTML</a>   <span class="up">click to Download</span> </div>
      <div class="whitebuttondemo"> <a id='test2'>Download CSS</a>  <span class="up">click to Download</span> </div>
      <div class="whitebuttondemo"> <a id='test3'>Download JS</a>  <span class="up">click to Download</span> </div>

      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}
export default App;
