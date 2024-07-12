function Button() {
    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         console.log(`${name} you clicked me ${++count} times`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "Ouch! 😫";
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);


    return (<button onClick={(e) => handleClick(e)}>Click me 😁</button>);


}

export default Button