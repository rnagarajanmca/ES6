
var numberFive=5;
var harshithaName="Harshitha"
if(numberFive<1){
    console.log("Its below 1 ")
}else{
    console.log("Its greater than one ")
}

switch(harshithaName) {
    case "Harshitha":{
        console.log("Hey Harshitha")
        break;
    }
    case "Mukil":{
        console.log("Hey Mukil")
        break;
    }
    default:{
        console.log("Otherwise You are Naga ")
        break;
    }
}

var tmpVar=0;
outterLoop:
for(var index=0;index<numberFive;index++){
    numberFive=5
    innerLoop:
    while(numberFive>1){
        console.log("Number is "+numberFive)
        numberFive--
        tmpVar+=numberFive
        if(numberFive==3){
            break innerLoop
        }
        if(tmpVar>15){
            break outterLoop
        }
    }    
}