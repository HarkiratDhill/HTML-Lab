const fYear = document.getElementById("end");
const d = new Date();
fYear.textContent = d.getFullYear();

const sayHello = (name) => {
    console.log(`Hello, ${name}!`); 
}

sayHello ("user");
