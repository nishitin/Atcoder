function main(input) {

    const x = +input.trim().split("\n")
    console.log(x === 1 ? "0" : "1")
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))