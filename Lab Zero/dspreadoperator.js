const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

// ...

const merged = [...a, ...b, ...c];

console.log(merged);
console.log("Merged:", merged);

/*
 * Expected output:
 *
 * [
 *   1, 2, 3, 4, 5,
 *   6, 7, 8, 9
 * ]
 */