import { useState, useEffect } from "react";

export default function Name(){

    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimationDone(true);
        }, 1200); // 1.2s = 1200ms
    }, []);

    function generateLines(){
        const linesCount = 100;
        const line = [];
        const colors = ["red", "black", "blue", "yellow"];
        const delay = [ 1000,1200,1300,1500,900,800,650,900];
        for(let i = 0; i < linesCount; i++){
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomDelay = delay[Math.floor(Math.random() * delay.length)];
            line.push(<div key={i} className="lines" style={{ backgroundColor: randomColor, animationDelay: `${randomDelay}ms` }}></div>);
        }
        return line;
    }

    return(
        <>
            {animationDone?
            <>
                <div className="background-letter">
                    <div className="lines-container">
                        {generateLines()}
                    </div>
                    <div className="background-y">Y</div>
                </div>
                
            </>:
                <name>         
                <div className="letter">A</div>
                <div className="letter">R</div>
                <div className="main">Y</div>
                <div className="letter">A</div>
                <div className="letter">N</div>
                </name>
            }
        </>
    )
}