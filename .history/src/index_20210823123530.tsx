import 'bulmaswatch/superhero/bulmaswatch.min.css';
import './components/code-editor.css';

import ReactDOM from 'react-dom';
import CodeCell from './components/code-cell';



const App = () => {
  


  

  
  
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


