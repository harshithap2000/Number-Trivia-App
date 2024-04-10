let getFactBtn = document.getElementById("get-fact-btn");
let ranFactBtn = document.getElementById("ran-fact-btn");
let fact = document.querySelector(".fact");
let url = "http://numbersapi.com/";

let fetchFact = (num) => {
    let finalUrl = url + num;
    fetch(finalUrl).then((resp) => resp.text()).then(data => {
        fact.style.display = "block";
        fact.innerHTML = `<h2>${num}</h2>
        <p>${data}</p>`;
        document.querySelector(".container").append(fact);
    });
};
let getfact = () => {
    let num = document.getElementById("num").value;
    //Check if input number is not empyt
    //If not empty
    if(num){
        //Check if number lies in between 0 and 300
        //if yes fetch the fact
        if(num >= 0 && num <= 300){
            fetchFact(num);
        }
        //If number is less than 0 or greater than 300 display error message.
        else{
            fact.style.display="block";
            fact.innerHTML = `<p class = "msg">Please enter a number between 0 to 300.</p>`
        }
    }
    //If input number is empty display error message.
    else{
        fact.style.display="block";
        fact.innerHTML = `<p class = "msg">The input field cannot be empty</p>`
    }
}

getFactBtn.addEventListener( 'click', getfact );