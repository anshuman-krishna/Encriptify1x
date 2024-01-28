import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import SenderPage from './components/SenderPage';
import ReceiverPage from './components/ReceiverPage';

const router=createBrowserRouter([{
  path:"/",
  element:<HomePage/>
},
 { path:"sender",
    element:<SenderPage/>
},
{
  path:"receiver",
  element:<ReceiverPage/>
}
])


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
