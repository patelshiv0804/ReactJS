import { useState } from "react";

///////////////////// Lec 25 (Form in react) /////////////////

// export default function Form1() {

//     // function handleChange(e) {
//     //     setName(e.target.value);
//     // }

//     const [name, setName] = useState("");

//     return (
//         <div>
//             <form>
//                 {/* <input onChange={(e) => handleChange(e)} type="text" value={name} /> */}
//                 {
//                 <input onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter your first name"
//                     type="text"
//                     value={name} />
//                 }
//             </form>
//         </div>
//     );

// }

/////////////////////// lec 26 (multiple input handlling) ////////////////////////

// export default function Form1() {

//     // const [name, setName] = useState("");
//     // const [lastname, SetLastname] = useState("");
//     // ---------------- or ----------------------

//     const [name, setName] = useState({ firstName: "", lastname: "" });
//     return (
//         <div>
//             <form>

//                 {/* {<input onChange={(e) => setName(e.target.value)} placeholder="Enter your first name" type="text" value={name} />}
//                 {<input onChange={(e) => SetLastname(e.target.value)} placeholder="enter the last name" type="text" value={lastname} />} */}

//                 {/* ----------------------------------------- or ------------------------------------ */}

//                 {/* <input onChange={(e) => setName({ firstName: e.target.value, lastName: "" })} type="text" value={name.firstName} />
//                 <input onChange={(e) => setName({ lastName: e.target.value, firstName: "" })} type="text" value={name.lastName} /> */}

//                 {/* -----------for seeting the split object so that if we giving the input of firstname then lastname will not change-------------*/}

//                 {name.firstName} - {name.lastName} <br />
//                 <input onChange={(e) => setName({ ...name, firstName: e.target.value })} type="text" value={name.firstName} />
//                 <input onChange={(e) => setName({ ...name, lastName: e.target.value })} type="text" value={name.lastName} />
//             </form>
//         </div >
//     );
// }


/////////////////////////// lec - 27 (handling form submission in react) /////////////////////////


// export default function Form1() {
//     const [name, setName] = useState({ firstName: "", lastname: "" });
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(name);
//     }
//     return (
//         <div>
//             <form>
//                 {name.firstName} - {name.lastName} <br />
//                 <input onChange={(e) => setName({ ...name, firstName: e.target.value })} type="text" value={name.firstName} />
//                 <input onChange={(e) => setName({ ...name, lastName: e.target.value })} type="text" value={name.lastName} />
//                 <br />
//                 <button onClick={(e) => handleSubmit(e)}>Add</button>
//             </form>
//         </div >
//     );
// }


