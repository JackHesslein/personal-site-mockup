import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import AboutPage from './pages/about';
import ErrorPage from './pages/error';
import PortfolioPage from './pages/portfolio';
import ResumePage from './pages/resume';
import ContactPage from './pages/contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AboutPage />
            },
            {
                path: '/portfolio',
                element: <PortfolioPage />
            },
            {
                path: '/resume',
                element: <ResumePage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);