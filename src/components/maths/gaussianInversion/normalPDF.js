function normalPdf(x, mean, std) {
  return Math.exp(-0.5 * Math.log(2 * Math.PI) -
                  Math.log(std) - Math.pow(x - mean, 2) / (2 * std * std));
}