function myFunc(a, b) {
    console.log(a + b);
}

myFunc(4,6);

myFunc("arg", "ument");

console.dir(myFunc.prototype);

class Vehicle {
    constructor(type, name, horsePower) {
        this.type = type;
        this.name = name;
        this.horsePower = horsePower;
    }

    printInfo() {
        console.log("Type is: " + this.type + " Vehicle name is: " + this.name + " Horse power of the vehicle is " + this.horsePower);
    };

}

const boat = new Vehicle("Very fast boat", "Thunder", 560);

const car = new Vehicle("TheBestCar", "Kia", 230);
const plane = new Vehicle("Plane", "Pratt&Whitney", 980);

boat.printInfo();
car.printInfo();
plane.printInfo();