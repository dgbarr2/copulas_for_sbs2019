import React from "react"
import _ from "lodash"
import multivarUniformClayton from "../createData/multivarUniformClayton"
import multivarUniform from "../createData/multivarUniform"
import { normalInvCDF } from "../maths/gaussianInversion/normalInvCDF"
import correl from "../maths/correl"

const sum = (d) => {
    let n = d.length
    let s = 0
    for (let i=0;i<n;i++) {
        s = s + d[i]
    }
    return s
}

const avg = (d) => {
    let n = d.length
    return sum(d)/n
}


const variance = (d) => {
    
    let m0 = avg(d)
    let n = d.length
    
    let v = 0
    for (let i=0;i<n;i++) {
        v = v + (d[i]- m0) * (d[i]-m0)
    }
    return v / n
}

const var_and_es = () => {
    
        let r_u = multivarUniform(20,2)  // Max (,.3)
        let r_cl = multivarUniformClayton(r_u,40)

    

        let r_cl_g = _.map(r_cl, v => [normalInvCDF(v[0], 0, 1), normalInvCDF(v[1], 0, 1)])
        let ro = correl(r_cl_g)
        let r_p = _.map(r_cl_g, v => 0.5*v[0]+0.5*v[1])
        let avg_r_p = avg(r_p)
        let variance_r_p = variance(r_p)
        let estimated_VaR = normalInvCDF(0.05,avg_r_p,Math.sqrt(variance_r_p))
    
    
    console.log("r_u = ", r_u)
    console.log("var_and_es called")
    console.log("r_u = ", r_u)
    console.log("r_cl = ", r_cl)
    console.log("r_cl_g = ", r_cl_g)
    console.log("ro = ", ro)
    console.log("r_p = ", r_p)
    console.log("average r_p = ", avg_r_p)
    console.log("variance_r_p = ", variance_r_p)
    console.log("Estimated VaR = ", estimated_VaR)

        return r_u
}

export default var_and_es

