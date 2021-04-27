function main(input) {
    input = input.split("\n")
    var S = input[0]
    var T = input[1]

    if (S === T.slice(0, T.length - 1)) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))