function main(input) {
  let [n, w] = input.trim().split(" ").map(Number);
  let ans = Math.floor(n / w);
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
