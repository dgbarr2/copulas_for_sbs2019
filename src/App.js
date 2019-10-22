import React from 'react';
import multivarUniformClayton from "./components/createData/multivarUniformClayton"
import multivarUniformClayton_3vars from "./components/createData/multivarUniformClayton_3vars"
import multivarUniform from "./components/createData/multivarUniform"
import Axes from "./components/graphics/axes"
import var_and_es from "./components/portfolio/var_and_es_function"
import Var_and_es from "./components/portfolio/var_and_es"



function App() {
  const sampleSize = 5000
  const θ = 3

  //var_and_es(sampleSize,θ)

  return (
    <div> 
      <Axes sampleSize={sampleSize} θ={θ} />
      <Var_and_es sampleSize={sampleSize} θ={θ} />
      
    </div>
  );
}

export default App;
