//elemento dom
let ulMail = document.querySelector(".mail");
// console.log(mailInput);

let mailOutput = "";
for (let i = 0; i < 10; i++) {
    axios
        .get(
            `https://flynn.boolean.careers/exercises/api/random/mail`
        )
        .then(function (resp) {
            const mailRandom = resp.data.response;
            const curMail = `<li class="list-group-item mail">${mailRandom}</li>`;
            mailOutput += curMail;
            ulMail.innerHTML = mailOutput;

        }
        )
}