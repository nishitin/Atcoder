// function main(input) {
//   input = input.trim().split("\n");
//   let [n, m, t] = input[0].split(" ").map(Number);
//   let n2 = n;
//   let time = 0;

//   for (let i = 0; i < m; i++) {
//     let sTime = input[1].split(" ");
//     let eTime = input[1].split(" ");
//     n2 -= sTime - time;

//     if (n2 < 0) {
//       console.log("Yes");
//     }
//     n2 += eTime - sTime;
//     if (n2 > n) {
//       n2 = n;
//     }
//     time = eTime;
//   }
//   n2 -= t - time;
// }

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
