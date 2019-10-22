import React from "react"
import _ from "lodash"
import correl  from "../correl"

import { normalInvCDF } from "./normalInvCDF"
import { normalCDF } from "./normalCDF"

const makeMat = (v1,v2) => {
    let m = []
    for (let i=0;i<v1.length;i++) {
        m[i] = [v1[i],v2[i]]
    }
    return m
}

const uniformCorrelated = (u,ro) => {
    
    const u0 = _.map(u,v => v[0])
    const u1 = _.map(u,v => v[1])
    
    console.log("corr(u0,u1) = ", correl(makeMat(u0,u1)))

    const z0 = _.map(u0, v => normalInvCDF(v,0,1))
    const z1 = _.map(u1, v => normalInvCDF(v,0,1))

    console.log("corr(z0,z1) = ", correl(makeMat(z0,z1)))

    const mat = makeMat(z0,z1)
    const z2 = _.map(mat, v => ro*v[0] + Math.sqrt(1-ro*ro) * v[1])
    console.log("corr(z0,z2) = ", correl(makeMat(z0,z2)))
    console.log("inputted ro = ", ro)
    const u2 = _.map(z2, v => normalCDF(v,0,1))


    return makeMat(u0,u2)
}

export { uniformCorrelated }