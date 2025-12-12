import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home';
import Product from './Pages/Product';
import RegistrationUsingHooks from './Pages/RegistrationUsingHooks';
import RegistrationWithoutHooks from './Pages/RegistrationWithoutHooks';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/registrationhooks",
        element: <RegistrationUsingHooks></RegistrationUsingHooks>,
      },
       {
        path: "/registration",
        element: <RegistrationWithoutHooks></RegistrationWithoutHooks>,
      },
      {
        path: "*",
        element: <div><h1>404 Page Not Found. Please check your URL</h1></div>, 
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
