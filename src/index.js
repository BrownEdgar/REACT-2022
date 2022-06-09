<<<<<<< HEAD
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/Anush/Homework7/App";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom'
import App from './components/Tigran/homework5 router/App'
>>>>>>> c276f5dbc8fcaf91ef75be4f9f319d81cb36a41c

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
