// import Search from "./component/Search"
// import { useState } from "react"
// function App() {

//   const [FoodData, setFoodData] = useState([]);
//   return (
//     <div className="App">
//       <Search FoodData={FoodData} setFoodData={setFoodData} />
//       {FoodData.map((food) => (
//         <h1>{food.title}</h1>
//       ))}
//     </div>
//   )
// }

// export default App

import { useState } from "react";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";
import "./App.css";
import Container from "./component/Container";
import Innercontainer from "./component/InnerContainer";
import FoodDetails from "./component/FoodDetails";

function App() {
  const [FoodData, setFoodData] = useState([]);
  const [foodId, setfoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search setFoodData={setFoodData} />

      <Container>
        <Innercontainer>
          <FoodList setfoodId={setfoodId} FoodData={FoodData} />
        </Innercontainer>
        <Innercontainer>
          <FoodDetails foodId={foodId} />
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;

