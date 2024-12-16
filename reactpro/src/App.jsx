import Hello from './components/Hello';
// import Fruits from './components/Fruits';
// import Conditional from './components/Conditional';
// import Message from './components/Message';
// import Counter from './components/Counter';
import Form1 from './components/Form1';

// function App() {
//   return <div className="App">Hello world
//     <Hello />
//   </div>;
// }

/////////////////////// lec 9 /////////////////////
// function App() {
//   return <div className="App">
//     <Hello name="shiv" message="what's up" />
//     <Hello name="akhil" message="Hello....." emoji="👋" /> </div>;
// }

/////////////////////// lec 10 /////////////////////

// function App() {
//   const seatNumber = [1, 2, 3, 4]
//   return <div className="App">
//     <Hello name="shiv" message="what's up" />
//     <Hello name="akhil" message="Hello....." emoji="👋" seatnumber={seatNumber} /> </div>;
// }

// function App() {
//   return (
//     <div className="App">
//       <Hello name="shiv"  message="what's up" />
//       <Hello name="akhil" message="Hello....."  emoji="👋" seatNumbers={[1, 2, 3, 4]} />
//     </div>
//   )
// }


// function App() {
//   // person object 
//   const person = {
//     name: "shiv",
//     message: "hi there",
//     emoji: "👋",
//     seatNumbers: [1, 2, 3, 4],
//   };

//   // passing the person object as props
//   return (
//     <div className="App" >
//       <Hello person={person} />
//     </div>
//   );

// }

/////////////////////// lec 13 /////////////////////

// function App() {
//   return (
//     <div className="App">
//       <Fruits />
//     </div>
//   );
// }

////////////////////// lec 16 ////////////////////

// function App() {
//   return (
//     <div className="App">
//       <Conditional />
//     </div>
//   );
// }

///////////////////// lec 19 - 20////////////////////

// function App() {
//   return (
//     <div className="App">
//       <Fruits />
//     </div>
//   );
// }

///////////////////// lec 21 (Event handling )////////////////////

// function App() {
//   return (
//     <div className="App">
//       <Message />
//     </div>
//   )
// }

///////////////////////// lec 22 //////////////////////////

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   )
// }

/////////////////////// lec 25 ( handling input field) ////////////////////////

function App() {
  return (
    <div className="App">
      <Form1 />
    </div>
  )
}

export default App
