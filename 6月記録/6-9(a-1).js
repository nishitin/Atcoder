function main(input) {
  let [a, b, c] = input.trim().split(" ");
  console.log(21 - a - b - c);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
