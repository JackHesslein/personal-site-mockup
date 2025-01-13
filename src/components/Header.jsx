import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className="containter-fluid d-flex flex-row pt-3">
                <h1 className="container-sm d-flex fw-bold">Jack Hesslein</h1>
                <nav>
                    <ul className="d-flex flex-row justify-content-end list-unstyled">
                        <li className="px-4">
                            <Link className="text-decoration-none fs-4" to="/">About</Link>
                        </li>
                        <li className="px-4"> 
                            <Link className="text-decoration-none fs-4" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="px-4">
                            <Link className="text-decoration-none fs-4" to="/contact">Contact</Link>
                        </li>
                        <li className="px-4">
                            <Link className="text-decoration-none fs-4" to="/resume">Resume</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    );
}
