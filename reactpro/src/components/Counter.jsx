import { useState } from "react";

///////////////// lec 23 (state using function) //////////////

// export default function Counter() {

//     const [count, setCount] = useState(0);    // useState(0) set the 0 value for initialize it

//     function Handleclick() {
//         setCount(count + 1);
//     }

//     function HandleDecrement() {
//         setCount(count - 1);
//     }

//     return <div>
//         <h1>Count value is:{count} </h1> <br />
//         <button onClick={Handleclick}>Increment</button>
//         <button onClick={HandleDecrement}>Decrement</button>
//     </div>
// }

//////////////// lec 24 ( multiple state variable) /////////////////

export default function Counter() {

    const [count, setCount] = useState(0);    // useState(0) set the 0 value for initialize it
    const [Increment, setIncrementBy] = useState(1); // useState(1) set the 1 value for initialize it

    function Handleclick() {
        setCount(count + Increment);
    }

    function HandleDecrement() {
        setCount(count - Increment);
    }

    function IncrementBy() {
        setIncrementBy(Increment + 1);
    }

    function DecrementBy() {
        setIncrementBy(Increment - 1);
    }

    return <div>
        <h1>Count value is:{count} </h1> <br />
        <button onClick={Handleclick}>Increment</button>
        <button onClick={HandleDecrement}>Decrement</button>

        <h1>Increment by value:{Increment}</h1>
        <button onClick={IncrementBy}>Increment</button>
        <button onClick={DecrementBy}>Decrement</button>
    </div>
}

