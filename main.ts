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

// -------------------------------------------------

function diagonalDifference(arr: number[][]): number {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
  }
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    rightDiagonal += arr[i][j];
    j--;
  }

  return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
