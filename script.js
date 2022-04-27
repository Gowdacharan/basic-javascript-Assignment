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


//problem 8

 function removeSpaces(str) {
        
        var count = 0;
 
        
        for (var i = 0; i < str.length; i++)
          if (str[i] !== " ") str[count++] = str[i];
         
 
        return count;
      }
 
      
      var str = "LoremIpsum".split("");
      var i = removeSpaces(str);
      document.write(str.join("").substring(0, i));
      let length = str.length;
      console.log(str.length)



//problem 9


let root1, root2;


let a = 1;
let b = 5;
let c = 6;


let discriminant = b * b - 4 * a * c;


if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}




 







 
  
  
 



   

