//problem 1

function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}
let n = 5;
answer = factorial(n)
console.log(answer);

//problem 4

  var dt = new Date();
 var month = dt.getMonth();
 var year = dt.getFullYear();
daysInMonth = new Date(year, month, 0).getDate();
console.log(daysInMonth);


//problem 5

const celsius = 12;

const fahrenheit = (celsius * 1.8) + 32


console.log(fahrenheit);


//problem 6


const number = 10;

let sum = 0;


for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log(sum);



   

