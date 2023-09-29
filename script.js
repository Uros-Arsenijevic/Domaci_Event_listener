let button = document.querySelector("button");

let questions = [
    "koliko je 2 + 2",
    "koliko covek ima prstiju",
    "glavni grad Srbije"
]

button.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * questions.length);
    let result = prompt(questions[randomIndex]);

    if(result = 4){
       return console.log("Tacan odgovor");
    };
    if(result = "beograd"){
        return console.log("Tacan odgovor");
    };
    if(result = "20"){
        return console.log("Tacan odgovor");
    };
});
