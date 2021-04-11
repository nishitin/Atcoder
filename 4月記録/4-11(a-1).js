function Main(input) {
    input = input.split(" ");
    let a = parseInt(input[0], 10);
    let b = parseInt(input[1], 10);
    if (a + b == 15) {
        console.log("+")
    } else if (a * b == 15) {
        console.log("*")
    } else {
        console.log("x")
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));