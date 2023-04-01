import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/pages/Home/Home';
import "./index.css"
import Layout from './components/layout/layout';
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout>
        <Home/>
      </Layout>
    </React.StrictMode>
  </BrowserRouter>
);


