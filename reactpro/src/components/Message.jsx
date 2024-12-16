///////////////////////////// Lec 21 (Event handling)///////////////////////////
export default function Message() {
    function handleEvet() {
        console.log("Button Clicked");
        // return "button clicked";
    }
    return <div>
        <button onClick={handleEvet}>Click here to get message!!</button>
    </div>;
}