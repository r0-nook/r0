// создание
let Person = {
 name : "Ivan",
 age : 25,
 hiredYear : 2017
}
// добавить в уже созданный обж
Person.name = "Ivan"
Person['name'] = "Ivan"

// удаление
delete Person.name;

// add metod
let person = {};                                  //Объявляем объект person
person.sayAge = n => {                    //Объявляем метод sayAge для объекта person
  console.log("Person is " + n + " years old");  //Тело метода sayAge - вывод текста
};
person.sayAge(n)

// обращение к свойствам обж из метода
let person = {name : "Ivan"}
person.sayName = function() {
  console.log("My name is " + this.name);
}

// обращение к содержимому свойствам
for(key in object) object[key]