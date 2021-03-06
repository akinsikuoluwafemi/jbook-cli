import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import * as esbuild from 'esbuild-wasm';


const App = () => {
  

  useEffect(() => {
    startService();
  }, []);

  const ref = useRef<any>(null)


  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    });
  }

  const onClick = () => {
    if (!ref.current) {
      return;
    }

   const result = await ref.current.transform(input, {
      loader: 'jsx',
      target: 'es2015'
    });
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
