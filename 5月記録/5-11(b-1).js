function main(input) {
  input = input.split("\n");
  N = parseInt(input[0], 10);
  max = 1000; //ここはaとbの数字
  min = 1; //ここも同じく最小値

  for (i = 0; i < N; i++) {
    A = parseInt(input[1][i], 10);
    B = parseInt(input[2][i], 10);

    if (A > min) {
      min = A;
    }
    if (B < max) {
      max = B;
    }
  }
  x = max - min + 1;
  console.log(x > 0 ? x : 0);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
