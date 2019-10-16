import React from "react"

const multiVarUniform = (m,n) => {
    let d=[]
    for (let j=0;j<m;j++){
        d[j] = []
        for (let i=0;i<n;i++){
            d[j][i] = Math.random() 
        }
    }
return d
}

export default multiVarUniform