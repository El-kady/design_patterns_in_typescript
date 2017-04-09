class Auther {
    private name : String;
    private observers: Observer[] = [];

    constructor(name : String){
        this.name = name;
        console.log("Auther:constructor " + name)
    }

    public register(observer: Observer) {
        this.observers.push(observer);
    }

    public notifyAll(key : String , value : String) {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].notify(key,value);
        }
    }

    setName(name : String){
        this.name = name;
        this.notifyAll("name",name);
    }

}

interface Observer {
    notify(key : String, value : String);
}

class Book implements Observer {
    name: String;
    auther: String;

    constructor(name: String, auther: String) {
        this.name = name;
        this.auther = auther;
        console.log("Book:constructor " + name)
    }

    notify(key : String, value : String) {
        switch (key) {
            case 'name':
                this.name = value;
            break;
        }
        console.log("Book:notify " + key + " = " + value);
    }
}

let auther = new Auther("Moustafa");

let PHPBook = new Book("PHP","Moustafa");
let JavaBook = new Book("Java","Moustafa");

auther.register(PHPBook);
auther.register(JavaBook);

setTimeout(function () {
    auther.setName("Moustafa ELkady");
},3000);

console.log("Finsh");