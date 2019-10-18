import React from "react"
import _ from 'lodash'

import multivarUniform from "../createData/multivarUniform"
import multivarUniformClayton_3vars from "../createData/multivarUniformClayton_3vars"
import correl from "../maths/correl"



// -------------
const axes = () => {

    const axes_x = 100
    const axes_y = 100
    const u = multivarUniform(2000,3)  // Max (,.3)
    const d = multivarUniformClayton_3vars(u,20)

    const transform = (data) => {
            const x = 100 + (data[1] * (400-100))
            const y = (500-100)-(data[2]*(400-100))
            return [x,y]
    }
    
console.log("d = ", d)
 
    const plotPoints_u = _.map (u, v => <circle key={v[0]} cx={transform(v)[0]} cy={transform(v)[1]} r='1.5' fill="red" />)
    const plotPoints_c = _.map (d, v => <circle key={v[0]} cx={transform(v)[0]} cy={transform(v)[1]} r='1.5' fill="blue" />)

console.log("correl of u variables = ", correl(u))
console.log("correl of Clayton variables = ", correl(d))
console.log("correl of z variables = ", correl(z))
    
    return (
        <svg x="100" y="100" height='100%' width='60vw' viewBox="0,0,500,500" preserveAspectRatio='xMidYMid'>
            <rect x='0' y = '0' width='500' height='500' fill="gray" />
            <rect x={axes_x} y = {axes_y} width='300' height='300' fill="none" stroke="white" />
            
            {plotPoints_c}
            {plotPoints_u}

        </svg>
    )
}
export default axes