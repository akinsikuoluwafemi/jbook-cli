import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free'
import './components/code-editor.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import CodeCell from './components/code-cell';
import { Provider } from 'react-redux';
import { store } from './state';
import TextEditor from './components/text-editor';
import CellList from './components/cell-list';








const App = () => {
  
  return (
    <Provider store={store}>
        <div>
          <CellList/>
       </div>
    </Provider>
     
  )
   
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


