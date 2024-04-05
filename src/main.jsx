import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ErrorPage from "./components/ErrorPage.jsx";
import './index.css'
import PatientPreview from "./components/PatientPreview.jsx";

const router = createBrowserRouter([
    {
        //On va surement mettre la page "lancez vous" ici
        path: "/",
        element: <App />,
        errorElement : <ErrorPage />,
    },
    {
        path :"patients",
        element : <PatientPreview />,
        errorElement: <ErrorPage />
    }
    /*{
        path: "users/:Uid
        element : <UserPage />
    }*/
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
