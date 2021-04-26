function main(input) {
    input = input.split(" ");
    var K = Number(input[0]);
    var X = Number(input[1]);
    var a = X - (K - 1);
    // ここで数字の-一の値と＋1の値を取ってくる
    var b = X + (K - 1);

    let rtn = " "
    for (let i = a; i <= b; i++) {
        rtn += i + " ";
    }
    console.log(rtn)
}


main(require("fs").readFileSync("/dev/stdin", "utf8"))