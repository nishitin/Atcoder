function main(input) {
  input = input.trim().split("\n");
  let a = input[0].split(" ").map(Number);
  console.log(Math.min(...a));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
