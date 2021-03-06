import 'bulmaswatch/superhero/bulmaswatch.min.css';
import './components/code-editor.css';

import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from './bundler';



const App = () => {
  


  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  

  const onClick = async () => {
    
    const output = await bundle(input);
    setCode(output);

    
  };

  
  
  return <div>
    <CodeEditor initialValue="const a = 1"
         onChange={(value) => setInput(value)}
    />
    
    <div>
      <button  onClick={onClick}>Submit</button>
    </div>
    <Preview code={code}  />

  </div>
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


