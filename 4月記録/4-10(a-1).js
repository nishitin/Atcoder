function Main(input) {
    input = input.split(" ");
    let H = parseInt(input[0], 10);
    let A = parseInt(input[1], 10);
    console.log(Math.ceil(H / A))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));