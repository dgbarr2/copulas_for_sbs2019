import React from 'react';
import './App.css';
import multivarUniformClayton from "./components/createData/multivarUniformClayton"
import multivarUniform from "./components/createData/multivarUniform"



function App() {
  let uTest = multivarUniform(2,2)
  console.log("uniform01 = ", uTest)
  let test = multivarUniformClayton(uTest,.2)
  console.log("clayton01 = ", test)
  return (
    <div> Test
      <svg x='0' y='0' width ='500' height='200'> 
        <text x='20' y = '20'>u = blank</text>
      </svg>
    </div>
  );
}

export default App;
