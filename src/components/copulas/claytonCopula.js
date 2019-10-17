import React from "react"


const claytonCopula = (u,w,θ) => {
    const v = ( (w**(-θ/(θ+1)) - 1)*u**(-θ) +1)**(-1/θ)
    return v
}
export default claytonCopula