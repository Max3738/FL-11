let a1 = parseFloat(prompt('The coordinate a1 is ', ''));
let a2 = parseFloat(prompt('The coordinate a2 is ', ''));
let b1 = parseFloat(prompt('The coordinate b1 is ', ''));
let b2 = parseFloat(prompt('The coordinate b2 is ', ''));
let c1 = parseFloat(prompt('The coordinate c1 is ', ''));
let c2 = parseFloat(prompt('The coordinate c2 is ', ''));
const extent = 2;
let m = Math.sqrt(Math.pow( c1 - a1,extent) + Math.pow( c2 - a2,extent));
let n = Math.sqrt(Math.pow(b1 - c1,extent) + Math.pow(b2 - c2,extent));
let coffitient = m / n;
const number = 1;
const isOnLine = 0;
let dx1 = b1 - a1;
let dy1 = b2 - a2;
let dx = c1 - a1;
let dy = c2 - a2;
let S = dx1 * dy - dx * dy1;
if (coffitient === number && S === isOnLine) {
  console.log(true);
} else {
  console.log(false);
}
