function main(input) {
    input = input.split(" ");

    let A = parseInt(input[0]);
    let B = parseInt(input[1]);
    console.log(A * B)

}
main(require("fs").readFileSync("/dev/stdin", "utf8"))