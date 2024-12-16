import style from "./footer.module.css";
export default function Footer({ CompletedTodos, totalTodos }) {
    return (
        <div className={style.footer}>
            <span className={style.footer_text} >Completed Todos:{CompletedTodos}</span>
            <span className={style.footer_text} >Total Todos:{totalTodos}</span>
        </div>
    );
}