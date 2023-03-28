let city = 'Київ';
city = 'Львів';
let address = city;
console.log(address);
let numb = prompt('Введіть число');
+numb == 0
    ? console.log('Число нуль')
    : +numb % 2 == 0
        ? console.log('Число парне')
        : console.log('Число не парне');
function max(...arr) {
    console.log(Math.max(...arr));
}
;
max(5, -2);
let getSqrt = (number) => {
    let type = typeof (number);
    type == 'undefined'
        ? console.log('Будь ласка, введіть число!')
        : type == 'string'
            ? console.log('Повинно бути числове значення.')
            : number <= 0
                ? console.log('Введіть додатнє число.')
                : console.log(Math.sqrt(number));
};
getSqrt(12);
