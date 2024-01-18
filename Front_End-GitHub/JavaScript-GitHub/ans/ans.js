//                      **BASIC INPUT OUTPUT** 

/*

//  1) Make a variable user and initialize a value "Ram" and print it on console

var user;
user="Abhishek";
console.log(user);

//2) Make two variables and print their sum, mul, div, sub
var a=prompt("Enter Value of a Number");
var b=prompt("Enter Value of b Number");
console.log("Multiplication of a and b: "+a*b);
console.log("Division of a by b: "+a/b);
console.log("Substraction of a by b: "+(a-b));
console.log("Addition of a and b: "+a+b);



//3) Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
var s1=5,s2=6,s3=7;
var sP=(s1+s2+s3)/2;
console.log("Area of Triangle is : " + Math.sqrt((sP)*(sP-s1)*(sP-s2)*(sP-s3)));


//4) Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then print triple their sum.
   var i=prompt("enter value of i ");
   var j=prompt("enter value of j");
   i=parseFloat(i);
   j=parseFloat(j);
   const sum=i+j;
   if (i==j)
  { console.log(sum);}
   else 
  { console.log(3*(sum));}


   //5) Accept a number from a user and print it on console
    var num=prompt("enter value of number");
    num=parseFloat(num); //parseFloat is used to convert a string in  number
    console.log(num);


    //6) Ask a user his/her name and say hello (eg. "Hello Sarthak")
  
    var naam =prompt("enter your name ");
    alert("Hellloo "+naam);


    //7) Accept two integers from user and print the sum
   //  Ex - The sum of 45 & 12 = 57
    var p=prompt("enter value of m ");
    var q = prompt("enter value of n ");
    const summ=parseFloat(p)+parseFloat(q);
    console.log(summ);


    //8) Accept the User's name, age and print in following manner
  //Ex - Hello Shery, you are 12 years old.
     var namm=prompt("enter candidate name ");
     var age = parseFloat(prompt("enter candidate's age"));
     console.log("Hello "+namm+", you are "+age+" years old.")
     
*/


  //              **CONDITIONAL STATEMENTS** 

  //9) Accept two numbers and print the greatest between them

//    var n1=prompt("enter value of num1")
//    var n2=prompt("enter value of num2")
//    var gr=n2;
//    if(n1>n2)
//    gr=n1;
//    console.log("greater value between "+n1+" and "+n2+" is : "+gr);


   //10) Accept the gender from the user (M or F) and print the respective greeting message
   //Ex - Good Morning Sir (on the basis of gender)

//    var gen=prompt("enter your gender : M or m for male and f or F for female ")
//    if(gen=='M'||gen =='m')
//    console.log("Good Morning Sir");
//     else if(gen=='F'||gen =='f')
//    console.log("Good Morning Ma'am");
//    else
//    console.log("Wrong Input");


//11) Extend the previous program and handle the wrong inputs.
  //    Print Good Morning sir for input m or M & Good morning Mam for input F or f 
  //    else print Wrong Input
      
                //see  code of ques-10


//12) Accept an integer and check whether it is an even number or odd.
      // var intt= prompt("enter value of integer to check whether it is an even number or odd")
      // intt = parseFloat(intt);
      // if((intt%2)==0)
      // console.log(intt+" is an even number ");
      // else
      // console.log(intt+" it is an odd number");


//13) Accept name and age from the user. Check if the user is a valid voter or not.
//Vaid - Hello Shery, You are a valid voter.
//Invalid - Sorry Shery, you can't cast the vote.

//    var vName=prompt("enter your name ");
//    var vAge=prompt("enter your age ");
//    vAge=parseFloat(vAge);
//    if(vAge>=18)
//    console.log("Hello "+vName+", You are a valid voter.");
//    else {
//    console.log("Sorry "+vName+", You can't cast a vote. "+"You will be eligible to vote after "+(18-vAge)+" year.");
// };



// 14) extend preious program and Print after how many years the user will be eligible
                
  // see code of ques-13



// 15) Write a JavaScript program to find the largest of three given integers. 
   
      // var elem1=prompt("enter value of first interger ");
      // var elem2=prompt("enter value of second integer ");
      // var elem3=prompt("enter value of third integer ");
      // elem1=parseFloat(elem1);elem2=parseFloat(elem2);elem3=parseFloat(elem3);
      //  var anss;
      // if(elem1>elem2&&elem1>elem3)
      // anss=elem1;
      //  else if (elem2>elem1&&elem2>elem3)
      //  anss=elem2;
      // else
      // anss=elem3;
      // console.log("largest value of "+elem1+", "+elem2+" and "+elem3+" is : "+anss);



