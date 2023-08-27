import { createContext, useContext, useState } from 'react'

const UserContext = createContext();

function App() {
  const [user, setUser] = useState('tommy')

  return (
    <UserContext.Provider value={user}>
     <h1>{`hello ${user} !`}</h1>
     <Component1/>
    </UserContext.Provider>
  );
}

function Component1() {
  return(
    <>
    <h1>Components 1</h1>
    <Component2/>
    </>
  );
}

function Component2(){
  return(
    <>
    <h1>Components 2</h1>
    <Component3/>
    </>
  );
}

function Component3(){
  return(
    <>
    <h1>Components 3</h1>
    <Component4/>
    </>
  );
}

function Component4(){
  const user = useContext(UserContext);
  return(
    <>
    <h1>i am {user}</h1>
    </>
  )
}

export default App
