function main(input) {
    input = input.trim();
    let N = parseInt(input[0])
    let H = parseInt(input[1])

    if (N >= true) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))