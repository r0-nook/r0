'use strict';
debugger;

let last[], today, cycleLength;
  let yearlast, yeartoday, todaymonth, lastmonth, day, i;
    yearlast = last[0] * 365;
    lastmonth = last[1] * 30;
    yeartoday = today[0] * 365;
    todaymonth = today[1] * 30;
  let lastr = yearlast + lastmonth + last[2];
  let todayr = yeartoday + todaymonth + today[2];
  let result = lastr - todayr;
  return result < cycleLength ? true : false;