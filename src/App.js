import React from 'react';
import multivarUniformClayton from "./components/createData/multivarUniformClayton"
import multivarUniformClayton_3vars from "./components/createData/multivarUniformClayton_3vars"
import multivarUniform from "./components/createData/multivarUniform"
import Axes from "./components/graphics/axes"


function App() {
  let uTest_3vars = multivarUniform(2,3)  // Max (,.3)
  let uTest = uTest_3vars
  let test_2vars = multivarUniformClayton(uTest,.2)
  let test_3vars = multivarUniformClayton_3vars(uTest_3vars,.2) 
  console.log("[w1, w2, w3] = ", uTest_3vars)
  console.log("[u1, u2] = ", test_2vars)
  console.log("[u1, u2, u3] = ", test_3vars)
  return (
    <div> 
      <Axes claytonData={test_3vars}/>
    </div>
  );
}

export default App;
