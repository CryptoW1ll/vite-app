import {useState, useEffect} from "react";

export default function Incremeter()
{
    const [count, setCount] = useState(0);     

    // React Hook useEffect: run side effect! (actions that run outside of UI) / respond to changes
    useEffect(() => {
        // the code we want to run
        console.log("The count is: ", count);
        
        // Optional return function / clean up function
        return () => {
            console.log("I am being cleaned up!");
        }
    }, [count]); // the dependency array

    return (
        <div className="incremeter">
            <h1>Count: {count}</h1>
            <button onClick={() => setCount (count - 1)}>Decrement</button> 
            <button onClick={() => setCount (count + 1)}>Increment</button>
        </div>
    );
}