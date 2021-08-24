import 'bulmaswatch/superhero/bulmaswatch.min.css';
import * as esbuild from 'esbuild-wasm';
import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';
import CodeEditor from './components/code-editor';
import './components/code-editor.css';


const App = () => {
  

  useEffect(() => {
    startService();
  }, []);

  const ref = useRef<any>(null)


  const [input, setInput] = useState('');

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    });
  }

  const onClick = async () => {
    if (!ref.current) {
      return;
    }


    
    // console.log(result);

    // setCode(result.outputFiles[0].text);
    iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*');

    
  };

  
  
  return <div>
    <CodeEditor initialValue="const a = 1"
      onChange={(value) => setInput(value)}
    />
    <textarea value={input} onChange={e => setInput(e.target.value)}>

    </textarea>
    <div>
      <button  onClick={onClick}>Submit</button>
    </div>
    <iframe title="preview" ref={iframe} sandbox="allow-scripts" srcDoc={html} />

  </div>
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


