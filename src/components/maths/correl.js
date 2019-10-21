import _ from "lodash"

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

const cov = (d) => {
    let n = d.length
    let m0 = avg(_.map(d, v => v[0]))
    let m1 = avg(_.map(d, v => v[1]))
    
    let cov = 0
    for (let i=0;i<n;i++) {
        cov = cov + (d[i][0]- m0) * (d[i][1]-m1)
    }
    
    return cov / n
}



const correl = (data) => {
    let v1 = variance(_.map(data, v => v[0]))
    let v2 = variance(_.map(data, v => v[1]))
    let covariance = cov(data)
    let corr = covariance /Math.sqrt(v1*v2)
    return corr
}

export default correl