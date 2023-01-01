import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Candidate from "../Pages/Candidate/Candidate";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/candidate/:id",
                element: <Candidate />,
            },
        ],
    },
]);
