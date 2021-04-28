function main(input) {
    let X = Number(input)

    if (X >= 30) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))