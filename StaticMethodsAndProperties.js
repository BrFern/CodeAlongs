class Governor  {
    constructor (name, age, personality) {
    this.name = name,
    this.age = age,
    this.personality = personality}
    static thankCitizens() {
        console.log ("Thank you random citizen!")
    }
    static dontUnderstand() {
        console.log("I'll look into it.")
    }
    static kissesBabies() {
        console.log("This baby is tots adorbs")
    }
}

const gov1 = new Governor ('John', '57', 'warm');
Governor.kissesBabies();

class Person {
    constructor (name, age, eyeColor) {
        this.name = name,
        this.age = age,
        this.eyeColor = eyeColor }
    static sayHello() {
        console.log("Hello!")
        } 
    static askStatus() {
        console.log("How are you?")
        } 
    static respond() {
        console.log("I'm good! And you?")
        }
}

class PostalWorker extends Person {
        static deliverMail() {
            console.log("Here is your mail.")
        }
        static petThePuppies() {
            console.log("What a cute dog you have!")
        }
        static noPostOnSundays() {
            console.log("Remember, no post on Sundays!")
        }
    }

class Chef extends Person {
    static tasteSauce () {
        console.log("Mmmm! Exquisite!")
    }
    static lovesFood() {
        console.log("I don't like food, I love it!")
    }
    static chefsKiss() {
        console.log("This dish is...mwah!")
    }
}



const pers1 = new Person ('Bailey', 29, 'hazel');
const pers2 = new Person ('Josh', 29, 'hazel');
const post1 = new PostalWorker ('Jan', 64, 'blue');
const chef1 = new Chef ('Alberto', 43, 'brown')

Chef.lovesFood();
Person.askStatus();
Person.respond ();
PostalWorker.petThePuppies();

const people = [pers1, pers2, post1, chef1, gov1];








