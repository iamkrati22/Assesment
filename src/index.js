import Event from "./routes/Event";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path = "event" element = {<Event />}></Route>
  </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
