function main(input) {
  const [X, A] = input
    .trim()
    .split(" ")
    .map((n) => parseInt(n, 10));

  if (X < A) {
    console.log(0);
  } else {
    console.log(10);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
