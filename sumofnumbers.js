const testdata = [1, 2, 3, 4, 5];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testdata));

function sumWhile(nums) {
  let total = 0;
  let index = 0;

  while (index < nums.length) {
    total += nums[index];
    index++;
  }
  return total;
}

console.log(sumWhile(testdata));

function sumRecursion(nums, index = 0) {
  if (index === nums.length) {
    return 0;
  }
  return nums[index] + sumRecursion(nums, index + 1);
}

console.log(sumRecursion(testdata));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (acc, num) { return acc + num; }, 0);
}

console.log(sumTheSimpleWay(testdata));
