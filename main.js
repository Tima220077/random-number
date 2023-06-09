const hEl = document.getElementById("h3");
const pEl = document.getElementById("number-el")
const btn = document.getElementById("btn");
const choosebtn = document.getElementById("clear")
let inputEl = document.getElementById("input-el")
let list = []

btn.addEventListener("click", function(){
    list.push(inputEl.value)
    pEl.textContent += " " + inputEl.value 
    inputEl.value = ""
    hEl.innerHTML = "Random:"
})

choosebtn.addEventListener("click", function(){
    
    random()
})

function random(){
    
    let randomItem = list[Math.floor(Math.random()*list.length)];
    hEl.innerHTML += " " + randomItem
    list = []
    clear()
}
function clear(){
    pEl.innerHTML = ""
    
}