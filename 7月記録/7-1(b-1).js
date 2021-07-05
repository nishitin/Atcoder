function main(input) {
  input = input.trim().split("\n");
  let n = parseInt(input[0], 10);
  let arr = input[1].split(" ").map(Number);

  //ここが三つの答えになる
  let ans1 = Ma(arr);
  let ans2 = Eu(arr);
  let ans3 = Ch(arr);

  console.log(ans1);
  console.log(ans2);
  console.log(ans3);
}
function Ma(arrayData) {
  let sum = 0;
  for (let i = 0; i < arrayData.length; i++) {}
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
