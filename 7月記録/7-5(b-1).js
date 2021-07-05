function main(input) {
  input = input.split("\n");
  let [a, b, c, d] = input[0].split(" ").map(Number);

  if (c * d - b > 0) {
    console.log(Math.ceil(a / (c * d - b)));
  } else {
    console.log(-1);
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
