import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

// export default function Todo() {
//     const [todo, setTodo] = useState("");
//     function handelSubmit(e) {
//         e.preventDefault();
//         console.log(todo);
//     }

//     return (
//         <div>
//             <form onSubmit={handelSubmit}>
//                 <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }

/////////////////////////////// lec 31 , 37 //////////////////////////
export default function Todo() {

    const [todos, setTodos] = useState([]);
    let totalTodos = todos.length;
    let CompletedTodos = todos.filter((todo) => todo.done).length;

    return (
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
            {/* <h1>Completed Todos: {CompletedTodos}</h1> */}

            <Footer CompletedTodos={CompletedTodos} totalTodos={totalTodos} />

        </div>
    );
}
