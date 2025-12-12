let body = document.querySelector("body");
let container = document.querySelector(".container");
const size = 560;
container.style.width = `${size}px`;
container.style.height = `${size}px`;

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {

        let pixel = size / 16;
        let div = document.createElement("div");
        div.classList.add("box");
        div.style.width = `${pixel}px`;
        div.style.height = `${pixel}px`;
        container.append(div);
        div.addEventListener("mouseover", sketch);
    }
    
}

function sketch(event) {
    let targetBox = event.target;
    targetBox.classList.add("mark");
    targetBox.style.backgroundColor = "cyan";
}


function resizeGrid() {
    
    let userInput = parseInt(prompt("Enter a new size per side: "));
    if (!userInput) return;
    if ((userInput > 100) || (userInput < 1)) return alert("Re-Enter the size should be below 101.");
    
    container.querySelectorAll(".box").forEach(item => item.remove());
    for (let i = 0; i < userInput; i++) {
        for (let j = 0; j < userInput; j++) {
            let pixel = size / userInput;
            let div = document.createElement("div");
            div.classList.add("box");
            div.style.width = `${pixel}px`;
            div.style.height = `${pixel}px`;
            container.append(div);
            div.addEventListener("mouseover", sketch);
        }
        
    }
}


let inputButton = document.createElement("button");
inputButton.textContent = "Resize";
inputButton.addEventListener("click", resizeGrid);

body.append(inputButton);