import { useReducer } from 'react'
import { useState } from 'react'




// lecture - 65 (UseReducer) 
// function App() {
//   const [count, setCount] = useState(0)
//   const [state, dispatch] = useReducer(reducer, 0)
//   // useReducer returns the two 
//   function reducer(state, action) {
//     if (action.type === "increment") {
//       return state + action.payload
//     }
//     if (action.type === "decrement") {
//       return state - action.payload
//     }
//   }

//   return (
//     <div>
//       Use State: {count}
//       <button onClick={() => setCount(count + 1)}> Increment</button>
//       <button onClick={() => setCount(count - 1)}> Decrement</button> <br />
//       Use Reducer:{state}
//       <button onClick={() => dispatch({ type: "increment", payload: 4 })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Decrement</button>
//     </div>
//   )
// }


// Lecture - 66  (using object as state in useReducer)
// function App() {
//   const [count, setCount] = useState(0)
//   const [state, dispatch] = useReducer(reducer, { count: 0 })

//   function reducer(state, action) {
//     if (action.type === "increment") {
//       return { ...state, count: state.count + action.payload } //state + action.payload
//     }
//     if (action.type === "decrement") {
//       return { ...state, count: state.count - action.payload } //state - action.payload
//     }
//   }

//   return (
//     <div>
//       Use Reducer:{state.count}
//       <button onClick={() => dispatch({ type: "increment", payload: 4 })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Decrement</button>
//     </div>
//   )
// }

// lecture - 67 (using complex object as state in useReducer)

// function App() {
//     const [state, dispatch] = useReducer(reducer, { count: 0, incrementedBY: 1 })

//     function reducer(state, action) {
//         if (action.type === "increment") {
//             return { ...state, count: state.count + state.incrementedBY }
//         }
//         if (action.type === "decrement") {
//             return { ...state, count: state.count - state.incrementedBY }
//         }
//         if (action.type === "setIncrement") {
//             return { ...state, incrementedBY: action.payload }
//         }
//     }

//     return (
//         <div>
//             Use Reducer:{state.count}
//             <input onChange={(e) => dispatch({ type: "setIncrement", payload: Number(e.target.value) })} value={state.incrementedBY} type="text" />
//             <button onClick={() => dispatch({ type: "increment", payload: 4 })}>Increment</button>
//             <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Decrement</button>
//         </div>
//     )
// }

// lec - 68 ( bank account management using useReducer)

function App() {
    // const [state, dispatch] = useReducer(reducer, { balance: 0 });

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )


}

export default App
