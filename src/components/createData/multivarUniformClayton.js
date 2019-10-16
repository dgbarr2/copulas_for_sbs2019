import React from "react"
import claytonCopula from "../copulas/claytonCopula"

const multivarUniformClayton = (d,θ) => {
    // d is an array of m arrays of n observations.
    // E.g. m assets with n sample returns
    
    let uw = d[0]
    let u = uw[0], w=uw[1]
    
    let v = claytonCopula(u,w,θ)

    let z = [u,v]  
    return z
}

export default multivarUniformClayton