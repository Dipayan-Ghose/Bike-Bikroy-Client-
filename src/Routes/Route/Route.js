import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Products from "../../Pages/Products/Products";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const route= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }



        ]
    }

])