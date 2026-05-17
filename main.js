function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);

  const index = sortedArr.findIndex((value) => value >= num);

  return index === -1 ? sortedArr.length : index;
}
