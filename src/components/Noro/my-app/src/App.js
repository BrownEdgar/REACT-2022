import './App.css';

function App() {
  const arr1 = ["Anush", "Noro", "Tigran", "Alex"]
  const arr = ["Thank you for teaching us cool and usfull things"]
  const clickMe = () => {
    arr.push()
    console.log(arr);
  }
  return (
    <div className="App">
      <div className="child">
        <h1>React Developers</h1>
        {JSON.stringify(arr1)}
      <span onClick={()=> clickMe("x")}> Click Me And See Console ;)</span></div>
      </div>
  );
}

export default App;
