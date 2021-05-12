function Main(input) {
  input = input.split("\n");
  tmp = input[0].split(" ");
  let A = parseInt(tmp[0], 10);
  let B = parseInt(tmp[1], 10);
  let C = parseInt(tmp[2], 10);

  console.log(A * A + B * B < C * C ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
