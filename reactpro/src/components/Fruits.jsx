///////////// lec 13 (renderin array or list in react) /////////
// export default function Fruits() {
//     const fruits = ['apple', 'banana', 'mango'];
//     return <div>
//         {fruits.map((fruit => (
//             <li key={fruit}> {fruit} </li>
//         )))
//         }
//     </div>
// }

///////////// lec 14 (array of objects) ///////////////
// export default function Fruits() {
//     // it is the array of objects
//     const fruits = [
//         { name: 'apple', price: 10, emoji: '🍎' },
//         { name: 'banana', price: 20, emoji: '🍌' },
//         { name: 'mango', price: 30, emoji: '🥭' },
//         { name: 'kiwi', price: 40, emoji: '🥝' },
//     ];

//     return (
//         <ul>
//             {fruits.map(fruit =>
//                 <li key={fruit.name}>
//                     {fruit.emoji} {fruit.name} ${fruit.price}
//                 </li>)}
//         </ul>
//     )
// }

////////////////////////// Lec 15 //////////////////////////

// import Fruit from './Fruit';
// export default function Fruits() {

//     // it is the array of objects
//     const fruits = [
//         { name: 'apple', price: 10, emoji: '🍎' },
//         { name: 'banana', price: 20, emoji: '🍌' },
//         { name: 'mango', price: 30, emoji: '🥭' },
//         { name: 'kiwi', price: 40, emoji: '🥝' },
//     ];

//     return (
//         <ul>
//             {fruits.map(fruit => (
//                 <Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
//             ))}
//         </ul>
//     )
// }

//////////////// lec 20 //////////////////////

// import Fruit from './Fruit';
// export default function Fruits() {
//     const fruits = [
//         { name: 'apple', price: 10, emoji: '🍎', soldout: false },
//         { name: 'banana', price: 20, emoji: '🍌', soldout: true },
//         { name: 'mango', price: 30, emoji: '🥭', soldout: false },
//         { name: 'kiwi', price: 40, emoji: '🥝', soldout: true },
//         { name: 'dragonfruit', price: 50, emoji: '🍉', soldout: true },
//     ];

//     return (
//         <ul>
//             {fruits.map(fruit => (
//                 <Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldout={fruit.soldout} />
//             ))}
//         </ul>
//     )
// }