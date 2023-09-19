var getUserAge = prompt("Enter your age:");

if(getUserAge >= 18) {
    alert("You are " + getUserAge + " years old.");
} else {
    alert("You are under 18.");
}             

var changeBackground = confirm (" Do you want to change background color?");
if (changeBackground) {
    document.body.style.background = "black";
}

function Person(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
}

const user = new Person("Bill", "Withers", 81);

document.getElementById("fullname").innerHTML = (user.name + " " + user.surname).toUpperCase();

// const person = {
//   name: "Bill",
//   surname: "Withers",
//   age: 81,

//   fullName: function() {
//     return this.name + " " + this.surname;
//   }
// };
// const displayFullname = document.getElementById("full-name");

// displayFullname.innerHTML = person.fullName().toUpperCase();



// class User {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
  
//     fullname() {
//         return `${this.name} ${this.surname}`;
//     }
// }

// const user1 = new User("Bill", "Withers", "81");

// document.getElementById("fullName").textContent = user1.fullname().toUpperCase();