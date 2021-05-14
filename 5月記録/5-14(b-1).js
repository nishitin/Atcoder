function main(input) {
  input = input.split(" ");
  let n = input[0];
  let o = input[1];

  for (let i = 0; i < o; i++) {
    if (n % 200 == 0) {
      n /= 200;
    } else {
      n = `${n}200`;
    }
  }
  console.log(n);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));

function main(input) {
  input = input.split(" ").map(Number);

  for (let i = 0; i < input[1]; i++) {
    if (input[0] % 200 == 0) {
      input[0] /= 200;
    } else {
      input[0] = String(input[0]) + "200";
    }
  }
  console.log(input[0]);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
