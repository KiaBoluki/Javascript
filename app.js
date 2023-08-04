const number1 = 5;
const number2 = 6;

if (number1 > 0) {
  /*
    NOT GLOBAL SCOPE 
    */
  // number3++;

  let number3 = 8;
    number3 ++;



  console.log(number3);
}

if (number1 > 1) {
  /*
    NOT GLOBAL SCOPE 
    */
  console.log(number3);
}

/*

GLOBAL SCOPE 
بخش عمومی 
*/
