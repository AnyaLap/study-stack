import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GamePage } from './pages/GamePage';
import { NotFound } from './pages/NotFound/NotFound';
import App from './App';
import './index.css'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {path: '', element: <HomePage /> },
      {path: 'game', element: <GamePage /> }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
