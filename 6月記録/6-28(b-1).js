function main(input) {
  input = input.split("\n");
  let [h, w] = input[0].split(" ").map(Number);

  let max = 100;
  let min = 0;

  //h行の全探索
  for (let i = 0; i <= h; i++) {
    //ここで数字をとってくる
    row = input[1].split(" ").map(Number);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
