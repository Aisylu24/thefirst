const myTown = {
    town: "La",
    small:true,
    hello: function () {console.log('Hi')},
    bye() {console.log('goodbye')}
}

console.log(myTown)

myTown.country = 'Russia'
console.log(myTown)


const repablicName = 'repablic'

myTown[repablicName] = 'Tatarstan'
myTown.hello()
myTown.bye()


/* {"userId":1,
"id":1,
"title": "Test title",
"status": {"completed": false}} 

JSON.parse 


{userId:1,
id:1,
title: 'Test title',
status: {completed: false}}


*/

const person = {name: 'Ice',
age:25}

const person2 = Object.assign({},person)

/* вариант 2 const person2 = {... person}
person2.name = 'Alice'
вариант 3 здесь вложеннные ссылки не сохраняются
const person2 = JSON.parse(JSON.stringify(person))
person2.name = 'Alice'


*/


person2.age=26
console.log(person.age)



let a = 5
let b = 3

function sum(a,b)
{ const c=a+b
console.log(c) }

sum(a,b)

a=8
b=12

sum(a,b)



 //Передача значения по ссылке //

const personOne = {
    name: 'Ai',
    age:25
}


function increasePersonAge(person) {
person.age += 1
return person

}
increasePersonAge(personOne) 
console.log(personOne.age)


// внутри функции не рекомендуется мутировать внешние объекты //

//создание копии объекта //

const person1 = {
    name:'Ai',
    age:5
}

function increasePersonAge(person) {
    const updatedPerson = Object.assign({},person)
    updatedPerson.age+= 1
    return updatedPerson

}

const updatedPerson1 = increasePersonAge(person1)

console.log(person1.age)
console.log(updatedPerson1.age)


// Колбэк функции //

function printMyName() {
    console.log('Ai')
}

console.log('Start') 

setTimeout(printMyName,3000)


const button = {
    width: 200,
    color: 'blue'
    }
               const redButton = { 
    ...button, 
    color:'red'}
    
    console.table(redButton)
    console.table(button)

const town = 'La'
const name = 'Ai'

const live = "Меня зовут " +`${name}` + ' и я живу в ' + `${town}`
console.log(live)


setTimeout(function() {
    console.log('отложенное сообщение') },1000) 


    //стрелочаня функция = это выражнние и они анонимные всегда// 

    /* (a,b) => {
let c
 a=a+1 
 c = a+b 
 return c } */
  
    // how to give a function name 

  //  const myFn = (a,b) => {}

   //  myFn(5,3)

    //стрелоч функция в вызове другой функции 

    setTimeout(() => {
        console.log('отложенное сообщение') },1000) 

// сокращения стрелоч функция  
//a => {}  
// (a,b) => a+b 


// значени парамтеров функции по умолчанию 
 function multByFactor(value, multiplier = 1) {
     return value * multiplier
 }

 multByFactor(10,2) // 20
 multByFactor(5) // 5


 // example 2 неявный возврат обЪекта
  
 const newPost = (post, addedAt = Date()) => ({  // неявный возврат обЪекта 
      ...post,
      addedAt,
  })

  const firstPost = {
      id:1,
    author: 'Aisylu'
    }

    newPost(firstPost)

    console.log(newPost(firstPost))
  

/* const error = () => {
    throw new Error('Some error')
}

error()

console.log('Continue...') */

// try / catch

const fnError = () => {
    throw new Error('Some error')
}

