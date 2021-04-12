function Main(input) {
    input = input.split(" ");
    let N = parseInt(input[0], 10);
    console.log(N - 1)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));