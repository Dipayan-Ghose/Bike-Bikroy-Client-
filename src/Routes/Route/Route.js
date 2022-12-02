import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Main/Main";
import Products from "../../Pages/Products/Products";

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
                element: <Products></Products>
            }



        ]
    }

])