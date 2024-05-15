const getRainWater_BruteForce = (elevations) => {
  let rainWater = 0;
  const count = elevations.length;
  for (let i = 0; i < count; i++) {
    // find the tallest left & right most wall
    let maxL = 0,
      maxR = 0,
      pL = i,
      pR = i;
    while (pL >= 0) {
      maxL = Math.max(maxL, elevations[pL]);
      pL--;
    }
    while (pR < count) {
      maxR = Math.max(maxR, elevations[pR]);
      pR++;
    }
    const currentWater = Math.min(maxL, maxR) - elevations[i];
    if (currentWater > 0) {
      rainWater += currentWater;
    }
  }

  return rainWater;
};

const getRainWater_Optimized = (elevations) => {
  let rainWater = 0,
    maxL = 0,
    maxR = 0,
    pL = 0,
    pR = elevations.length - 1;

    while(pL < pR) {
        const currentHeight = Math.min(elevations[pL], elevations[pR]);
        const currentWater = Math.min(maxL, maxR) - currentHeight;
        maxL = Math.max(maxL, elevations[pL]);
        maxR = Math.max(maxR, elevations[pR]);
        if (currentWater > 0) rainWater += currentWater;
        if (elevations[pL] > elevations[pR]) {
            pR--;
        } else {
            pL++;
        }
    }

    return rainWater;
};

const arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
console.log("brute forced : ", getRainWater_BruteForce(arr));
console.log("brute optimized : ", getRainWater_Optimized(arr));
