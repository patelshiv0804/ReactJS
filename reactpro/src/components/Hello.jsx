// function Hello() {
//     return <h1> Hello world </h1>
// }


// lec -- 7
// const name = "shiv";

// function greetings() {
//     return <p> Wow!!</p>
// }
// function Hello() {
//     return (<div>
//         <h1> Hello {name} </h1>
//         <h1> value of 10 + 20 is {10 + 20}  </h1>
//         <h1> hello {greetings()}</h1></div>
//     );
// }


// ####### for returning multiple return statements ##########

//     return <div>
//         <h1> Hello {name}</h1>
//         <h1> value of 10 + 20 is : {10 + 20}</h1>
//         <h1> hello {greetings()}</h1>
//     </div>
// }





/////////////////////// lec 9 ////////////////////////

// props:- props are used for making the component dynamic 

// function Hello(props) {
//     return (
//         <div>
//             <h1> {props.message} {props.name} {props.emoji} </h1>
//         </div>);
// }

////////////////// lec 10 ////////////////////////

// destruncturing of the props //

// ------------- method 1 -----------------
// function Hello(props) {
//     const { name, message } = props;
//     return (
//         <div>
//             <h1>
//                 {message} {name}
//             </h1>
//         </div>
//     );
// }

// ----------------- method - 2 ----------------
// function Hello({ name, message, emoji }) {
//     return (
//         <div>
//             <h1>
//                 {message} {name} {emoji}
//             </h1>
//         </div>
//     )
// }


/////////////////// lec 10 //////////////////////

//--- props are immutable (means we can not change the value of any variable in props) ---//

// function Hello(props) {
//     props.name = "akshat";
//     return (
//         <div>
//             <h1>
//                 {props.message} {props.name}
//             </h1>
//         </div>
//     )
// }

/////////////////// Lec - 12 -passing array & object to props /////////////////////

// function Hello(props) {
//     return (
//         <div>
//             <h1> {props.message} {props.name} {props.seatnumber}</h1>
//         </div>
//     )
// }

// function Hello({ message, name, emoji, seatNumbers }) {
//     return (
//         <div>
//             <h1> {message} {name} {emoji} {seatNumbers}</h1>
//         </div>
//     )
// }

// function Hello(props) {
//     return (
//         <div>
//             <h1>
//                 {props.person.message}
//                 {props.person.name}
//                 {props.person.emoji}
//                 {props.person.seatNumbers}
//             </h1>
//         </div>
//     )
// }

function Hello({ person }) {
    return (
        <div>
            <h1>
                {person.message}
                {person.name}
                {person.emoji}
                {person.seatNumbers}
            </h1>
        </div>
    )
}
// function Hello()

export default Hello;