import React from "react"
import claytonCopula from "./claytonCopula"


const claytonCopula_3vars = (w1,w2,w3,θ) => {
    const u1 = w1
    const u2 = ( (w2**(-θ/(θ+1)) + 1)*u1**(-θ) -1)**(-1/θ)
    const u2Test = claytonCopula(w1,w2,θ)

    const z2 = (u1**(-θ) + u2**(-θ)-1)
    const u3_0 = (1+θ)**(-1) * w3 * z2**(-(1+θ)/θ) * u2**(1+θ) 
    const u3_1 = (u1**(-θ) + u2**(-θ)-2)
    const u3 = (u3_0**(-θ/(1+2*θ)) - u3_1)**(-1/θ)
    // ------- check -------- //
    const z3 = (u1**(-θ) + u2**(-θ) + u3**(-θ) - 2)
    const test_w3_pt1 = (1+θ)*z3**(-(1+2*θ)/θ) * (u1*u2)**(-(1+θ)) 
    const test_w3_pt2 = z2**(-(1+θ)/θ) * u1**(-(1+θ))
    const test_w3 = test_w3_pt1 / test_w3_pt2
    
    return u3
}
export default claytonCopula_3vars