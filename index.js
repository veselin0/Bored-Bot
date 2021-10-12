/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/
//"https://www.boredapi.com/api/activity" // at boredapi server

const btn = document.querySelector(".btn");
btn.addEventListener('click', () => 
fetch("https://apis.scrimba.com/bored/api/activity") 
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector(".placeholder-element").textContent = data.activity;
    }));
