"use client"
import { useState } from "react";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";
import "./App.css";
import Container from "./component/Container";
import InnerContainer from "./component/Innercontainer";
import FoodDetails from "./component/FoodDetails";

function App() {
  const [FoodData, setFoodData] = useState([]);
  const [foodId, setfoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          <FoodList setfoodId={setfoodId} FoodData={FoodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;

