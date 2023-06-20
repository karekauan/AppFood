import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../Modules/Home/Home';
import { RouterProvider } from '../node_modules/react-router/dist/index';
import App from './App.tsx'
import Products from '../Modules/Products/Products'
import { createBrowserRouter } from '../node_modules/react-router-dom/dist/index';

const PageHome = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

const PageProducts = createBrowserRouter([
  {
    path: "/products",
    element: <Products />
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <RouterProvider  router={PageHome} />
        <RouterProvider  router={PageProducts} />

  </React.StrictMode>,
)
