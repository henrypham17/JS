let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN");
console.log(40 + 21 - 19);


// Kiểu dữ liệu boolean
let JSIsFun = true;
console.log(JSIsFun);

// Typeof
JSIsFun = 'yes';
console.log(typeof JSIsFun);

// let year;
// console.log(typeof year);

// year = 2023;
// console.log(year);

console.log(typeof null);

// let, const, var  

// basic operators
const a = 2023;
const ageA = a - 2000;
const ageB = a - 2003;
console.log(ageA > ageB);

// const firstName = 'Pham';
// const lastName = 'Quang';
// console.log(firstName + ' ' + lastName);


// CODING CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;;
console.log(markHigherBMI);
// console.log(BMIMark, BMIJohn, markHigherBMI);


//String and Template Literals(backticks)
const firstName = 'Johnas';
const job = 'teacher';
const birthday = 2003;
const year = 2023;

const jonas = "I'm " + firstName + ' , a ' + (year - birthday) + ' years old ' + job;
console.log(jonas);

const jonasnew = `I'm ${firstName} , a ${year - birthday} years old`;
console.log(jonasnew);

console.log('String with \n\
multiple \n\
lines');

console.log(`Srting with
multiple
lines`);


// if-else
const age = 15;
if (age >= 18) {
    console.log('Sarah can start driving license 🚘');
} else {
    const yearLeft = 18 - age;
    console.log(`Wait another ${yearLeft} years`);
}

const yearBirthday = 2003;
let century;
if (yearBirthday < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);

// CODING CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
const mass_Mark = 78;
const mass_John = 92;
const height_Mark = 1.69;
const height_John = 1.95;

BMIMark = mass_Mark / height_Mark ** 2;
BMIJohn = mass_John / height_John ** 2;

let mark_HigherBMI = BMIMark > BMIJohn;;
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!")
}

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}


// Type Conversion and Coercion (ép kiểu chuyển đổi và ép buộc)
// Type Conversion
const inputYear = '2023';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('John'));
console.log(typeof NaN);

// Coercion
console.log('I am ' + 23 + 'years old');
console.log('23' - '10' + '3');


// Truthy and Falsy Values (giá trị thực và giả trị ảo)  5 giá trị ảo(falsy values): 0, ' ', undefined(không xác định), NULL, NaM
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log('John');
console.log(Boolean({}));
console.log(Boolean(' '));

const money = 0;  // money = 0, sẽ chuyển thành false vì 0 là giá trị không xác định nên hiểu thành Boolean
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height;   // height là giá trị không xác định
if (height) {
    console.log("Yay!");
} else {
    console.log("UNDEFINED");
}


// Equality Operators == VS === (Toán tử == ===)
const aGe = '18';
if (aGe === 18) console.log('strict'); // so sanh nghiem ngat hon
if (aGe == 18) console.log('loose');  // so sanh gia tri (lỏng lẻo)

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
    console.log('amazing');
} else {
    console.log('Number not 23');
}


// CODING CHALLENGE #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (89 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins gianh cup');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas gianh cup');
} else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log("Hoa");
} else {
    console.log("Khong doi nao gianh cup");
}


// Switch - case
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Go to');
        break;
    case 'tuesday':
    case 'sunday':
    default:
        console.log('Not a valid day');
}


// CODING CHALLENGE #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(`Bill la ${bill}, tip la ${tip}, tong hoa don la ${bill + tip}`);


// LECTURE: Values and Variables
// 1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
// 2. Logtheirvaluestotheconsole
let country = "Viet Nam";
let continent = "Asia";
let population = 100000000;

console.log(country);
console.log(continent);
console.log(population);