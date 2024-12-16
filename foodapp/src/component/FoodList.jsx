// import Fooditem from "./Fooditem";

// export default function FoodList({ FoodData }) {
//     return (
//         <>
//             {
//                 FoodData.map((food) => (
//                     <Fooditem key={food.id} food={food} />
//                 ))
//             }
//         </>
//     );
// }

import Fooditem from "./Fooditem";

export default function FoodList({ FoodData, setfoodId }) {
    return (
        <>
            {
                FoodData.map((food) => (
                    <Fooditem setfoodId={setfoodId} key={food.id} food={food} />
                ))
            }
        </>
    );
}