//16) ask a user his bijli ki units and if it is more than 100 unit 
   //calculate bill on the basis of 10 rs/ unit, 
   //if more than 50 units 8 rs/unit and if less 7 rs/unit

//     var elecUnit=prompt("enter total consumed unit ");
//     var bill;
//     elecUnit=parseFloat(elecUnit);
//     if(elecUnit>100)
//     bill=elecUnit*10;
//     else if (elecUnit>50)
//     bill=elecUnit*8;
//     else
//     bill=elecUnit*7;
//     console.log("Your total bill is : "+bill+" rupees.");




//17) ask a user his salary and if it is more than 1 lakh 30% tax 
//if more than 70k 20% tax and if more than 50k 10% tax and less than that
 //no tax and print tax amount and amount left after paying tax

//  var sal=prompt("enter you salary in thousands ");
//  sal=parseInt(sal); var taxx;
//  taxx=parseInt(taxx);
//  if(sal>70)
//  taxx=(20/sal)*100;
// else if (sal>50)
// taxx=(10/sal)*100;
// else 
// taxx=0;
// console.log("Your tax is : "+taxx+"k rupees , you have left "+(sal-taxx)+"k rupees of your salary.")




// 18) Ask a user 3 sides of triangle and check
// 	equilateral triangle
// 	isoscales trianle
// 	scalene triangle

// var sid1=prompt("enter first side ");
// var sid2=prompt("enter second side ");
// var sid3=prompt("enter second side ");

// if(sid1==sid2&&sid2==sid3)
// console.log("It is an equilateral triangle.");
// else if(sid1!=sid2&&sid2!=sid3)
// console.log("It is a scalene triangle.");
// else 
// console.log("It is isoscales triangle.");



//19) Accept a year and check if it a leap year or not 
//     var yearr=prompt("enter year ");
//     if(yearr%4==0 && yearr%100!=0 || yearr%400==0)
//     console.log(yearr+" is leap year.")
//       else 
//    console.log(yearr+" is not leap year.");




// 20) You are given a variable marks. Your task is to print:
// 	- A+ if marks is greater than 90.
// 	- A if marks is greater than 80 and less than or equal to 90.
// 	- B+ if marks is greater than 70 and less than or equal to 80.
// 	- B if marks is greater than 60 and less than or equal to 70.
// 	- C if marks is greater than 45 and less than or equal to 60.
// 	- D if marks is greater than or equal to 33 and less than or equal to 45.
// 	- F if marks is less than 33.


//  var marks=prompt("enter your marks ");var p;
//  if(marks>90)
//  p="A+";
// else if (marks>80)
// p="A";
// else if(marks>70)
// p="B+";
// else if (marks>60)
// p="B";
// else if (marks>45)
// p="C";
// else if (marks>=33)
// p="D";
// else
// p="F";
// console.log("Your grade is : "+p);









 //                       **ITERATIVE STATEMENTS**


// 21) Accept an integer and Print hello world n times

// var nItr=prompt("enter value of n ");
// nIte=parseFloat(nItr)
//       for (var a=0;a<nItr;a++)
//       {
//             console.log("Helllooo Duniya!");
//             console.log("This is PANDA");
//       }



//      22) Print natural number up to n. 

      // var nuM=prompt("enter value of n ");
      // for(let i=1;i<=nuM;i++)
      // {
      //       console.log(i);
      // }



// 23) Reverse for loop. Print n to 1.
      
      // var revN=prompt("enter value of N ");
      // for(let i= revN;i>0;i--)
      // { 
      //       console.log(i);
      // }




// 24) Take a number as input and print its table
// 5 * 1 = 5
// 5 * 2 = 10 ... up to 10 terms

// var table=prompt("enter value of which you want table ");
// for(let i=1;i<=10;i++){
//       console.log(i*table);
// }


//25) Sum up to n terms.

// var nSum=prompt("enter value upto which you want sum ");
// var nTotal=0;
// for(let i=1;i<=nSum;i++)
// {
//       nTotal+=i;
// }
// console.log("Sum of n terms is : "+nTotal);


