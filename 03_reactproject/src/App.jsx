import { useState } from "react"
import Classbase from "./Classbase";
import Car from "./Car";
import Garage from "./Garage";
import Eventbgcolor from "./Eventbgcolor";
import Carlist from "./Carlist";

function App() {
const [counter,setCounter] = useState(0);
  return (
    <>
    <h1>{counter}</h1>
    <p>{10+20}</p>
    <Classbase />
    <Car />
    <Garage brand = "ramdev garage" />
    <Eventbgcolor />
    <Carlist />
    </>
  )
}

export default App
