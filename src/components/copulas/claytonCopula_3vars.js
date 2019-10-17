import React from "react"
import claytonCopula from "./claytonCopula"


const claytonCopula_3vars = (w1,w2,w3,θ) => {
    const u1 = w1
    const u2 = ( (w2**(-θ/(θ+1)) - 1)*u1**(-θ) +1)**(-1/θ)
    const u2Test = claytonCopula(w1,w2,θ)

    const z2 = (u1**(-θ) + u2**(-θ)-1)
    const u3 = (z2*(w3**((-θ)/(1+2*θ)) - 1) + 1)**(-1/θ)
    
    return u3
}
export default claytonCopula_3vars