// 26) Write a JavaScript program that iterates integers from 1 to 100.
//  But for multiples of three print "Abhishek" instead of the number 
//  and for multiples of five print "Pandey". 
//  For numbers multiples of both three and five print "PANDA".

//   for(let i=1;i<=100;i++)
//   {
//       if(i%3==0 && i%5==0)
//       {console.log("PANDA");}
//       else if (i%3==0)
//      { console.log("Abhishek");}
//       else if (i%5==0)
//       {console.log("Pandey");}
//       else 
//       {console.log(i);}
//   }




//26) Factorial of a number


//   var factN=prompt("enter number of which you want factorial ");
//   var totFact=1;
//       for(let a=factN;a>0;a--)
//       {
//             totFact*=a;
//       }
//       console.log("Factorial of "+factN+" is : "+totFact);



//28) Print the sum of all even & odd numbers in a range seperately.

// var evenSum=0;
// var oddSum=0;
// var fromNum=prompt("enter starting value of range");
// var toNumberr=prompt("Enter last value of range ");
// fromNum = parseInt(fromNum);
// toNumberr = parseInt(toNumberr);
// for(let i=fromNum;i<=toNumberr;i++)
// {
//       if(i%2==0)
//       evenSum+=i;
//       else
//       oddSum+=i;
// }
// console.log("Sum of all even numbers from "+fromNum+" to " +toNumberr+" is : "+evenSum);
// console.log("Sum of all odd numbers from "+fromNum+" to " +toNumberr+" is : "+ oddSum);





//29) Print all the numbers which are either divisible by 3 or 5 in a range 


// var st=parseInt(prompt("Enter startin value "));
// var en=parseInt(prompt("Enter last value of range "));
// for(let a=st;a<=en;a++)
// {
//       if(a%3==0||a%5==0)
//       console.log(a);
// }




//30) Print all the factors of a number.
    
//   var summm=0;
//   var Nummm=parseInt(prompt("enter value of number, of you want factors "));
//   for(let a=1;a<=Nummm;a++)
//   {
//       if(Nummm%a==0){
//       console.log(a);
//       summm+=a;
//       }
//   }
   
//   console.log("Sum of all factors of "+Nummm+" is : "+summm);



//31) Print the sum of all factors of a number, 50 - 1 + 2 + 5 + 10 + 25 = 43
          // see code of ques 30;


 //  32)  Accept a number and check if it a perfect number or not.
 // A number whose sum of factors(excluding number itself)  = Number 
// Ex -  6 = 1, 2, 3 = 6

//    var sumP=0;
//    var NumP=parseInt(prompt("check is perfect Num "));
//   for(let a=1;a<NumP;a++)
//   {
//       if(NumP%a==0){
//       sumP+=a;
//       }
//   }
//   if(NumP===sumP)
//   console.log(NumP+" is a Perfect Number.");
//   else
//   console.log(NumP+" is not a Perfect Number.");
   


//33) ask a user, a string and a number and addon the string n 
//number of times (if number is 3 and string is "hey" print "heyheyhey")

// var str=prompt("enter a string ");
// var N=parseInt(prompt("Enter value of N "));
// var res="";
// for(let a=0;a<N;a++)
// {
      
//       res+=str;
// }
// console.log(res);




//34) Seprate each digit of a number and print it on the new line

//   var nUMM=parseInt(prompt("Enter value of a number "));
//   var digit;
//   console.log("digits of Number : "+nUMM+ " are given below :")
//   while(nUMM>0)
//   {
//       digit=nUMM%10;
//       console.log(digit);
//       nUMM=Math.floor(nUMM/10);
//   }



//35) Check if the number is Prime or not.  

// var isP=parseInt(prompt("enter number to check is it prime or not "));
// var otp=isP+" is a Prime Number.";
// for(let s=2;s<isP;s++)
// {
//       if(isP%s==0)
//       {
//             otp= isP+" is not a Prime Number.";
//            break;
//       }
// }
//       console.log(otp);

//the above code can be optimized.because if isP is not a prime number, 
//it must have a factor that is less than or equal to its square root.


/*
optimize Code
var isP = parseInt(prompt("Enter a number to check if it is prime or not "));
var otp = isP + " is a Prime Number.";

// Optimize the loop by checking up to the square root of isP
for (let s = 2; s <= Math.sqrt(isP); s++) {
    if (isP % s == 0) {
        otp = isP + " is not a Prime Number.";
        break;
    }
}
console.log(otp);
*/
