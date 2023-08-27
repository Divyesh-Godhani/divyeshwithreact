import { Component, createContext, useContext } from 'react'
import { useState } from 'react'

const UserContext = createContext();

function App() {
  const [user, setUser] = useState('monny')

  return (
    <UserContext.Provider value={user}>
      <h1>Component 1</h1>
      <p>This is is a {user}</p>
      <Component1/>
    </UserContext.Provider>
  );
}

function Component1(){
 return(
  <>
  <h1>Component 2</h1>
  <Component2/>
  </>
 );
}

function Component2(){
  return(
   <>
   <h1>Component 3</h1>
   <Component3/>
   </>
  );
 }

 function Component3(){
  return(
   <>
   <h1>Component 4</h1>
   <Component4/>
   </>
  );
 }
 function Component4(){
  return(
   <>
   <h1>Component 5</h1>
   <Component5/>
   </>
  );
 }

 function Component5(){
  const user = useContext(UserContext);
  return(
   <>
   <h1>Component 5</h1>
   <h2>This is a {user}</h2>
   </>
  );
 }



export default App
