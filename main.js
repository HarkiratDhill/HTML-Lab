const fYear = document.getElementById("end");
const d = new Date();
fYear.textContent = d.getFullYear();

const sayHello = (name) => {
    console.log(`Hello, ${name}!`); 
}

sayHello ("user");

const greeting = () => {
    if (d.getHours() <= 11) {
        alert('Good morning user');
    } else if (d.getHours() < 18) {
        alert('Good afternoon user');
    } else {
        alert('Good evening user');
    }
}

const button = document.getElementById("button");
button.addEventListener("click", greeting);