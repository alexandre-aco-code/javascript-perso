let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable = null;

// console.log(typeof maVariable)

// tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];

// console.log(array[0][3]);

let array2 = [
    "Bordeaux",
    24,
    true,
    [1, 2, 3],
    {
        nom: "Denis",
    },
];

// console.log(array2[4].nom)

let objet = {
    pseudo: "Denis",
    age: 33,
    techno: ["Javascript", "React", "NodeJS"],
    admin: false,
};

// objet.adresse = "22 rue du code"

// console.log(objet.adresse);

let data = [
    {
        pseudo: "Denis",
        age: 33,
        techno: ["Javascript", "React", "NodeJS"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        techno: ["CSS", "React", "NodeJS"],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age: 52,
        techno: ["php", "React", "NodeJS"],
        admin: true,
    },
];

// console.log(data[2].pseudo);
// if (data[0].age > data[1].age) {
//     console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo)
// } else {
//     console.log(data[1].pseudo + " est plus agé que " + data[0].pseudo)
// }

//while
let w = 0;

while (w < 10) {
    w++;
    // console.log(w)
}

//for
for (const user of data) {
    // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// console.log(data.length)

for (i = 0; i < data.length; i++) {
    // console.log(data[i].techno[0])
    // document.body.innerHTML += `<h2>${data[i].techno.join(" / ")}</h2>`
}

document.body.addEventListener("click", (e) => {
    console.log(e.target);
    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background = "blue";
            break;
        case "html":
            document.body.style.background = "green";
            break;
        default:
            null;
    }
});

// ----------------
// Méthodes String
// ----------------

let string2 = "Javascript est un language";

// console.log(typeof String("salut"));
// console.log(eval("1" + 2));
// console.log(isNaN(eval("1" + 2)));

// console.log(string2.indexOf("language"));
// console.log(string2.slice(5,17))
// console.log(string2.split("i"))

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string.replace("Javascript", "PHP"));

// ----------------
// Méthodes Numbers
// ----------------

let number2 = 42.2345;
let numberString = "42.23 est un chiffre";

// console.log(number2.toFixed(2));
// console.log(parseInt("34"));
// console.log(parseInt(numberString));  // garde le premier chiffre d'une chaine
// console.log(parseFloat(numberString));

// Math
// console.log(Math.PI);

// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.pow(2,6));
// console.log(Math.sqrt(16));

// console.log(Math.floor(Math.random() * 50));

// ----------------
// Méthodes Arrays
// ----------------

let array3 = ["Javascript", "php", "python"];
let array4 = ["php", "React", "NodeJS"];

// let newArray = [...array3, ...array4];
// console.log(newArray);

// let join = newArray.join(" ")
// console.log(join);

// console.log(array3.slice(1));

// console.log(array3.indexOf("python"))

// array3.forEach((languages) => console.log(languages))

// console.log(array3.every((language) => language === "p"));
// console.log(array3.some((language) => language === "php"));

// array3.shift();
// array3.pop();
// console.log(array3);

// array3.splice(1, 2, "c++", ...array4)
// console.log(array3);

// important //

let arrayNumber = [4, 24, 35, 46, 57];

// console.log(arrayNumber.reduce((x,y) => x+y));
// console.log(arrayNumber.reduce((x,y) => x-y));

// arrayNumber.push(17);
// console.log(arrayNumber);

// FILTER, SORT, MAP

// console.log(arrayNumber.filter((number) => number > 20));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b));

// console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b));

// arrayNumber.map((number) => document.body.innerHTML += `<li> ${number} </li>`);
// document.body.innerHTML = arrayNumber
// 	.map((number) => `<li> ${number} </li>`)
// 	.join("");

// ----------------
// Méthodes Objects
// ----------------

document.body.innerHTML = data
    // .filter((user) => user.admin === false)
    .filter((user) => user.pseudo.includes("i"))
    .sort((a, b) => a.age - b.age)
    .map(
        (user) =>
            `
		<div class="user-card">
			<h2>${user.pseudo}</h2>
			<p>Age : ${user.age}</p>
			<p>Status : ${user.admin ? "admin" : "user"}</p>
		</div>
	`
    )
    .join("");
