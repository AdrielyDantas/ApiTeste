import { createBrowserRouter } from "react-router";
import FirstPage from "./pages/first.jsx";
import AfterPage from './pages/after.jsx';

export const routesSystem = createBrowserRouter([
    {
        path: '/',
        Component: FirstPage,
    },
    {
        path: '/sobre/:idDoPerson',
        Component: AfterPage,
    }
])