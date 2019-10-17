import React from 'react';
import './App.css';
import multivarUniformClayton from "./components/createData/multivarUniformClayton"
import multivarUniformClayton_3vars from "./components/createData/multivarUniformClayton_3vars"
import multivarUniform from "./components/createData/multivarUniform"



function App() {
  //let uTest = multivarUniform(2,2)
  let uTest_3vars = multivarUniform(10,3)
  let uTest = uTest_3vars
  console.log("uniform_2vars = ", uTest)
  let test = multivarUniformClayton(uTest,.2)
  console.log("clayton_2vars = ", test)
  console.log(" ---------------- ")
  console.log("uniform_3vars = ", uTest_3vars)
  let test_3vars = multivarUniformClayton_3vars(uTest_3vars,.2) 
  console.log("clayton_3vars = ", test_3vars)
  return (
    <div> Test
      <svg x='0' y='0' width ='500' height='200'> 
        <text x='20' y = '20'>u = blank</text>
      </svg>
    </div>
  );
}

export default App;
