import 'bulmaswatch/superhero/bulmaswatch.min.css';
import './components/code-editor.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import CodeCell from './components/code-cell';
import { Provider } from 'react-redux';
import { store } from './state';
import TextEditor from './components/text-editor';







const App = () => {
  
  return (
    <Provider>

    </Provider>
     
  )
   
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


