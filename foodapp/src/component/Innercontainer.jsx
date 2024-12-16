import style from "./innercontainer.module.css";
export default function Innercontainer({ children }) {
    return (
        <div className={style.innercontainer}>{children}</div>
    )
}