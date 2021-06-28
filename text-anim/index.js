const target = document.getElementById('target');

let array = ["développeur", "ingénieur", "créatif"];
let wordIndex = 0;
let letterIndex = 0;


const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        letter.remove();
    }, 2000)
}

const clearText = () => {
    target.textContent = "";
}

// createLetter();


// for (wordIndex = 0, wordIndex < array.length, wordIndex++ ) {
//     for (letterIndex = 0, letterIndex < array[wordIndex], letterIndex++) {
//         setInterval(createLetter, 2000)
//     }
// }

// setInterval(() => {
//     letterIndex++;
//     createLetter();
// },200)

// setTimeout(() => {
//     letterIndex++;
//     createLetter();
// }, 200)

const loop = () => {
    setTimeout(() => {


        if (wordIndex >= array.length) {
            wordIndex = 0;
        }
        if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        }
        else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            }, 2000)
        }
    }, 60)
}

loop();