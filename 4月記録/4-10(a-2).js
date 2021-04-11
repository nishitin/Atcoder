function Main(input) {
    input = input.split(" ");
    let A = parseInt(input[0], 10);
    let B = parseInt(input[1], 10);
    console.log(2 * A + 100 - B)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));