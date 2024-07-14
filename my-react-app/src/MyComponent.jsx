import {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Mrki");
    };

    const incrementAge = () => {
        setAge(age+1);
    };

    const toggleEmpolyedState = () => {
        setIsEmployed(!isEmployed);
    };


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>IncrementAge</button>
        
            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmpolyedState}>Toggle employed state</button>
        </div>

    );

}

export default MyComponent