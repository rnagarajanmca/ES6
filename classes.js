//Declaring class 
class Cars{
    constructor(make,model){
        this.make=make
        this.model=model
    }
    print(){
        console.log("Make:"+this.make+" Model:"+this.model)
    }
}

var car=new Cars("Toyota","Camry")
car.print()
console.log("-----------")

//Class Expression 
// var object_name= new class_name([ arguments ]) 
var manufacturer=class CarsManufacturer{
    constructor(name="Toyota",numberOfModels=100){
        this._name=name;
        this.numberOfModels=numberOfModels
    }
}
var man1=new manufacturer("Honda",80)
console.log(man1.numberOfModels);

//Static Keyword 
class CarsDealer{
    static displayPromos(){
        console.log("Hello from static method ")
    }
}
CarsDealer.displayPromos()

//Instance of operator 
var obj=new CarsDealer()
var type=obj instanceof CarsDealer;
console.log("instanceof operator "+type)
console.log("instanceof operator "+(obj instanceof CarsDealer)) //Without () its returns false!! not sure what heppening 

//Class Inheritance 
//ES Supports single and multi-level, Doesn't supports Multiple
class Camry extends Cars{
    print(){
        console.log("Make "+this.make)
    }
}
var camryInstance=new Camry("Toyota!"); //This calls Super class constructor and set model
camryInstance.print();

class Car extends Camry{
    constructor(number,model){
        super("Toyota","Camry")
        this.number=number
        this.model=model
    }
    print(){ //Method overriding 
        console.log("--------")
        super.print()
        console.log("Car model:"+this.model+" Number "+this.number)
    }
}
var myCar=new Car(12345,"Camry")
myCar.print();