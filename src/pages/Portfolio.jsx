

export default function PortfolioPage() {
    return (
<div>
        <h1 className="text-center">Portfolio</h1>
        
    <div className="d-flex flex-row justify-content-around">
        <div className="portdiv text-center">
            <img src="./../../../assets/placeholder_template.jpg" width="350px" length="500px" alt="placeholder"></img>
            <h2 className="text-center">Weekly Planner</h2>
        </div>

        <div className="portdiv text-center">
            <img src="./../../../assets/placeholder_template.jpg" width="350px" length="500px" alt="placeholder"></img>
            <h2 className="text-center">AJU Landing Page</h2>
        </div>    
    </div>
    <div className="d-flex flex-row justify-content-around">
        <div className="portdiv text-center">
            <img src="./../../../assets/placeholder_template.jpg" width="350px" length="500px" alt="placeholder"></img>
            <h2 className="text-center">Week Weather Forecast</h2>
        </div>

        <div className="portdiv text-center">
            <img src="./../../../assets/placeholder_template.jpg" width="350px" length="500px" alt="placeholder"></img>
            <h2 className="text-center">Automobile Node JS</h2>
        </div>
    </div>
    <div className="d-flex flex-row justify-content-around">
        <div className="portdiv text-center">
            <img src="./../../../assets/placeholder_template.jpg" width="350px" length="500px" alt="placeholder"></img>
            <h2 className="text-center">Node JS ReadME Creator</h2>
        </div>    

        <div className="portdiv text-center">
            <img src="./../../../assets/placeholder_template.jpg" width="350px" length="500px" alt="placeholder"></img>
            <h2 className="text-center">Flexbox Cheat Sheet</h2>
        </div>
    </div>
</div>
);
}