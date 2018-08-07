// Function with the default values, Function with return types
function functionWithDefaultParams(name,dept="IT"){
    return "You name is "+name+" from "+dept    
}
console.log(functionWithDefaultParams("Naga"));
console.log(functionWithDefaultParams("Mukil","Designer"));
''
// Function with variable lenght of params 
function functionWithRestParams(...params){
    console.log(params.length);
    for(var index=0;index<params.length;index++){
        console.log("Value of index "+index+ " is "+params[index])
    }
}
functionWithRestParams("Naga")
functionWithRestParams("Naga","Ven","Mukil","Harsh")

//Function construction 
var addNumbers=Function("arg1","arg2","return arg1+arg2;");
function calculatorFunction(){
    var result;
    result=addNumbers(10,20)
    return result;
}
console.log("Adding 10 and 20: "+calculatorFunction());

//Recursion 
function fibonacci(first,second){
    if(second<200){
        return first+" "+fibonacci(second,first+second);
    }else return "";
}
console.log(fibonacci(1,1));

//Anonymous recursive function 
(function(){
    console.log("I am calling myself!")
})()

//Lambda Function 
var lambdaFunction=(name)=>{
    console.log("Hello "+name);
}
lambdaFunction("Naga");

var multiply=(a,b)=>a*b
console.log(multiply(3,5))

//Function hoisting/declaring 
iAmHoistingFunction();

function iAmHoistingFunction(){ //Function declaration 
    console.log("In Hoisting Function")
}

// notHoistingFunction();
// notHoistingFunction=function(){ 
//     console.log("This will not works!")
// }

//JS will create new scope in a function, {} will not have differerent scope it will have the global scope only 
var x = 1;
console.log(x); // 1
if (true) {
	var x = 2;
	console.log(x); // 2
}
console.log(x); // 2
console.log("-----")

var x = 1;
console.log(x); // 1
(function(){
    if (true) {
        var x = 2; //Overrides the var inside the function scope
        console.log(x); // 2 
    }
})()
console.log(x); // 1 !!

// Lambda Optional parentheses
var lambdaFunction=Name=>{
    console.log("Hey "+Name)
}
lambdaFunction("Naga")

//Generator Functions, yield used to pause the functions and resume it
function* names(){
    yield 'Naga';
    yield 'Mukil';
    return 'Harshitha';
}
for (let name of names()){
    console.log(name)
}
const namesCons=names()
console.log(names().next())
console.log(namesCons.next())
console.log(namesCons.next())
console.log(namesCons.next())

function* numbers(){
    for(var index=0;index<3;index++){
        yield index //Each time it will pause and return the data 
    }
}
var numbersInstance=numbers();
for(var index=0;index<4;index++){
    console.log(numbersInstance.next())
}


    