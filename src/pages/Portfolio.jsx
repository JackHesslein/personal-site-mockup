import { Link } from "react-router-dom";

function weeklyPlannerClick() {
    window.open('https://jackhesslein.github.io/weekly-planner/');
}

function ajuMockClick() {
    window.open('https://jackhesslein.github.io/all-jakked-up-mockup/');
}

function weatherAppClick() {
    window.open('https://zero9-challenge.onrender.com');
}

function vehicleClick() {
    window.open('https://github.com/JackHesslein/vehicle-creator-and-controller');
}

function readmeClick() {
    window.open('https://github.com/JackHesslein/readme-creator');
}

export default function PortfolioPage() {
    return (
        <main>
            <div className="portfolioDiv">
                <h1 className="text-center">Portfolio</h1>

                <div className="d-flex flex-row justify-content-around" >
                    <figure className="portIMG portdiv text-center" onClick={weeklyPlannerClick}>
                        <img src="./../../assets/pexels-thngocbich-636246.jpg" width="350px" length="500px" alt="placeholder" href=""></img>
                        <h2 className="text-center">Weekly Planner</h2>
                    </figure>

                    <figure className="portIMG portdiv text-center" onClick={ajuMockClick}>
                        <img src="./../../assets/pexels-seej-nguyen-249333-755416.jpg" width="350px" length="500px" alt="placeholder" href="https://jackhesslein.github.io/all-jakked-up-mockup/"></img>
                        <h2 className="text-center">AJU Landing Page</h2>
                    </figure>
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <div className="portIMG portdiv text-center" onClick={weatherAppClick}>
                        <img src="./../../assets/pexels-pixabay-76969.jpg" width="350px" length="500px" alt="placeholder"></img>
                        <h2 className="text-center">Week Weather Forecast</h2>
                    </div>

                    <div className="portIMG portdiv text-center" onClick={vehicleClick}>
                        <img src="./../../assets/pexels-albinberlin-919073.jpg" width="350px" length="500px" alt="placeholder"></img>
                        <h2 className="text-center">Automobile Node JS</h2>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <div className="portIMG portdiv text-center" onClick={readmeClick}>
                        <img src="./../../assets/pexels-romka-977155-2034373.jpg" width="350px" length="500px" alt="placeholder"></img>
                        <h2 className="text-center">Node JS ReadME Creator</h2>
                    </div>

                    <div className="portIMG portdiv text-center">
                        <img src="./../../assets/pexels-karolina-grabowska-4498152.jpg" width="350px" length="500px" alt="placeholder"></img>
                        <h2 className="text-center">Flexbox Cheat Sheet</h2>
                    </div>
                </div>
            </div>
        </main>
    );
}