import React from "react"
import _ from "lodash"
import multivarUniformClayton from "../createData/multivarUniformClayton"
import multivarUniform from "../createData/multivarUniform"
import { normalInvCDF } from "../maths/gaussianInversion/normalInvCDF"
import correl from "../maths/correl"
import { uniformCorrelated } from "../maths/gaussianInversion/uniformCorrelated"

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

const var_and_es = (sampleSize,θ) => {
    
        let r_u = multivarUniform(sampleSize,2)  // Max (,.3)
        let r_cl = multivarUniformClayton(r_u,θ)

    //console.log("r_u = ", r_u)
    //console.log("r_cl = ", r_cl)

        let r_cl_g = _.map(r_cl, v => [normalInvCDF(v[0], 0, 1), normalInvCDF(v[1], 0, 1)])
        //console.log("r_cl_g = ", r_cl_g)
        
        // Sort ascending and base the estimate of ro from the upper half:
        
        let r_cl_g_sorted = r_cl_g.sort(function(a, b){return a[0]-b[0]});
        //console.log("r_cl_g_sorted = ", r_cl_g_sorted)
        let cutOff = nobs / 2
        let r_cl_g_upper = r_cl_g_sorted.slice(cutOff,nobs)
        //console.log("r_cl_g_upper = ", r_cl_g_upper)
        let ro = correl(r_cl_g)
        let ro_upper = correl(r_cl_g_upper)


// **** Select the correl coeff below as ro or ro_upper

        let r_u_g = uniformCorrelated(r_u,ro_upper)
    //console.log("r_u_g = ", r_u_g)

        let r_g_g = _.map(r_u_g, v => [normalInvCDF(v[0], 0, 1), normalInvCDF(v[1], 0, 1)])
    //console.log("r_g_g = ", r_g_g)

        // Key:
        // r_cl_g: Gaussian distributed, Clayton copula (correl = ro)
        // r_g_g : Gaussian distributed, Gaussian copula (correl = ro)

        let r_p_cl = _.map(r_cl_g, v => 0.5*v[0]+0.5*v[1])
        let avg_r_p_cl = avg(r_p_cl)
        let variance_r_p_cl = variance(r_p_cl)
        let estimated_VaR_cl = normalInvCDF(0.05,avg_r_p_cl,Math.sqrt(variance_r_p_cl))
    
        let r_p_g = _.map(r_g_g, v => 0.5*v[0]+0.5*v[1])
        let avg_r_p_g = avg(r_p_g)
        let variance_r_p_g = variance(r_p_g)
        let estimated_VaR_g = normalInvCDF(0.05,avg_r_p_g,Math.sqrt(variance_r_p_g))

        let r_p_g_sorted = r_p_g.sort(function(a, b){return a-b});
        let r_p_cl_sorted = r_p_cl.sort(function(a, b){return a-b});

        const avLoss = (r,VaR) => {
            let s = 0, n = 0
            for (let i=0;i<r.length;i++) {
                if (r[i] < VaR) {
                    s += r[i]
                    n = i
                } else {
                    break
                }
            }
            return s / n
        } 

        let r_p_g_loss = avLoss(r_p_g_sorted,estimated_VaR_g)    
        let r_p_cl_loss = avLoss(r_p_cl_sorted,estimated_VaR_cl)    

    //console.log("r_p_g_sorted = ", r_p_g_sorted)

    //console.log("r_u = ", r_u)
    //console.log("var_and_es called")
    //console.log("r_u = ", r_u)
    //console.log("r_cl = ", r_cl)
    //console.log("r_cl_g = ", r_cl_g)
    //console.log("ro = ", ro)
    

    console.log(" ----------- Clayton copula VaR")    
    console.log("average r_p = ", avg_r_p_cl)
    console.log("variance_r_p = ", variance_r_p_cl)
    console.log("Estimated VaR = ", estimated_VaR_cl)
    console.log("ExpLoss = ", r_p_g_loss)
    
    
    console.log(" ----------- Gaussian copula VaR")    
    console.log("average r_p = ", avg_r_p_g)
    console.log("variance_r_p = ", variance_r_p_g)
    console.log("Estimated VaR = ", estimated_VaR_g)
    console.log("ExpLoss = ", r_p_cl_loss)
    console.log(" ------------------------------------- ")
    console.log(" *** Why is the Gaussian expected loss greater than Clayton? ***")
    console.log(" ------------------------------------- ")
    

        return r_u
}

export default var_and_es

