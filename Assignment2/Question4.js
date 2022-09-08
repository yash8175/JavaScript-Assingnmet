// A program to find the factorial of all prime numbers between a given range
function prime(a, b) {
    for (let i = a; i <= b; i++) {
        let num = 0;
        let fact = 1;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                num++;
                break;
            }
        }
        if (i > 1 && num == 0) {
            console.log(i);
            for (let k = 1; k <= i; k++)
                fact = fact * k;
            console.log("FACTORIAL", +fact);
        }
    }
}
prime(1, 10);
    