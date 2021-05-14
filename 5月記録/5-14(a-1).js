function main(input) {
  input = input.trim().split("\n");

  let n = parseInt(input[0], 10);
  let ans = Math.floor((n + 99) / 100);
  console.log(ans);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
