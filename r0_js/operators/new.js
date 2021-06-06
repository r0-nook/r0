// = new создаёт обж
//создаём пустой обж на переменных через фк

new /*тип объекта или имя фк*/ /*список параметров или наполнение фк*/
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Eagle", "Talon TSi", 1993);