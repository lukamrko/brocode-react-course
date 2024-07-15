import { useState, useEffect } from 'react'

function BrowserSize() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    var addEventListener = () => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTERENR ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Removed event listener");
        }
    };

    useEffect(addEventListener, []);

    useEffect(()=>{
        document.title=`Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    );
}

export default BrowserSize