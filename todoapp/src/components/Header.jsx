import style from "./header.module.css";
export default function Header() {
    return (
        <div>
            <h1 className={style.header}> My Todo List </h1>
        </div>
    );
}