import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import * as esbuild from 'esbuild-wasm';


const App = () => {
  
  useEffect(() => {
    start
  }, []);


  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    });
    console.log(service);
  }

  const onClick = () => {
    console.log(input)
  }
  
  return <div>
    <textarea value={input} onChange={e => setInput(e.target.value)}>

    </textarea>
    <div>
      <button onClick={onClick}>Submit</button>
    </div>
    <pre>{ code}</pre>

  </div>
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
