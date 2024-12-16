import { useState } from "react"
import { useEffect } from "react"
import style from "./foodDetails.module.css"
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
    const [isLoading, setIsLoading] = useState(true)
    const [food, setFood] = useState({});  // '{}' we use this because we have to store as a object 
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    // const API_KEY = "707d2c97ab51440bb56cc2f4b5d381dd"
    const API_KEY = "e82a31e3f80d4a4ca7a75c45a3e2ab05"

    useEffect(() => {
        async function fetchFood() {
            const response = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await response.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();

    }, [foodId]) // we add foodId because we want that if our foodId changes we want to recall the api again...
    return (
        <div>
            <div className={style.recipeCard}>
                <h1 className={style.recipeName}>Food Name:{food.title}</h1>
                <img className={style.recipeImage} src={food.image} alt="" />

                <div className={style.recipeInfo}>
                    <span>
                        <strong>🕒: {food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        👨‍👩‍👧‍👦<strong>Serves {food.servings}</strong>
                    </span>
                    <span>
                        <strong>{food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</strong>
                    </span>
                    <span>
                        <strong>{food.vegan ? "🐄 Vegan" : "🍗 Non-Vegan"}</strong>
                    </span>
                </div>
                <div className={style.recipePrice}>
                    <strong>💲 {food.pricePerServing / 100} Per Serving</strong>
                </div>

                <h2>Ingredients</h2>
                <ItemList food={food} isLoading={isLoading} />

                <h2>Instructions</h2>
                <div className={style.recipeInstructions}>
                    <ol>
                        {isLoading ? <h1>Loading...</h1> : food.analyzedInstructions[0].steps.map((step) => (
                            <li>{step.step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

// import { useEffect } from "react";

// export default function FoodDetails({ foodId }) {
//     const API_KEY = "e82a31e3f80d4a4ca7a75c45a3e2ab05";
//     const URL = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`;

//     useEffect(() => {
//         async function fetchFood() {
//             try {
//                 const response = await fetch(URL);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 console.log(data);
//             } catch (error) {
//                 console.error("Failed to fetch food data:", error);
//             }
//         }
//         fetchFood();
//     }, [URL]);

//     return (
//         <div>FoodDetails: {foodId}</div>
//     );
// }
