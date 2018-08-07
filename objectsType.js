//Object initialization 
var employee={
    name:"Naga", //: colon symbol should be used 
    dept:"IT",
    project:function(){return "Mobile-1233312"},
};
console.log(employee.name)
console.log(employee.project())

var name="Naga"
var nameObject={name}
console.log(nameObject.name)

//Object Constructor 
var deptObject=new Object()
deptObject.dept="IT"
deptObject.totalEmp=21
console.log(deptObject)
//Access property 
console.log(deptObject.dept) //OR
console.log(deptObject["dept"]) 

function defineByConstructor(){
    this.name="Naga"
}
var instanceOfAbove=new defineByConstructor(); //Create new instance 
console.log(instanceOfAbove.name)


//Objects.create method. Creating a instance of Object 
var employee={
    name:"Naga",
    greet:function(){
        console.log("Hey "+this.name)
    }
}

var nagaVar=Object.create(employee)
nagaVar.greet()
var mukilVar=Object.create(employee)
mukilVar.name="Mukil"
mukilVar.greet()

console.log("-----------------")
//Copying an Object. 
var employee={name:"Naga",dept:"IT"}
var newEmp={}
Object.assign(newEmp,employee) //OR var newEmp=Object.assign({},employee)
for(let val in newEmp){
    console.log(newEmp[val])
}


//Mergin Objects 
var name={name:"Naga",empID:12}
var project={dept:"IT",project:"Mob-3424242"}
var location={building:1020,city:"Atlanta"}
var profile=Object.assign(name,project,location) //Merges all the object and store into name   
console.log(profile)
name.name="Mukil" //After merging the final object holds reference of the child objects 
console.log(profile)

//Delete a property 
console.log(location) 
delete name.empID
console.log(name)

// Comparing the objects 
var name={name:"Naga"}
var name2={name:"Naga"} //Both are pointing to different memory address so its not equal
console.log(name==name2)
name=name2 //Same references 
console.log(name==name2)

// Object De-Structuring 
console.log("-----------------")
var emp={name:"Naga","ID":3}
var {name,ID}=emp //De-Structuring the object 
console.log(name)
console.log(ID)
