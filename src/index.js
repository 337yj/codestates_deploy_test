import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import rootRouter from './router';
import "./App.module.css";
import './global-style.module.css';

import dummyTweets from './static/dummyData';

ReactDOM.render(
  <RouterProvider router={rootRouter} dummyTweets={dummyTweets} />,
  document.getElementById('root')
);
