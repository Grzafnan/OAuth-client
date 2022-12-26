import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Main from "../layout/Main";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/SignUp/SignUp";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }


    ]
  }
]);