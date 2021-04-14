function main(input) {
    input = input.split("\n");

    let N = parseInt(input[0], 10);

    let c = 0;
    for (let i = 0; i < N; i++) {
        let [a, b] = input[i + 1].split(" ").map((x) => parseInt(x));
        c = a == b

    }

    main(require("fs").readFileSync("/dev/stdin", "utf8"))