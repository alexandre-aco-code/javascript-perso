const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$&é'-è_\"()çà";
const passwordlength = document.getElementById("display-password-length").value;
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
    let data = [];
    let password = "";

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("veuillez selectionner un critère");
        return;
    }

    for (i = 0; i < passwordlength; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }

    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "Copié!";
    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe";
    }, 2000);

    // console.log(data[Math.floor(Math.random() * data.length)]);
    // console.log(data);

    // let dataJoined = data.join("");

    // console.log(passwordlength);

    // console.log(dataJoined);

    // let indice = 0;
    // let passwordResult = "";
    // // passwordResult += dataJoined[indice]

    // for (i = 0; i < passwordlength; i++) {
    // indice = Math.floor(Math.random() * data.length);
    // passwordResult += data[indice];
    // console.log(data[indice]);
    // }

    // console.log(passwordResult);

    // document.getElementById("password-output").innerHTML = passwordResult;
};

generateButton.addEventListener("click", generatePassword);
