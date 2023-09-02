import { useEffect, useState } from "react"

function App() {
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data:', error));
  },[]);

  return (
    <>
       <h1>Fetch Api</h1>
    </>
  )
}

export default App
