import React from "react";

function Eventbgcolor(){
    const clicking = () => {
       document.body.style.backgroundColor = 'red';
    }
    return(
        <>
        <h1>Event Handling</h1>
        <button onClick={clicking}>Click To BG Color Change</button>
        </>
    )
}

export default Eventbgcolor