import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Client } from "../pages/Client";

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/client',
        element: <Client />
    }

])