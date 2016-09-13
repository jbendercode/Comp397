class Person{
    protected _name : string;
    
    constructor(name : string){
        this._name = name;
    }
    
    public speak() : void{
        console.log(this._name + " says hello");
    }
}

class Student extends Person {
    private _studentNum : number;
    
    constructor(name : string, studentNum : number){
        super(name);
        this._studentNum = studentNum;
    }
    
    public studies() : void {
        console.log(this._name + " is studying");
    }
}

var person : Person = new Person("Josh");
person.speak();

var student : Student = new Student("Jacky", 300123456);
student.speak();
student.studies();