function main(input) {
    let N = parseInt(input[0], 10);
    console.log(N + 1 / 2)

}
main(require("fs").readFileSync("/dev/stdin", "utf8"))