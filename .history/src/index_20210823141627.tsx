import 'bulmaswatch/superhero/bulmaswatch.min.css';
import './components/code-editor.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CodeCell from './components/code-cell';



const App = () => {
  
  return (
     <div>
      <CodeCell />
     {/* <CodeCell/> */}
      
    </div>
  )
   
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


