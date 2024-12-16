import style from "./item.module.css"
export default function Item({ item }) {
    return (
        <div>
            <div className={style.itemContainer} >
                <div className={style.itemImage}>
                    <img className={style.image}
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                        alt={item.name}
                    />
                </div>

                <div className={style.nameContainer}>
                    <div className={style.itemName}>{item.name}</div>
                    <div className={style.itemAmount}>{item.amount} {item.unit}</div>
                </div>

            </div>

        </div>
    )
}