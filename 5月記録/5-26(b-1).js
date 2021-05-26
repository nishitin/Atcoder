function main(input) {
  let input = input.trim().split("\n");

  let [n, x] = input[0].trim().split(" ").map(Number);
  let l = input[1].trim().split(" ").map(Number);

  let sum = 0;
  let count = 1;

  for (let i = 0; i < n; i++) {
    sum += l[i];
    if (x >= sum) count++;
  }
  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
