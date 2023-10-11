function numbers(n) {

    const num = [];
    for (let i = 2; num.length < n; i++) {
        let flag = false;
        for (let count = 0; count < i; count++) {
            if (i % num[count] === 0) {
                flag = true;
                break;
            }
        }
        if (flag === false) {
            num.push(i)
        };

    }
    return num;
}


console.time();
console.log(numbers(process.argv[2]));
console.timeEnd();