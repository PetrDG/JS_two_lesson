

function numbers(n){
    for (let a = 0; a <= n; a++) { 
        
        m=true
        for (let l = 2; l < a; l++) { 
            if (a % l === 0) {m=false};
        }

        if (m) {console.log(a)}; 
    }
    return 'Все простые числа выведены'
}

console.time();
console.log(numbers(process.argv[2]));
console.timeEnd();