import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './Features/global/components/errors/ErrorPage.tsx';
import HomePage from './Features/global/pages/HomePage.tsx';
import SignUp from './Features/users/pages/SignUp.tsx';


const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/home",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/home/signup",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    }
    ]
  }]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
