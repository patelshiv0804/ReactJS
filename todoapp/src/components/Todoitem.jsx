import style from "./todoitem.module.css";
export default function TodoList({ item, todos, setTodos }) {
    function handleClick(item) {
        console.log("delete button is pressed for", item);
        setTodos(todos.filter((todo) => todo !== item));  // this update the array after deleting the match item
    }
    function handleDeleteClick(item) {
        console.log("user want to delete the task:", item);
        const newArray = todos.map((todo) => todo.name === item ? { ...todo, done: !todo.done } : todo);
        /// above thing is done for updating the array after deleting sign on the match item
        setTodos(newArray);
        console.log(todos);

    }

    const className = item.done ? style.complited : "";

    return (
        <div className={style.item}>
            <h3 className={style.item_name}>
                <span className={className} onClick={() => handleDeleteClick(item.name)}>{item.name}</span>
                <span>
                    <button onClick={() => handleClick(item)} className={style.deleteButton}>X</button>
                </span>
            </h3>
            <hr className={style.line} />
        </div>
    );
} 