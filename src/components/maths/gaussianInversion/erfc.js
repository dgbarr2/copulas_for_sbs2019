import { erf } from "./erf"

function erfc(x) {
  return 1 - erf(x);
};

export { erfc }