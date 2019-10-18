import { erfcinv } from "./erfcinv"
function normalInvCDF(p, mean, std) {
  return -1.41421356237309505 * std * erfcinv(2 * p) + mean;
}
export { normalInvCDF }