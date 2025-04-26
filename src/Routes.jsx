import { createBrowserRouter } from "react-router";
import App from './App'
import Details from "./components/Details";

const router=createBrowserRouter([
    {
        path:'/',
        element: <App></App>
    },{
        path:'/details',
        element:<Details></Details>
    }
])

export default router