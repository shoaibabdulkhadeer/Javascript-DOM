// DARK/LIGHT THEME 
let button = document.getElementById("button")
let change = () => {
   if(button.textContent == "Dark theme"){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    button.textContent = "Light theme"
   }else{
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    button.textContent = "Dark theme"
   }
}

//COUNTER APP
let count = document.getElementById("count")

let inc = () => {
    count.innerHTML++
}

let res = () => {
    count.innerHTML = 0
}

let dec = () => {
    console.log("clicked");
    count.textContent--
}


// COLOR CODE
let title = document.getElementById("title")
let color = document.getElementById("color")

let clic = () => {
    title.style.color = color.value
}

// <div>
// <h2 id="ageTitle"> Age is : </h2>
// <input type="text" id="ageIn">
// <button onclick="submit()">Submit</button>
// </div>

//Age 
let ageIn = document.getElementById("ageIn")
let submit = () => {
    document.getElementById("ageTitle").innerHTML += 2023 - ageIn.value
}


