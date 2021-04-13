function Main(input) {
    input = input.split(" ");
    let R = parseInt(input[0], 10);
    console.log(R * 2 * 3.14)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));