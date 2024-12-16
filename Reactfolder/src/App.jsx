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

// function App() {
//     function reducer(state, action) {
//         if (action.type === "add") {
//             return { ...state, balance: state.balance + action.payload }
//         }
//         if (action.type === "remove") {
//             const final_balance = state.balance - action.payload
//             if (final_balance < 0) {
//                 { alert("Insufficient balance") }
//                 return state;
//             }
//             else {
//                 return { ...state, balance: state.balance - action.payload }
//             }
//         }
//     }
//     const [state, dispatch] = useReducer(reducer, { balance: 0 });
//     const [amount, setAmount] = useState(0);
//     return (
//         <div>
//             {state.balance}
//             <input type="text" onChange={(e) => setAmount(Number(e.target.value))} value={amount} />
//             <button onClick={() => dispatch({ type: "add", payload: Number(amount) })}>Deposit</button>
//             <button onClick={() => dispatch({ type: "remove", payload: Number(amount) })}>Withdraw</button>
//         </div>
//     )
// }

// lec - 70 ( React router v6 )
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Nav from './Nav'

// function App() {
//     return (
//         <BrowserRouter>
//             <Nav />
//             <Routes>
//                 <Route path="/" element={<Homepage />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="*" element={<PageNotFound />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// lec - 72 ( nested routes )
import Profile from './pages/Profile'
import Settings from './pages/Settings'
function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} >
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
