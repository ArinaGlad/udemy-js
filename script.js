const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

console.log(4 ='4');

function secondTask() {
    for (let i = 20; i > 9; i--) {
        
      if (i === 13) break;
      
      console.log(i);
  }
}

secondTask();

function calculateVolumeAndArea(a) {
    let result = '';
    if (typeof(a) != 'number') { 
        result = 'При вычислении произошла ошибка';
    } else {
        result = `Объем куба: ${a*a*a}, площадь всей поверхности: ${a*a*6}`;
    }
    return result;
}

function getCoupeNumber(n) {
    let result = '';
    if (typeof(n) != 'number' || n < 0 || !Number.isInteger(n)) {
        result = "Ошибка. Проверьте правильность введенного номера места";
    } if (n === 0 || n > 36) {
        result = "Таких мест в вагоне не существует";
    } else {
        for (let i = 1; i <= 9; i++) {
            if ((n - 4 * i) <= 4) {
                result = i;
            }
        }
    }
    return result;
    }

getCoupeNumber(9);
let n = 33;
let result = '';
for (let i = 1; i <= 9; i++) {
    if ((n - 4 * i) <= 4) {
        result = i;
        break;
    }
}

console.log(result);



const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    const {shops, height, moneyPer1m3, budget} = data;
    let result = 0;
    let volume = 0;
    let pay = '';
    for (let i = 0; i < shops.length; i++) {
        result += shops[i]['width'] * shops[i]['length'];
    }
    volume = result * height;
    if (budget > volume * moneyPer1m3) {
        pay = 'Бюджета достаточно';
    } else {
        pay = 'Бюджета недостаточно';
    }
    return pay;
}

isBudgetEnough(shoppingMallData);

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'weee'];

function sortStudentsByGroups(arr) {
    let result = [];
    let item = 'Оставшиеся студенты: ';
    let arr1 = arr.sort();
    let team1 = [];
    let team2 = [];
    let team3 = [];
    for (let i = 0; i < 3; i++){
        team1.push(arr1[i]);
    }
    console.log(team1);
    for (let i = 3; i < 6; i++){
        team2.push(arr1[i]);
    }
    console.log(team2);
    for (let i = 6; i < 9; i++){
        team3.push(arr1[i]);
    }
    console.log(team3);

    result.push(team1);
    result.push(team2);
    result.push(team3);
    
    for (let i = 9; i < arr1.length; i++) {
        if (i === arr1.length - 1){
            item += `${arr1[i]}`;
        } else {
            item += `${arr1[i]}, `;
        }
        console.log(item);
    }
    console.log(result.push(item));
}

sortStudentsByGroups(students);