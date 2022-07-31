let section = document.querySelector("section")
// console.log(section);success

// creating a form:
let form = document.createElement("form")
form.method="post";
form.action = "/";


let heading = document.createElement("h1");
heading.textContent = "Form"
form.appendChild(heading);

//username 

let input1 = document.createElement("input")
input1.type = "text";
input1.id="username";
input1.placeholder="Enter your name";
input1.name="username";

// console.log(input1);

form.appendChild(input1);



// Email

let input2 = document.createElement("input")
input2.type = "email";
input2.id="email";
input2.placeholder="Enter your Email:";
input2.name="email";

// console.log(input2);

form.appendChild(input2);

// password


let input3 = document.createElement("input")
input3.type = "password";
input3.id="password";
input3.placeholder="Enter your password";
input3.name="password";

// console.log(input3);

form.appendChild(input3);


// Mobile:


let input4 = document.createElement("input")
input4.type = "mobile";
input4.id="tel";
input4.placeholder="Enter your mobile number";
input4.name="mobileNumber";

// console.log(input4);

form.appendChild(input4);

section.appendChild(form)

let select = document.createElement("select")
select.textContent = "select" ;

let p = document.createElement("p")


form.appendChild(select);



let button = document.createElement("button");
button.textContent = "Enter";

form.appendChild(button);
// console.log(button);
console.log(form);



async function json() {
    let jsonData = await fetch("data.json");
    let cities = await jsonData.json();
    // console.log(cities);

    cities.cities.forEach(element => {
        console.log(element)

        let op1 = new Option(`${element}`)
        select.add(op1)

       

     
        
    });
}
json();


