import React from "react"

import multivarUniform from "../createData/multivarUniform"
import multivarUniformClayton_3vars from "../createData/multivarUniformClayton_3vars"


const axes = () => {
    const axes_x = 100
    const axes_y = 100
    const u  = multivarUniform(2,3)  // Max (,.3)
    const d = multivarUniformClayton_3vars(u,0.2)

    //const xx = 100+(d[0][0]*(300-100))
    const transform = (data) => {
        const x = 100 + (data[0] * (400-100))
        const y = (500-100)-(data[1]*(400-100))
        return [x,y]
    }
    
    const plotPoint0 = transform([d[0][0], d[0][1]])

    console.log("d[0][0] = ", d[0][0])
    
    return (
        <svg height='500' width='500' viewBox="0,0,500,500" preserveAspectRatio='true'>
            <rect x='0' y = '0' width='500' height='500' fill="gray" />
            <rect x={axes_x} y = {axes_y} width='300' height='300' fill="none" stroke="white" />
            <circle cx={plotPoint0[0]} cy={plotPoint0[1]} r='3' fill="red" />


        </svg>
    )
}
export default axes