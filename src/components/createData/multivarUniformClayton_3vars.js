import React from "react"
import _ from "lodash"
import claytonCopula from "../copulas/claytonCopula"
import claytonCopula_3vars from "../copulas/claytonCopula_3vars"

const multivarUniformClayton_3vars = (d,θ) => {
    // d is an array of m arrays of n observations.
    // E.g. m assets with n sample returns
    // *** At present this is bivariate only. ***
    
    const multivar = []
    for(let i=0;i<d.length;i++){
        const uw = d[i] 
        const w1 = uw[0], w2=uw[1], w3=uw[2]
        
        const u1 = w1
        const u2 = claytonCopula(w1,w2,θ)
        const u3 = claytonCopula_3vars(w1,w2,w3,θ)
        
        const z = [u1,u2,u3]
        multivar.push(z)  
    }

    return multivar
}

export default multivarUniformClayton_3vars