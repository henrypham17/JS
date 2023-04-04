'use strict';  // Kích hoạt chế độ nghiêm ngặt

// Functions
function logger() {
    console.log('hi');
}
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juices with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(9, 9);
console.log(appleJuice);


// Functions Declarations vs Expressions (Khai báo hàm so với biểu thức)
// Function Declarations (Hàm khai báo)
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
const age = calcAge1(1991);

// Function expression (Hàm biểu thức)
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge2(1991);
console.log(age, age1);


// Arrow Functions (Hàm mũi tên)
const calcAge3 = birthYear => 2023 - birthYear;
const age2 = calcAge3(1991);
console.log(age2);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age; // thoi gian nghi huu
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'John'));

// Functions Calling Other Functions (Cách gọi hàm khác)
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


/* CODING #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
2. Usethefunctiontocalculatetheaverageforbothteams
3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
5. Ignoredrawsthistime
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉 */
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgDolphins * 2 < avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
}
checkWinner(scoreDolphins, scoreKoalas);


// Array
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// Basic Array Operations (Methods)
const friendss = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friendss.push('Jay');  // them phan tu vao cuoi day
console.log(friendss);
console.log(newLength);

friends.unshift('John');  // them phan tu vao dau day
console.log(friendss);

// Remove elements
friendss.pop(); // xoa phan tu cuoi day
const popped = friendss.pop();
console.log(popped);
console.log(friendss);

friendss.shift(); // xoa phan tu dau day
console.log(friendss);

console.log(friendss.indexOf('Steven'));  // kiem tra phan tu nam o vi tri nao
console.log(friendss.indexOf('Bob'));

friendss.push(23);
console.log(friendss.includes('Steven'));  // kiem tra phann tu co trong day khong
console.log(friendss.includes('Bob'));
console.log(friendss.includes(23));

if (friendss.includes('Steven')) {
    console.log('You have a friend called Steven');
}


/* CODING CHALLENGE #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉 */
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bill = [100, 250, 350];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(bill, tips, total);


// Dot vs. Bracket Notation
const Jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(Jonas);

console.log(Jonas.lastName);
console.log(Jonas['lastName']);

const nameKey = 'Name';
console.log(Jonas['first' + nameKey]);
console.log(Jonas['last' + nameKey]);

// console.log(Jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (Jonas[interestedIn]) {
    console.log(Jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

Jonas.location = 'Portugal';
Jonas['twitter'] = '@Jonasschmedtman';
console.log(Jonas);

// Challenge
console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is called ${Jonas.friends[0]}`);


// Object Methods
const JoNas = {
    firstName: 'JoNas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {  // Trả về Chuỗi tóm tắt được sử dụng để tạo thông báo.
        return `${this.firstName} is a ${this.calcAge()}-year old ${JoNas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(JoNas.calcAge());
console.log(JoNas.age);
// Challenge
console.log(JoNas.getSummary());


/* CODING CHALLENGE #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. */
const Mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.bmi = this.mass / this.height ** 2;
    }
};
const John = {
    name: 'John Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.bmi = this.mass / this.height ** 2;
    }
};
Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi, John.bmi);

if (Mark.bmi > John.bmi) {
    console.log(`Mark's BMI ${Mark.bmi} is higher than John's ${John.bmi})!`);
} else {
    console.log(`John's BMI ${John.bmi} is higher than Mark's ${Mark.bmi}!`)
}


// Vong lap LOOP
// Looping Arrays, Breaking and Continuing
const JONAS = [
    'JONAS',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];
for (let i = 0; i < JONAS.length; i++) {
    // Reading from JONAS array
    console.log(JONAS[i], typeof JONAS[i]);

    // Filling types array
    // types[i] = typeof JONAS[i];
    types.push(typeof JONAS[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < JONAS.length; i++) {
    if (typeof JONAS[i] !== 'string') continue;

    console.log(JONAS[i], typeof JONAS[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < JONAS.length; i++) {
    if (typeof JONAS[i] === 'number') break;

    console.log(JONAS[i], typeof jonas[i]);
}


/* CODING CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉 Bonus:
4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements) 
4.3. Call the function with the 'totals' array */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = [];
const totals = [];
const calcTipp = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i < bills.length; i++) {
    const tip = calcTipp(bills[i]);
    tipss.push(tip);
    totals.push(bills[i] + tipss[i]);
}
console.log(tipss);
console.log(totals);

const CalcAverage = function (arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s / arr.length;
}
console.log(CalcAverage(bills));