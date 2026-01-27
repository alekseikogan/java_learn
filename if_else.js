var num1 = Number(prompt());
var even = 0;
var odd = 0;

for (var i = 1; i <= num1; i++) {
    if (i % 2 != 0) {
        odd += i;
    } else {
        even += i;
    }
}
console.log("Количество четных чисел от 1 до " + num1 + " равно: " + even);
console.log("Количество нечетных чисел от 1 до " + num1 + " равно: " + odd);

let capitals = prompt().split(' ');
let an = "Андорра-Ла-Велла";
if ( capitals.includes(an) ) {
    let b = capitals.filter( function (i) {
        if (i.endsWith('а') == true) {
            b.push(i);
        }
    })
} else {
    let b = capitals.filter( function (i) {
        if (i.endsWith('н') == true) {
            b.push(i);
        }
    }
)};
console.log(b);