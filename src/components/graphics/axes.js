import React from "react"
import _ from 'lodash'

import multivarUniform from "../createData/multivarUniform"
import multivarUniformClayton_3vars from "../createData/multivarUniformClayton_3vars"
import correl from "../maths/correl"

import { normalInvCDF } from "../maths/gaussianInversion/normalInvCDF"
import { normalCDF } from "../maths/gaussianInversion/normalCDF"


const uniform2Normal = normalInvCDF(0.5,0,1) 
console.log("invCDF = ", uniform2Normal)
console.log("normalCDF = ", normalCDF(uniform2Normal))
// -------------
const axes = () => {

    const axes_x = 100
    const axes_y = 100
    const u = multivarUniform(500,3)  // Max (,.3)
    const d = multivarUniformClayton_3vars(u,20)

    const transform = (data) => {
            const x = 100 + (data[1] * (400-100))
            const y = (500-100)-(data[2]*(400-100))
            return [x,y]
    }
    
    // Create a varaible with a given correlation with u1
    const ro = .5
    const u1 = _.map(u, v => v[0])
    const z1 = _.map(u, v => [normalInvCDF(v[0],0,1)])
    const z2 = _.map(u, v => [normalInvCDF(v[1],0,1)])
    console.log("u = ", u)
    console.log("z1: ", z1) 
    const temp = [z1,z2]
    const test = temp[0].map((col, i) => temp.map(row => row[i]))
    
    console.log("test = ", test)
    const z3_gaussian = _.map(test, v => Number(ro*v[0]) +  Math.sqrt(1 - ro*ro) * Number(v[1]))
    const z3 = _.map(z3_gaussian, v => normalCDF(v,0,1))
    console.log("u1: ", u1) 
    console.log("z3: ", z3) 
    const temp2 = [u1,z3]
    const z = temp2[0].map((col,i) => temp2.map(row => row[i] ))
    console.log(" z = ", z)

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