try { fnError()
}
catch(error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')


// формат записи массивов

const myArray = [1,2,3]
console.log(myArray)


const myArray2 = new Array(1,2,3)
console.log(myArray2)


// push 

const myArr = [1,2,3]

myArr.push("t")
console.log(myArr)

myArr.push(true)

console.log(myArr)

// pop - удаляет последний элемент массива

const myArr12 = [1,2,3]

myArr12.pop()
console.log(myArr12)

const removedElement = myArr12.pop()

console.log(myArr12)
console.log(removedElement)


// unshift - добавление нового элемента в начале массива

const myArr123 = [1,2,3]
console.log(myArr123)

myArr123.unshift(false)
console.log(myArr123)

myArr123.unshift(true)

console.log(myArr123)

// shift

const myArrShift = [1,2,3]

console.log(myArrShift)

myArrShift.shift()
 
console.log(myArrShift)

const removedElement1 = myArrShift.shift()

console.log(myArrShift)
console.log(removedElement1)

/* forEach - ожидает калбэк функцию, но не меняет массив 
и не возвращает новый массив */

const myArry = [1,2,3,6]
console.log(myArry)

myArry.forEach(el => console.log(el * 2))

console.log(myArry)

const res = myArry.forEach(el => console.log(el * 2))

console.log(res)

 
/* map - ожидает калбэкфункцию, но МЕНЯЕТ массив 
и ВОЗВРАЩАЕТ новый массив */

const myArry55 = [1,2,3,6]
console.log(myArry55)
const newArry55 = myArry55.map(el => (el * 3))

 /* const newArry55 = myArry55.map((el) => {
    el * 3 } 
    код с блоком ничего не возвращает, ПОЭТОМУ нужно добавить
    return перед el * 3 */  

console.log(newArry55)
console.log(myArry55)


// деструктуризация объектов

const useProfile = {
name1: 'Ai',
comments: 23,
hasSignedAgreement: false,}

const {name1, comments} = useProfile
const {hasSignedAgreement} = useProfile

console.log(name1);
console.log(comments);


// деструктуризация массивов

const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

console.log(fruitOne);
console.log(fruitTwo);


// деструктуризация в функциях

const userProfile3 = {
name: "AAA",
comments: 23,
hasSignedAgreement: false, 
}

const userInfo3 = ({name, comments}) => {
    if (!comments) {
        return `User ${name} has no comments`

    }
    return `User ${name} has ${comments} comments`
}

userInfo3(userProfile3)

console.log(userInfo3(userProfile3))

//условные инструкции 

// инструкция if 

/* if (условие) {
    блок кода выполняемый ОДНОКРАТНО, если условие правдиво
} */


let val = 10

if(val>5) {
    val+=20
}

console.log(val);

const person3 = {
age:30
}

if (!person3.name) {
console.log('имя не указано')

}

!undefined === true

//  инструкуция if else

/* if (условие) {
    блок кода выполняемый ОДНОКРАТНО, если условие правдиво
} else {
блок кода выполняемый ОДНОКРАТНО, если условие ЛОЖНО
}
    */

let val = 10

if(val<5) {
    val+=20
} else{
    val-=20
}

console.log(val);

//  инструкуция if else if

/* if (условие 1 ) {
    блок кода выполняемый ОДНОКРАТНО, если условие 1 ПРАВДИВО
} else if(условие 2) {
блок кода выполняемый ОДНОКРАТНО, если условие 2 ПРАВДИВО 
} else {
блок кода выполняемый ОДНОКРАТНО, если условиЯ ЛОЖНЫ

}

лучше взять вместо всех этих условий 3 раза if код будет более
читабельный
 if (условие 1 ) {
    блок кода выполняемый ОДНОКРАТНО, если условие 1 ПРАВДИВО

 if (условие 2 ) {
    блок кода выполняемый ОДНОКРАТНО, если условие 2 ПРАВДИВО

 if (условие 3 ) {
    блок кода выполняемый ОДНОКРАТНО, если условие 3 ПРАВДИВО

    */


    const age = 17

/* if (age>18) {
    console.log('adult');
} else if (age>= 12) {
    console.log('teen') 
} else {console.log('child');} */



if (age >= 18) {
    console.log('adult');
} 

if (age>= 12 && age < 18) {
    console.log('teen') 
}

if (age < 12)  {
    console.log('child');
}


// использование if в функциях 

const sumPositiveNum =(a,b) => {
    if ( typeof a !== 'number' || typeof b !== 'number') 
    { 
        return 'One of the arguments is not a number'
    }

    if(a<= 0 || b <= 0) {
        return 'Numbers are not positive'
    }
    return a+b }

    console.log( sumPositiveNum(5,5));
   
    console.log(sumPositiveNum(5,true));
    
    console.log(sumPositiveNum(5,-5));
    

// инструкция switch альтернатива if else if

switch(Выражение) {
    case A:
        // действия если выражение === A
        break
        case B:
            // действия если выражение === B
            break
            default:
                // действия по умолчанию

}


const month = 2

swithc(month) {
    case 12:
        console.log('December');
        break
    case 1:
        console.log('January');
        break
    case 2:
        console.log('February');
        break
        default:
            console.log('it is not a winter month');

    }

    /* тернаррный оператор у него 3 операнда, конструкция 
    с тернарным оператором выражение, а выаражение возвращает
     значение */

// Условие ? Выражение1: Выражение 2

// условие любое выражение или просто переменная

// если условие правдиво тогда возврат результат Выраж 1
// если условие ложно тогда возврат результат Выраж 2

/* Условие
? Выражение 1
: Выражение 2 */

const value = 11 

// выражение инструкция

value
? console.log('true')
: console.log('false')



const value11 = 11 
const value22 = 25

value11 && value22
? myFunction1(value11,value22)
: myFunction2()


let valuee = 11

console.log((valuee >=0 ? valuee: - valuee )); //11


val5 = -5

const ress = val5 >=0? val5: -val5
console.log(ress);


// цикл for
/* 
for (Началальная инструкция; Условие; Итерационное действие){

 Блок кода, выполняемые на каждой итерации   
} */


for(let i=0; i< 5; i++) {
    console.log(i);
}


// для массиво лучше брать метод foreach вместо for

const myArray111 = ['первый','второй','третий']

myArray111.forEach((element, index) => {
    console.log(element,index);
})

//здесь кол бэк функция, она вызывается сколько элементов массива


// цикл while

while (условие) {
   // блок кода, выполняемый на каждой итерацияя
}

let i=0

while(i<5) {
    console.log(i);
    i++
}




// цикл do while но он выполниться 1 раз точно 

do { // блок кода, выполняемый на каждой итерацияя
} while (условие) 
 
/* let i = 0 

do {
    console.log(i);
    i++
} while (i<5) */


 let m = 10 

do {
    console.log(m)
    m++
} while (m<5) // выполниться один цикл 10


// цикл for in 

for(key in Object) {
    // действия с каждым свойством объекта
    // значения свойства - Object[key]
}

const myObjqct = {
    x:10,
    y: true,
z:'abc'
}

for (const key in myObjqct){
    console.log(key, myObjqct[key])
}


// foreach для обьектов

const myObject = {
    x:10,
    y: true,
z:'abc'
}

Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})


