function main(input) {
    input = input.split(" ")
    let a = BigInt(input[0], 10)
    let b = BigInt(input[1], 10)
    let c = BigInt(input[2], 10)
    let d = BigInt(input[3], 10)

    let max = a * c
    if (max < a * d) {
        max = a * d
    }

    if (max < b * d) {
        max = b * d
    }

    if (max < b * c) {
        max = b * c
    }
    console.log(max.toString())
}
main(require("fs").readFileSync("/dev/stdin", "utf8"))