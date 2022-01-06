import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
  const[Bdata,setBData] = useState([])

  const getData = () => {
    console.log("hi")
   axios.get('http://localhost:5000')
  .then(res => {
      // console.log(res.data)
      const backData = res.data;
      // console.log(backData)
      setBData(backData)
      
    })
    // .catch(e => console.log(e))
  }
  return (
    <div className="App">
      {/* <button>Hello!</button> */}
      <button onClick={getData}>click me</button>
      {    
        Bdata.map(ele => (
          <h1>{ele.name}</h1>
      ))
      }

      <h1>hello</h1>
      
    </div>
  );
}

export default App;