/* 
Object.values(myObject).forEach(value => {
    console.log(value)
}) */


//for in  для массивов
const myArray9 = [true, 10, 'abc', null]

for(const key in myArray9) {
    console.log(myArray9[key]);
}  // не рекомендуется

// цикл for of 

for(Element of Iteralable) {
    //действия с определенным элементом
}

const myString11 = 'hey'

for ( const letter of myString11) {
    console.log(letter);
}

const array = [true,10,'abc', null]
for (const element of array) {
    console.log(element);
}  // не рекомендуется 








// class


class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0

    }
    upvote() {
        this.votesQty += 1
    }
}

// создание экземпляра new
const firstComment = new Comment('First Comment')

 console.log(firstComment);

 firstComment instanceof Comment // true
 firstComment instanceof Object // true


 


 // вызов методов 

 firstComment.upvote()
 console.log(firstComment.votesQty);
 firstComment.upvote()
 console.log(firstComment.votesQty);



 firstComment.votesQty
 // 0

 firstComment.upvote()
 //undefined

 firstComment.votesQty
 //1

 
 firstComment.upvote()
 //undefined

 firstComment.votesQty
 //2

 
//проверка принадлежности свойств экземпляра объекта
 
firstComment.hasOwnProperty('text')
firstComment.hasOwnProperty('votesQty')
firstComment.hasOwnProperty('upvote')
console.log(firstComment.hasOwnProperty('hasOwnProperty'));



 

