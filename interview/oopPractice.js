// 🧪 1. Create a Shape Hierarchy
// 🔧 Task:
// Create a base class called Shape with a getArea() method. Then extend it into two classes: Rectangle and Circle.

class shape {
    constructor (name) {
        this.name = name
    }

    getArea() {
        return 0
    }
}

    class Rectangle extends shape {
        constructor(name, width, height) {
          super(name)   
          this.width = width
          this.height = height
        }

        getArea() {
            return this.width * this.height
        }
    }
        class Circle extends shape {
            constructor(name, radius) {
                super(name)
                this.radius = radius
            }

        getArea() {
            return Math.PI * this.radius ** 2
        }
    }
    const myRectangle = new Rectangle("MyRect", 4, 5);
    console.log(myRectangle.name); // "MyRect"
    console.log(myRectangle.getArea()); // 20
    
    const myCircle = new Circle("MyCircle", 3);
    console.log(myCircle.name); // "MyCircle"
    console.log(myCircle.getArea()); // ~28.274333882308138



// 🔨 Requirements:
// Shape has a name property.

// Rectangle takes width and height.

// Circle takes radius.

// Each subclass overrides getArea() and returns the correct area.

// 💡 Example:
// javascript
// Copy code
// const r = new Rectangle('MyRect', 4, 5);
// console.log(r.getArea()); // 20

// const c = new Circle('MyCircle', 3);
// console.log(c.getArea()); // ~28.27
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 🧪 2. Bank Account System
// 🔧 Task:
// Create a BankAccount class, and then extend it into CheckingAccount and SavingsAccount.

// 🔨 Requirements:
// All accounts have owner, balance, and deposit()/withdraw() methods.

// CheckingAccount allows overdrafts up to $100.

// SavingsAccount doesn’t allow overdrafts at all.

// 💡 Example:
// javascript
// Copy code
// const checking = new CheckingAccount('Alice', 200);
// checking.withdraw(250); // Allowed (down to -50)

// const savings = new SavingsAccount('Bob', 200);
// savings.withdraw(250); // Not allowed
// 
// 
// 
// 
// 🧪 3. Zoo Animal Sound System
// 🔧 Task:
// Create an Animal class with a speak() method, then extend it into Dog, Lion, and Cow.

// 🔨 Requirements:
// Each subclass should return a different sound using speak()

// Dog → "barks"

// Lion → "roars"

// Cow → "moos"

// 💡 Example:
// javascript
// Copy code
// const dog = new Dog("Rex");
// console.log(dog.speak()); // "Rex barks."
// 
// 
// 
// 
// 
// 🧪 4. Person and Student
// 🔧 Task:
// Create a Person class with name and age, and a greet() method. Then create a Student class that extends Person.

// 🔨 Requirements:
// Student adds a major property.

// Override greet() to say:

// "Hi, I'm Alice, 20 years old and majoring in Math."