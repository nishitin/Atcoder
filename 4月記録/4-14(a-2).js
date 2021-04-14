function main(input) {
    input = input.trim()

    let N = parseInt(input[0], 10);
    if (N[1] === "7" || N[2] === "7" || N[3] === "7") {
        console.log("Yes")
    } else {
        console.log("No")
    }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));