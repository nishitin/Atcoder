function main(input) {
  const [a, b, c, d, e, f] = input.split("");
  if (c == d && e == f) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
