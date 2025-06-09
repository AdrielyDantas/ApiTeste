import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import {routesSystem} from './routs';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routesSystem}/>
    </StrictMode>
)