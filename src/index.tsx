import React from 'react';
import ReactDOM from 'react-dom/client';
import Inputs from './App';
import Datatable from './Datatable';
import "./styles/index.css"
import "./styles/App.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Inputs/>
    <Datatable Api={[]}/>
  </React.StrictMode>
);
