import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Client } from "../pages/Client";
import { Auth } from "../pages/Auth";
import { Registration } from "../pages/Registration";
import { Fermer } from "../pages/Fermer";

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/client',
        element: <Client />
    },
    {
        path: '/authorization',
        element: <Auth />
    },
    {
        path: '/registration',
        element: <Registration />
    },
    {
        path: '/fermer',
        element: <Fermer/> 
    }

])