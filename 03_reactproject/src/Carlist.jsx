import React from "react";

function Car(props) {
    return(
        <li>I am a {props.brand}</li>
    );
}

function Carlist(){
    const cars = ['bmw','audi','suzuki'];
    return(
    <>
    <h1>Car List</h1>
    <ul>
        {cars.map((car) => <Car brand = {car}/>)}
    </ul>
    </>
    )
}

export default Carlist