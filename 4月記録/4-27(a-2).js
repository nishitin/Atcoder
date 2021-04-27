function main(input) {
    input = input.split(" ").map(Number)

    console.log(input[0] - input[1] + input[2]);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))