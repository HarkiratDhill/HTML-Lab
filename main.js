const fYear = document.getElementById("end");
const d = new Date();
fYear.textContent = d.getFullYear("November 17");

const sayHello = (name) => {
    console.log(`Hello, ${name}!`); 
}

sayHello ("user");
