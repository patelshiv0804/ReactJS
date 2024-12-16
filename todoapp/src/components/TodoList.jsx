import Todoitem from "./Todoitem";
import style from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
    const sortedTodos = todos.slice().sort((a, b) => a.done - b.done);
    return (
        <div className={style.todoitem}>
            {sortedTodos.map((item) => (
                <Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    );
}