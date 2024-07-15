import { useState, useEffect } from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    var renameTitle = () => {
        document.title = `Count: ${count}`;
    }

    //Set new title on any rerender
    // useEffect(renameTitle); 
    
    //Set new title only on mount
    // useEffect(renameTitle, []); 

    //Set new title only on mount + on count change
    useEffect(renameTitle, [count]); 

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change color</button>

        </div>
    );
}

export default MyComponent