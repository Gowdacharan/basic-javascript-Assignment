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


//problem 2

function sum_Of_Cubes(n) {
  let sumn = -1;

  for (let i = 1; i <= n; i++) {
    sumn += i ** 3;
  }
  return sumn;
}

console.log(sum_Of_Cubes(2));


// problem 3

const side1 = 20;
const side2 = 20;
const side3 = 20;


const s = (side1 + side2 + side3) / 2;


const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);


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


// problem 7

const a7 = 4, b7 = 5;
const N = 321;
const findNthTerm = (first, second, num) => {
   const diff = second - first;
   const fact = (num - 1) * diff;
   const term = first + fact;
   return term;
};
console.log(findNthTerm(a7, b7, N));




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

    
    console.log(` ${root1} and ${root2}`);
}


else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    
    console.log(`${root1} and ${root2}`);
}


else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    
    console.log(
    ` ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}


// problem 14

function leftRotate(arr, d, n6)
{
    for (let i = 0; i < d; i++)
        leftRotatebyOne(arr, n6);
}
  
function leftRotatebyOne(arr, n6)
{
    let i, temp = arr[0];
    for (i = 0; i < n6 - 1; i++)
        arr[i] = arr[i + 1];
  
    arr[n6 - 1] = temp;
}
  

function printArray(arr, size)
{
    for (let i = 0; i < size; i++)
        console.log(arr[i] + " ");
}
 

let arr = [1,2,3,4,5,6,7];
let n6 = arr.length;
let k = 2;
     
leftRotate(arr, k, n6);
printArray(arr, n6);



//problem 15


function evaluatePostfix(exp)
{
    
        let stack=[];
          
      
        for(let i=0;i<exp.length;i++)
        {
            let c=exp[i];
              
      
            if(! isNaN( parseInt(c) ))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
              
            
            else
            {
                let val1 = stack.pop();
                let val2 = stack.pop();
                  
                switch(c)
                {
                    case '+':
                    stack.push(val2+val1);
                    break;
                      
                    case '-':
                    stack.push(val2- val1);
                    break;
                      
                    case '/':
                    stack.push(val2/val1);
                    break;
                      
                    case '*':
                    stack.push(val2*val1);
                    break;
              }
            }
        }
        return stack.pop();  
}
 

let exp="531*+9-";
console.log("problem 15 output is: "+evaluatePostfix(exp));
 




   

