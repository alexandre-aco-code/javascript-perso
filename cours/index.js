let string = "Chaine"
let number = 25
let boolean = true
let maVariable = null;

// console.log(typeof maVariable)

// tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"]

// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2, 3], { nom: "Denis" }];

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
  }
]

// console.log(data[2].pseudo);
// if (data[0].age > data[1].age) {
//     console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo)
// } else {
//     console.log(data[1].pseudo + " est plus agé que " + data[0].pseudo)
// }

//while
let w = 0;

while (w < 10) {
  w++
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


document.body.addEventListener('click', (e) => {
  console.log(e.target);
  switch (e.target.id) {
    case 'javascript': document.body.style.background = ("yellow");
      break;
    case 'php': document.body.style.background = ("blue")
      break;
    case 'html': document.body.style.background = ("green")
      break;
    default: null;
  }
})

