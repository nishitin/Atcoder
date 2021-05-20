function main(input) {
  let [A1, A2, A3] = input.split("\n").map(Number);

  if (A3 - A2 == A2 - A1) {
    console.log("Yes");
  } else if (A2 - A3 == A3 - A1) {
    console.log("Yes");
  } else if (A3 - A1 == A1 - A2) {
    console.log("Yes");
  } else if (A1 - A3 == A3 - A2) {
    console.log("Yes");
  } else if (A2 - A1 == A1 - A3) {
    console.log("Yes");
  } else if (A1 - A2 == A2 - A3) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
