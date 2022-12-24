// O(n)
function sum1(n) {
  // 回傳 1+2+3+4+...+n 的結果
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// O(1)
function sum2(n) {
  return ((1 + n) * n) / 2;
}

// O(1) 比 O(n)，O(1)比較快
// 在數字比較小的情況下、壓力不大的情況下是看不出來的甚至O(1)比較慢

// console.log(sum2(1)); // 1
// console.log(sum2(2)); // 3
// console.log(sum2(3)); // 6
// console.log(sum2(10)); // 55

console.time('SUM1');
for (let i = 0; i <= 10000; i++) {
  sum1(10000);
}
console.timeEnd('SUM1');

console.time('SUM2');
for (let i = 0; i <= 10000; i++) {
  sum2(10000);
}
console.timeEnd('SUM2');
