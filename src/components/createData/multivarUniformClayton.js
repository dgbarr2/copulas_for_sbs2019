import React from "react"
import _ from "lodash"
import claytonCopula from "../copulas/claytonCopula"

const multivarUniformClayton = (d,θ) => {
    // d is an array of m arrays of n observations.
    // E.g. m assets with n sample returns
    // *** At present this is bivariate only. ***
    
    const multivar = []
    for(let i=0;i<d.length;i++){
        const uw = d[i] 
        const w1 = uw[0], w2=uw[1]
        const u1 = w1
        const u2 = claytonCopula(w1,w2,θ)
        const z = [u1,u2]
        multivar.push(z)  
    }

    return multivar
}

export default multivarUniformClayton