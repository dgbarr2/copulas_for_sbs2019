function normalCDF_erf(x, mean, std) {
  return 0.5 * (1 + erf((x - mean) / Math.sqrt(2 * std * std)));
}