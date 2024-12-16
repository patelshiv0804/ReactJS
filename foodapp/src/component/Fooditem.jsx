import style from "./fooditem.module.css"
// export default function Fooditem({ food }) {

//     return (
//         <div className={style.container}>
//             <img className ={style.image} src={food.image} alt="" />
//             <div className={style.content} >
//                 <p>{food.title}</p>
//                 <button className={style.button}>View Recipe</button>
//             </div>
//         </div>
//     );
// }

export default function Fooditem({ food, setfoodId }) {

    return (
        <div className={style.container}>
            <img className={style.image} src={food.image} alt="" />
            <div className={style.content}>
                <p>{food.title}</p>
                <button onClick={() => {
                    // console.log(food.id)
                    setfoodId(food.id)
                }}
                    className={style.button}>View Recipe</button>
            </div>
        </div>
    );
}