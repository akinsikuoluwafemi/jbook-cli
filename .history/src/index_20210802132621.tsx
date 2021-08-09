import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>
    <textarea></textarea>
    <div>
      <button>Submit</button>
    </div>
    <pre></pre>

  </div>
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
