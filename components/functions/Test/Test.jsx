import { useState } from "react";

export default function Test() {
    const [count, setCount] = useState("hello");

    const incrementCount = () => {

        return setCount("sayonara")
    }

    const decrementCount = () => {
        
        return setCount("goodbye")
    }

    return (
        <div>
            <button onClick={incrementCount}>Increment</button>
            <p>{count}</p>
            <button onClick={decrementCount}>Decrement</button>            
        </div>
    )
}