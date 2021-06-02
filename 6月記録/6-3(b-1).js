function main(input) {
  let [n, d] = input.trim().split(" ").map(Number);
  let ans = Math.ceil(n / (2 * d + 1));
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
