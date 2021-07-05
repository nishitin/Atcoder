function Main(input) {
  var data = input.split("\n");
  var n = data[1].split(" ").map((n) => parseInt(n, 10));
  var num = 0;
  for (var i = 0; i < parseInt(data[0]); i++) {
    num += 1 / n[i];
  }
  console.log(1 / num);
}
// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
