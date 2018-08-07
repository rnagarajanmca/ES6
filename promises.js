//Calling methods with callbacks
function callMethods(hey,hello){
    console.log("Calling other functions ")
    hey()
    hello()
}
callMethods(function(){
    console.log("Printing Hey")
},function(){
    console.log("Printing Hello")
})

//With Timeout 
function callMethods(hey,hello){
    setTimeout(function(){
        console.log("Calling other functions ")
        hey()
        hello()
    },2000)
    
}
callMethods(function(){
    console.log("Printing Hey")
},function(){
    console.log("Printing Hello")
})

//Promises 
function checkPositive(number){
    var isPositive=function(){
        return number>0
    }
    var promise=new Promise(function(resolve,reject){
        if(isPositive()){
            resolve("Its Positive")
        }else{
            reject("Its Negative")
        }
    });
    return promise
}

checkPositive(-10)
.then(function(result){
    console.log("Result :"+result)
},function(error){
    console.log("Error :"+error)
})

checkPositive(5)
.then(function(result){
    console.log(result)
    return checkPositive(-5)
},function(error){
    console.log(error)
}).then(function(result2){
    console.log(-5+result2)
},function(error2){
    console.log(-5+error2)
    console.log("----------------")
})


