import { useState } from "react"
import { useEffect } from "react"
import style from "./search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
// const API_KEY = "707d2c97ab51440bb56cc2f4b5d381dd"
const API_KEY = "e82a31e3f80d4a4ca7a75c45a3e2ab05"


export default function Search({ FoodData, setFoodData }) {
    const [query, SetQuery] = useState("pizza")
    // use effect hook first one is "call back function" and second one is "dependency array"
    // useEffect( () => {} , [])

    // useEffect(() => {
    //     function Demo(){
    //         console.log("hello")
    //     }
    //     Demo();
    // }, [])

    // if we want that if our user changes the input then our function will call then...
    // useEffect(() => {
    //     function Demo() {
    //         console.log("hello")
    //     }
    //     Demo();
    // }, [query])

    // --------- making the api call ------------
    useEffect(() => {
        async function fetchFood() {

            const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await response.json();
            // console.log(data)
            // console.log(data.results)
            setFoodData(data.results);
        }
        fetchFood();
    }, [query])

    return (
        <div>
            <input className={style.container} value={query}
                onChange={(e) => SetQuery(e.target.value)}
                type="text" />
        </div>
    )
}
