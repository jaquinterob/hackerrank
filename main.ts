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

// --------------------------------------------------

function countingValleys(steps: number, path: string): number {
  const pathArray = path.toUpperCase().split('');

  let climb = 0;
  let valley = 0;
  let valleys = 0;
  let isValley = false;
  let isInflection = false;
  for (let i = 0; i < steps; i++) {
    if (i == 0) {
      initialStep(pathArray[i]);
    } else {
      if (isInflection) {
        console.log('inflexion');
        if (pathArray[i] === 'D') {
          isValley = true;
        } else {
          isValley = false;
        }
      }

      isInflection = false;
      if (isValley) {
        if (pathArray[i] === 'D') {
          valley++;
        } else {
          valley--;
        }
        isInflection = false;
        if (valley === 0) {
          valleys++;
          isValley = false;
          isInflection = true;
        }
      } else {
        if (pathArray[i] === 'U') {
          climb++;
        } else {
          climb--;
        }
        if (climb === 0) {
          isInflection = true;
        }
      }
    }
    console.log(
      i,
      pathArray[i],
      'valley',
      valley,
      'isValley = ',
      isValley,
      'isInflection =',
      isInflection,
      'Valleys = ',
      valleys
    );
  }
  return valleys;

  function initialStep(step: string): void {
    if (step === 'U') {
      climb++;
      isValley = false;
    } else {
      valley++;
      isValley = true;
    }
  }
}

console.log(countingValleys(12, 'DDUUUUDDDDUU'));


// ----------------------------------------------

function pangrams(s: string): string {
  const alphabetSet: Set<string> = new Set([...'abcdefghijklmnopqrstuvwxyz']);
  const sentenceSet: Set<string> = new Set(s.toLowerCase().replace(/ /g, ''));
  for (const letter of alphabetSet) {
    if (!sentenceSet.has(letter)) {
      return 'not pangram';
    }
  }
  return 'pangram';
}

console.log(
  pangrams('We promptly judged antique ivory buckles for the next prize')
);

// ----------------------------------------------


