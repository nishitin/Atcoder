function main(input) {
    const [A, B, C] = input.split(" ").map(Number)

    if (A * A + B * B <= C) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))