import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import router from "./routes";


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} >
        <StrictMode>
            <App />
        </StrictMode>
    </RouterProvider>
    ,
)
