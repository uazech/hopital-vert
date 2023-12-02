import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import Situation from "./components/situation/Situation";
import Question from "./components/question/Question";
import Explication from "./components/explication/Explication";
import Fin from "./components/fin/Fin";
import {Admin} from "./components/admin/Admin";
import Bilan from "./components/bilan/Bilan";
import Credits from "./components/credits/Credits";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/situation",
        element: <Situation/>
    },
    {
        path: "/bilan",
        element: <Bilan/>
    },
    {
        path: "/question/:number",
        element: <Question/>
    },
    {
        path: "/explication/:number",
        element: <Explication/>
    },
    {
        path: "/fin",
        element: <Fin/>
    },
    {
        path: "/credits",
        element: <Credits/>
    },
    {
        path: "/admin",
        element: <Admin/>
    },
]);