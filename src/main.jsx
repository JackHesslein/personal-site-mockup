import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import AboutPage from './pages/About';
import ErrorPage from './pages/Error';
import PortfolioPage from './pages/Portfolio';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Contact';

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