import 'bulmaswatch/superhero/bulmaswatch.min.css';
import './components/code-editor.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
import { Provider } from 'react-redux';




const App = () => {
  
  return (
     <div>
      {/* <CodeCell /> */}
      <TextEditor/>
      
    </div>
  )
   
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


