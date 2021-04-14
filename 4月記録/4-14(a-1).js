function main(input) {
    input = input.trim();

    let ans;
    if (input.slice(-1) == "s") {
        ans = input + "es"
    } else {
        ans = input + "s"
    }
    console.log(ans)
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));