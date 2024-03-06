function moveZeros(arr: Array<any>) {
  for (var i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j++;
    }
  }
  return arr;
}
