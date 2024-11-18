const fYear = document.getElementById("end");
const d = new Date();
fYear.textContent = d.getFullYear();

const sayHello = (name) => {
    console.log(`Hello, ${name}!`); 
}

sayHello ("user");

const greeting = () => {
    if (d.getDate() <= 11) {
        alert('Good morning user');
    } else if (d.getDate() < 18) {
        alert('Good afternoon user');
    } else {
        alert('Good evening user');
    }
}

const btn = document.getElementById("btn-alert").addEventListener("click", function () {
    alert(greeting);
  });