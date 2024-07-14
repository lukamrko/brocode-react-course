import { useState } from 'react'

function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(f => f.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>{foods.map((food, index) =>
                <>
                    <li key={index}>{food}</li>
                    <button onClick={() => handleRemoveFood(index)}></button>
                </>
            )}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    );
}

export default MyComponent