import './App.css';

function App() {

const mystyle = {
  backgroundColor:"orange",
  padding:"10px",
  border:"1px solid white",
  borderRadius:"5px"
}

const colorchange = () => {
  const colortext = document.querySelector('.box')
  colortext.style.backgroundColor = "red";
}
const removecolor = () => {
  const removecolortext = document.querySelector('.box')
  removecolortext.style.backgroundColor = "black";
}
const internalcolorchange = () => {
  document.querySelector('.box').style.backgroundColor = "orange";
}
const internalremovecolor = () => {
  document.querySelector('.box').style.backgroundColor = "black";
}

const externalcolorchange = () => {
  document.querySelector('.box').style.backgroundColor = "green";
}
const externalremovecolor = () => {
  document.querySelector('.box').style.backgroundColor = "black";
}

  return (
    <>
    <div className='container'>
      <div className='inner-content'>
        <h1>CSS Style</h1>
        <h3 onMouseEnter={colorchange} onMouseLeave={removecolor} style={{backgroundColor:"red", padding:"10px", border:"1px solid white", borderRadius:"5px"}}>Inline CSS </h3>
        <h3 onMouseEnter={internalcolorchange} onMouseLeave={internalremovecolor} style={mystyle}>CSS Stylesheet</h3>
        <h3 onMouseEnter={externalcolorchange} onMouseLeave={externalremovecolor} className="mystyles">Module CSS</h3>
      </div>
      <div className='box'></div>
    </div>
    </>
  )
}

export default App
