function main(input) {
    input = input.trim();
    input = input.split(" ").map(Number)
    console.log(Math.max(input[0] + input[1], input[0] * input[1], input[0] - input[1]))
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))