// создание нескольких экземпляров

secondComment = new Comment('2 comm')

secondComment.votesQty // 0

secondComment.upvote()

secondComment.votesQty // 

//статические методы

/* static mergeComments(first, second) {
    return `${first} ${second}` */
}

 // Comment.mergeComments('First comm.','Second com')
 


 // расширение других классов
// родительский конструктор вызовется автоматически
   
 class NumbersArray extends Array {
    sum() {
        return this.reduce((el,acc) => acc += el,0)
    }
}

const myArray = new NumbersArray(2,5,7)

console.log(myArray);
myArray.sum()
console.log(myArray.sum())

 
// строки и числа ведут себя как объекты

//промисы
/* позволяют обрабатывать отложенные во времени события
или обещения предоставить результат позже
промис может вернуть ошиьку если результат предоставить 
невозможно
состояние промиса = ожиадние исполнен отклонен
промис это объект
*/

const myProm = new Promise((resolve, reject) => {
    /*
 выполнение асинхронных действий
 Внутри этой функции нужно в резльтате вызвать одну из функций
  resolve или reject */

});

//вновь созданный промис будет в состояние pending

myProm
.then.(value => {
/** 
 * Действия в случае успешного исполнения Промиса
 * Значение value  - это значение, переданное в вызове функции
  resolve внутри промиса
 */  })

 .catch(error => {
    /**
     * Действия в случае отклонения Промиса
     * Значение error - это значение, переданное в вызовве ф
     функции   rejectвнутри промиса
     */
 })


 // получение данных с помощью fetch api только в браузере
/*
 fetch('https://jsonplaceholder.typicode.com/')
 .then(response => response.json())
 .then(json => console.log(json))
 .catch(error => console.error(error)) // 
 console.log(error.message))*/

 fetch('https://jsonplaceholder.typicode.com/')
 .then(response => {
     console.log(response);
     return response.json()
 } )
    
 .then(json => console.log(json))
 .catch(error => console.error(error))


const getData = (url) =>
new Promise((resolve,reject) =>
fetch(url)
.then(response => response.json())
.then(json => resolve(json))
.catch(error => reject(error)) 
)

getData('https://jsonplaceholder.typicode.com/todos')
.then(data => console.log(data))
 .catch(error => console.log(error.message)) 


 /* async / await 
 спец синтаксис для упрощения работы с промисами
 */

 // асинхронная функция 

 async function asyncF() {
     //всегда возвращает Промис
 }

 const asyncF = async () => {
     // всегда возвращает Промис
 }

 // пример 1

 const asyncF = async () => {
     return 'Success'
 }

 asyncF()
 .then(value => console.log(value))

 //пример 2
 const asyncF = async () => {
  throw new Error('There was an error')
}

asyncF()
.then(value => console.log(value))
.catch(error => console.log(error.message);)


 // await

/* const asyncFn = async () => {
    await <Promise>    }
    
asyncFn() */

/* внутри асинхронных функций
 можно ожидать результатов промисов */

 // пример 3


 // ожидание результата await 
  
 const timerPromise = () =>
 new Promise((resolve,reject) =>
 setTimeout(() => resolve(),2000))

 const asyncFn = async () => {
     console.log(('Timer starts')
     await timerPromise()
     console.log('Timer ended')
 }
 /* 
  const asyncFn = async () => {
     console.log('Timer starts')
    const startTime = performance.now() 
     await timerPromise()
     const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
 } 
 */


 asyncFn()


 //переход с промисов на async/await

 const getData = async (url) => {
const res = await fetch(url)
const json = await res.json()
return json
}


const url = https://jsonplaceholder.typicode.com/todos


const data = await getData(url) //нет обработки ошибок нет катч

/*
 try {
    const data = await getData(url) 
    console.log(data); }
    catch(error) {
        console.log(error.message);
    }

*/

// await только в асинхр функции

// лучше асинк и авайт чем промис

