//Comment 
/* Multi Line 
    Comment 
*/

let name="Naga" // Declaring a variable 
console.log("test "+name) //Print the variable 
name="Mukil" //Reassign the value of variable 
console.log("Changed name "+name )

const nameCanNotChange="Harshitha" //Declaring the constant variable, Value can not be changed. 
console.log("Name can not changed "+nameCanNotChange)
// nameCanNotChange="Naga" // You can not change the value of this variable

// Create a function and assign to a variable.
var printHello=function(){
    for(var index=0;index<5;index++){
        console.log("Hello ")
    }
}
printHello(); //Calling a function

var positiveValue=5
console.log(-positiveValue) //Negative operator 
console.log("Concatinating "+"Strings") //String concatination 
console.log(nameCanNotChange=="Harshitha"?"Yes Name is correct":"OMG! its changed!")  //Conditional operator 

var findTheType=12
console.log(typeof findTheType) //typeof Operator 
