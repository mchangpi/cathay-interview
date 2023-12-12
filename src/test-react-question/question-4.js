/** Can you explain about Interface and Enum, and where will you be using,
please make some examples. **/

// ANSWER for: Can you explain about Interface and Enum

/* ANSWER for interfaces:
An interface defines a contract for the methods or properties that a class or 
object should implement,

When I need to create classes that adhere to a certain structure or contract.
I would use interface, 

Here's an example:
*/

class PetInterface {
  sound() {
    throw new Error("Method not implemented");
  }
  description() {
    throw new Error("Method not implemented");
  }
}

class Dog extends PetInterface {
  constructor(name) {
    super();
    this.name = name || "Max";
  }

  sound() {
    console.log(`${this.name} barks !!`);
  }

  description() {
    console.log(`${this.name} is a dog`);
  }
}

/* Check if an object adheres to the PetInterface */
function isPet(obj) {
  return "sound" in obj && "description" in obj;
}

const dog = new Dog("Charlie");

console.log("Example for interface:");
dog.sound();
dog.description();
console.log(`Is ${dog.name} a Pet?`, isPet(dog));

/* ANSWER for Enum:
Enums are types that contain a limited number of fixed values,

When I assign a limited number of fixed values to a variable, I would use Enum.

Here's an example:
*/

const PetEnum = {
  DOG: Symbol("DOG"),
  CAT: Symbol("CAT"),
  RABBIT: Symbol("RABBIT"),
};

function testEnum(petType) {
  switch (petType) {
    case PetEnum.DOG:
      console.log("The pet is a dog");
      break;
    case PetEnum.CAT:
      console.log("The pet is a cat");
      break;
    case PetEnum.RABBIT:
      console.log("The pet is a rabbit");
      break;
    default:
      console.log("Pet not defined");
  }
}

console.log("\nExample for Enum:");
const pet = { name: "Max", type: PetEnum.RABBIT };
testEnum(pet.type);
