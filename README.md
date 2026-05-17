# 📍 Sorted Index Finder

A lightweight JavaScript utility that finds the index where a number should be inserted into a sorted array — without mutating the original intent and with zero dependencies.

---

## How It Works

Given an array and a number, `getIndexToIns` sorts the array in ascending order and returns the lowest index at which the number could be inserted to keep the array sorted.

```js
function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);
  const index = sortedArr.findIndex((value) => value >= num);
  return index === -1 ? sortedArr.length : index;
}
```

**Logic breakdown:**
- Sorts the array numerically in ascending order
- Uses `findIndex` to locate the first element greater than or equal to `num`
- If no such element exists (i.e. `num` is larger than all elements), returns the array's length — meaning it goes at the end

---

## Usage

```js
getIndexToIns([10, 20, 30, 40, 50], 35); // → 3
getIndexToIns([2, 5, 10], 15);            // → 3
getIndexToIns([3, 10, 5], 3);             // → 0
getIndexToIns([], 1);                     // → 0
getIndexToIns([1, 2, 3], 2);              // → 1
```

---

## Edge Cases

| Input                     | Output | Reason                              |
|---------------------------|--------|-------------------------------------|
| `([5, 10], 0)`            | `0`    | Smaller than all elements           |
| `([5, 10], 10)`           | `1`    | Equal to an existing element        |
| `([5, 10], 100)`          | `2`    | Larger than all elements            |
| `([], 5)`                 | `0`    | Empty array always returns `0`      |

---

## Installation

No package manager needed. Just copy `getIndexToIns` into your project and call it.

If you're using ES modules:

```js
export function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);
  const index = sortedArr.findIndex((value) => value >= num);
  return index === -1 ? sortedArr.length : index;
}
```

Then import it wherever you need it:

```js
import { getIndexToIns } from './getIndexToIns.js';
```

---

## Notes

- The function **does not mutate** the original array's reference — but `Array.prototype.sort` sorts in place, so if preserving the original order matters, pass a copy: `[...arr]`
- Works with **integers and floats**
- Returns `0` for an empty array regardless of `num`
