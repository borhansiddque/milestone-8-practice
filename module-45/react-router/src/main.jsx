import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Mobiles from './components/Mobiles/Mobiles';
import Laptops from './components/Laptops/Laptops';
import Monitors from './components/Monitors/Monitors';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {path: 'monitors', Component: Monitors},
    ]
  },
  // {
  //   path: 'about',
  //   element: <div className='text-2xl font-semibold bg-red-500 text-gray-300 inline-block p-5 rounded-2xl'>Hello From About Page</div>
  // },
  // {
  //   path: 'contact',
  //   element: <div className='text-2xl font-semibold bg-white text-gray-700 inline-block p-5 rounded-2xl'>Contact With Us - 01730121460</div>
  // },
  // {
  //   path: 'app',
  //   Component: App
  // },
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
