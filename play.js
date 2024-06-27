const person = {
    name:"Gary",
    age:62,
    greet() {
        console.log("Hello", this.name, "you are", this.age);
    }
}

const printName = ({name, age})=>{
    console.log("You asked for ", name,age ," years old");
}




printName(person)

const hobbies = ['Running', 'Squash', 'Coding'];

    const copiedArrays =[...hobbies]


console.log("Copied Array",copiedArrays)

