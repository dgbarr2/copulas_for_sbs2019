import React from "react"
import _ from 'lodash'

import multivarUniform from "../createData/multivarUniform"
import multivarUniformClayton_3vars from "../createData/multivarUniformClayton_3vars"
import { uniformCorrelated } from "../maths/gaussianInversion/uniformCorrelated" 

import correl  from "../maths/correl"


const axes = () => {

    const axes_x = 100
    const axes_y = 100
    const u = multivarUniform(5,3)  // Max (.,3)
    const d = multivarUniformClayton_3vars(u,8)  // uniform vars, θ           
    
    const transform = (data) => {
        const x = 100 + (data[0] * (400-100))
        const y = (500-100)-(data[1]*(400-100))
        return [x,y]
    }
    
    const ro = correl(d)
    const z = uniformCorrelated(u,ro) // uniform u[0] and new uniform variable  
    
    
    const plotPoints_u = _.map (u, v => <circle key={v[0]} cx={transform(v)[0]} cy={transform(v)[1]} r='3' fill="red" />)
    const plotPoints_z = _.map (z, v => <circle key={v[0]} cx={transform(v)[0]} cy={transform(v)[1]} r='3' fill="green" opacity="1"/> )
    const plotPoints_c = _.map (d, v => <circle key={v[0]} cx={transform(v)[0]} cy={transform(v)[1]} r='3' fill="blue" />)
    

console.log("correl of u variables = ", correl(u))
console.log("correl of Clayton variables = ", correl(d))
console.log("correl of correlated u variables ('z') = ", correl(z))
// To generate a series with a given correl coeff with u1 see 
// [1] http://comisef.wikidot.com/tutorial:correlateduniformvariates
/// and
// [2] https://stackoverflow.com/questions/32718752/how-to-generate-correlated-uniform0-1-variables 
// and
// [3] http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=EB55B53C5072DA61B6B6EE6137E4AFF9?doi=10.1.1.48.281&rep=rep1&type=pdf


    
    return (
        <svg x="100" y="100" height='100%' width='80vw' viewBox="0,0,500,500" preserveAspectRatio='xMidYMid'>
            <rect x='0' y = '0' width='500' height='500' fill="gray" />
            <rect x={axes_x} y = {axes_y} width='300' height='300' fill="none" stroke="white" />
            
            {plotPoints_c}
            {plotPoints_u}
            {plotPoints_z}

        </svg>
    )
}
export default axes