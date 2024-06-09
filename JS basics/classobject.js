// used for task that contain repeated logic. so we create a template(class) of that logic and put that logic on objects(having same set of properties)
class Animal{
    constructor(name,legcount,speaks){
        this.name=name;
        this.legcount=legcount;
        this.speaks=speaks;
    }
    //static function: related to class not specificlally to objects, can be called without even creating any object if the class
    static mytype(){
        console.log("Animal");
    }
    //normal function: can be called only if there's a object created 
    speak(){
        console.log("hi there "+this.speaks);
    }
}
//creating object
let dog=new Animal("Hund",4,"bhow_bhow");
let cat=new Animal("Katze",4,"meow_meow");

cat.speak();
Animal.mytype();//statric function runs on class itself

//adding new property to object once created
const obj={
    key1:"num1",
    key2:"num2",
    key3:"num3"
}
let newobj=Object.assign({},obj,{newproperty:"newvalue"})//used to merge two objects . so first parameter here is empty object as we want to add newp property here
console.log(obj)
console.log(newobj)
