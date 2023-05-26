import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Error from './components/Error/Error.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import AuthProvider from './Provider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css'
import ChefDetails from './components/ChefDetails/ChefDetails';
import PrivateRoute from './Private/PrivateRoute';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    errorElement : <Error></Error>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/chef-recipes/:id',
        element : <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader : ({params}) => fetch(`https://chef-table-bd-server-pitamchandra.vercel.app/chef/${params.id}`)
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
