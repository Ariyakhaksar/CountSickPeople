const CountSickPeople = (Cip: number[], m: number[]) => {
  let result: number[] = [];
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < Cip.length; j++) {
      if (Cip[j] < m[i]) {
        result[i] += 1;
      }
    }
  }

  return result;
};
export default CountSickPeople;
