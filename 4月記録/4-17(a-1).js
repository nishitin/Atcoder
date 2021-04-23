function main(input) {
    input = input.trim().split(" ")
    let X = parseInt(input[0], 10);
    let Y = parseInt(input[1], 20);
    let Z = parseInt(input[2], 30);
    console.log((Y * Z - 1) / X)
}
main(require("fs").readFileSync("/dev/stdin", "utf8"))