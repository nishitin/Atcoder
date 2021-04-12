function Main(input) {
    input = input.trim(" ").split('\n');
    let N = parseInt(input[0], 10);

    function AtCoder(s) {
        reverse();
        return s.join() == rvs.join();
        // ここでsが0でrvsが他の数字とおく
    }

    if (N == 0) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));