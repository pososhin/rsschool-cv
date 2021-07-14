1. __Dmitrii Pososhin__
2. Contacts:
     * possoshin@gmail.com
     * possoshin (telegram)
     * Iff#5049 (discord)
3. About me
I like to set interesting goals for myself and achieve them. I always try to learn something new, but I work in a small organization where I’m the only one IT-specialist. Therefore I really want to get experience working with a team of professionals.
4. [Code examples](https://www.codewars.com/kata/reviews/53e612fe7e5c2caffd0000ef/groups/6060b8a5b240df000101ab79)
```javascript
function fib(n) {
    const matrix_mult = (a, b) => [
        [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
        [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
    ];
    const matrix_pow = (a, pow) => {
        let p = BigInt(pow) || 0n;
        let r = null;
        let c = a;
        while (p > 0) {
            if (p % 2n) r = (r) ? matrix_mult(r, c) : c;
            c = matrix_mult(c, c);
            p = p / 2n;
        }
        return r;
    };
    let num = BigInt(n) * ((BigInt(n) < 0n) ? -1n : 1n);
    if (num < 2n) return num;   
    return matrix_pow([[0n, 1n], [1n, 1n]], num)[1][0]
        * ((BigInt(n) < 0n) ? (num % 2n) * 2n - 1n : 1n);
}
};
```
5. Experience
Full-Stack Developer experience over 15 years JS, ES6, Node.js, React, HTTP5, CSS3, REST, JSON, AJAX, Websocket, Webpack, Git, Bash, Python, Perl, PostgreSQL, MySQL, MS SQL
6. Education
SPBPU 5th year graduate
7. English
I am working hard on this issue at the moment. I didn't have any language practice.