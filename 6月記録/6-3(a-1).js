function main(input) {
  let r = input.trim().split(" ").map(Number);
  let ans = 3 * r * r;
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
