function main(input) {
  let s = input.trim().split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "9") {
      s[i] = "6";
    } else if (s[i] === "6") {
      s[i] = "9";
    }
  }
  let ans = s.reverse().join("");
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
