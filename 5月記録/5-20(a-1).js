function main(input) {
  let [A, B, C] = input.trim().split(" ").map(Number);

  console.log(A / C <= B ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
