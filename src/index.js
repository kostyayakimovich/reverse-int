module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    }

    let res = String(n)
        .split("")
        .reverse()
        .join("");
    return Number(res);
};
