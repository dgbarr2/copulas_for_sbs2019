function normalCDF(x) {
  var value = x;
  var sum = x;

  for (let i = 1; i < 100; i++) {
    value = (value*x*x/(2*i+1));
    sum = sum + value;
  }

  var result = 0.5+(sum/Math.sqrt(2*Math.PI))*Math.exp(-(x*x)/2);

  return result ;
}

export { normalCDF }