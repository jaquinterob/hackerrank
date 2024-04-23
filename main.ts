function flippingBits(n: number): number {
  let binaryString = n.toString(2);
  while (binaryString.length < 32) {
    binaryString = '0' + binaryString;
  }
  const inverted = binaryString
    .split('')
    .map((letter) => (letter === '0' ? 1 : 0))
    .join('');
  return parseInt(inverted, 2);
}

console.log(flippingBits(9));
