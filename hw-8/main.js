let separator = '--------------------------';
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
console.log('TASK - 1');
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
const users = [];
users.push(
    new User(1, 'vasya', 'odintsov', 'vasya@gmail.com', '011-11-11-111'),
    new User(2, 'petya', 'petrov', 'petya@gmail.com', '022-22-22-222'),
    new User(3, 'lyoha', 'hruzd', 'lyoha@gmail.com', '033-33-33-333'),
    new User(4, 'kyrylo', 'kyrylenko', 'kyrylo@gmail.com', '044-44-44-444'),
    new User(5, 'mykyta', 'mykytchenko', 'mykyta@gmail.com', '055-55-55-555'),
    new User(6, 'bohdan', 'bohdanov', 'bohdan@gmail.com', '066-66-66-666'),
    new User(7, 'max', 'maxymov', 'max@gmail.com', '077-77-77-777'),
    new User(8, 'roma', 'romanov', 'roma@gmail.com', '088-88-88-888'),
    new User(9, 'artem', 'artemchuk', 'artem@gmail.com', '099-99-99-999'),
    new User(10, 'anton', 'lox', 'anton@gmail.com', '099-55-55-111')
);
console.log(users);
console.log(separator);



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log('TASK - 2');
const usersWithEvenId = users.filter(user => user.id % 2 === 0);
console.log(usersWithEvenId);
console.log(separator);



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('TASK - 3');
const sortedUsersById = users.toSorted((prev, next) => prev.id - next.id);
console.log(sortedUsersById);
console.log(separator);



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
console.log('TASK - 4');
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
const clients = [];
clients.push(
    new Client(1, 'vasya', 'odintsov', 'vasya@gmail.com', '011-11-11-111',
        ['item1']),
    new Client(2, 'petya', 'petrov', 'petya@gmail.com', '022-22-22-222',
        ['item4', 'item5', 'item6', 'item40', 'item90', 'item100']),
    new Client(3, 'lyoha', 'hruzd', 'lyoha@gmail.com', '033-33-33-333',
        ['item7', 'item8']),
    new Client(4, 'kyrylo', 'kyrylenko', 'kyrylo@gmail.com', '044-44-44-444',
        ['item10', 'item11', 'item12']),
    new Client(5, 'mykyta', 'mykytchenko', 'mykyta@gmail.com', '055-55-55-555',
        ['item13', 'item14']),
    new Client(6, 'bohdan', 'bohdanov', 'bohdan@gmail.com', '066-66-66-666',
        ['item16', 'item17', 'item18']),
    new Client(7, 'max', 'maxymov', 'max@gmail.com', '077-77-77-777',
        ['item19']),
    new Client(8, 'roma', 'romanov', 'roma@gmail.com', '088-88-88-888',
        ['item22']),
    new Client(9, 'artem', 'artemchuk', 'artem@gmail.com', '099-99-99-999',
        ['item25', 'item26', 'item27', 'item32']),
    new Client(10, 'anton', 'lox', 'anton@gmail.com', '099-55-55-111',
        ['item28', 'item29', 'item30, item31'])
);
console.log(clients);
console.log(separator);



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('TASK - 5');
const clientsSortedByOrderLength = clients.toSorted((prev, next) => prev.order.length - next.order.length);
console.log(clientsSortedByOrderLength);
console.log(separator);



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('TASK - 6');
function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
};
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function() {
    console.log(`Current car info:
    model => ${this.model},
    manufacturer => ${this.manufacturer},
    yearOfManufacture => ${this.yearOfManufacture},
    maxSpeed => ${this.maxSpeed},
    engineCapacity => ${this.engineCapacity}`);
};
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function(newSpeed) {
    this.maxSpeed = newSpeed;
};
// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function(newValue) {
    this.yearOfManufacture = newValue;
};
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function(driver) {
  this.driver = driver;
};
let car = new Car('some model', 'some company', 2020, 300, 20);
car.info();
car.drive();
car.increaseMaxSpeed(500);
car.changeYear(2024);
console.log(separator);
console.log('after changing year and speed');
car.info();
car.addDriver({name: 'vasya', age: 31});
console.log(separator);
console.log('adding driver');
console.log(car);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('###########################################');
console.log('TASK - 7');

//      можна по-ідеї також потім по-за класом додати методи через prototype і тоді не додавати поле driver,
//      але я вирішив відразу додати поле driver, аби відразу в класі прописати всі методи
//      і тепер я просто зроблю перевірку driver на null у методі info(), щоб якщо це правда - не виводити інфу про нього

//      !!! пишу цей комент після того як вже вже зробив !!!
//      можливо завдання потребує використання саме prototype адже сказано додати поле driver методом addDriver(),
//      тобто його впринципі не має бути
//      бо я якось неправильно спочатку подумав, і крутився навколо методу info(), але поо суууутііііі
//      спочатку для уявного користувача цього поля не існує, а потім воно "з'являється" у тексті info()
//      у будь-якому випадку якщо я справді не так зрозумів, то вище я писав, що правильно в такому випадку через prototype
class CarByClass {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity, driver = null) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = driver;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        this.driver ?
            console.log(`Current car info:
                model => ${this.model},
                manufacturer => ${this.manufacturer},
                yearOfManufacture => ${this.yearOfManufacture},
                maxSpeed => ${this.maxSpeed},
                engineCapacity => ${this.engineCapacity},
                driver => ${JSON.stringify(this.driver)}`) :
            console.log(`Current car info:
                model => ${this.model},
                manufacturer => ${this.manufacturer},
                yearOfManufacture => ${this.yearOfManufacture},
                maxSpeed => ${this.maxSpeed},
                engineCapacity => ${this.engineCapacity}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.yearOfManufacture = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}
let car2 = new CarByClass('some model', 'some company', 2020, 300, 20);
car2.info();
car2.drive();
car2.increaseMaxSpeed(500);
car2.changeYear(2024);
console.log(separator);
console.log('after changing year and speed');
car2.info();
car2.addDriver({name: 'petya', age: 61});
console.log(separator);
console.log('adding driver');
//      оскільки тепер метод info() розрахований на наявність водія, то замість
//      console.log(car2);
//      я використаю метод info()
car2.info();
console.log(separator);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
console.log('###########################################');
console.log('TASK - 8');
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const girls = [
    new Cinderella('Anna', 20, 35),
    new Cinderella('Ezabel', 21, 36),
    new Cinderella('Begemotixa', 50, 50),
    new Cinderella('Sofa', 22, 37),
    new Cinderella('Lena', 23, 38),
    new Cinderella('Bella', 24, 39),
    new Cinderella('Vika', 25, 40),
    new Cinderella('Alyona', 26, 38),
    new Cinderella('Lizzy', 27, 36),
    new Cinderella('Mila', 28, 35),
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, findedSize) {
        this.name = name;
        this.age = age;
        this.findedSize = findedSize;
    }
}
const prince = new Prince('William', 24, 37);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let rightGirl = girls.find(girl => girl.footSize === prince.findedSize);
console.log(rightGirl);