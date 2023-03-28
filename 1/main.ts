//Завдання 1

let city: string = 'Київ';
city = 'Львів';
let address: string = city;

console.log(address);

// Завдання 2

let numb: any = prompt('Введіть число');

+numb == 0
    ? console.log('Число нуль')
    : +numb % 2 == 0
        ? console.log('Число парне')
        : console.log('Число не парне');

// Завдання 3

function max(...arr: Array<number>): void {
    console.log(Math.max(...arr));
};

max(5, -2);

// Завдання 4

let getSqrt = (number?: any): void => {
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



