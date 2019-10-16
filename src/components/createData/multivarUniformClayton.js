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
        const u = uw[0], w=uw[1]
        const v = claytonCopula(u,w,θ)
        const z = [u,v]
        multivar.push(z)  
    }

    return multivar
}

export default multivarUniformClayton