function main(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  let a = input[1].split(" ").map(Number);
  let b = input[2].split(" ").map(Number);
  let z = 0;

  for (let i = 0; i < a.length; i++) {
    z += a[i] * b[i];
  }
  console.log(z == 0 ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
