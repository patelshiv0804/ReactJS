import { useState } from "react";
import style from "./form.module.css";

export default function Form({ todos, setTodos }) {

    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({ name: "", done: false });

    function handelSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]) /////// '...todos' is spread operator it is used for merging the array by keeping the previous item remains there
        setTodo({ name: "", done: false })               ///// this is for clearing the input field when user submit the form
    }
    return (
        <form className={style.todoform} onSubmit={handelSubmit}>
            <div className={style.form_group}>
                <input className={style.Input}
                    onChange={(e) => setTodo({ name: e.target.value, done: false })}
                    value={todo.name}
                    placeholder="Enter your todo"
                    type="text" />
                <button className={style.Button}>Add</button>
            </div>
        </form>
    )
}
