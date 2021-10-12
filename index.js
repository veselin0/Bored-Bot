/**
Challenge: 

- Start building out the BoredBot Skeleton however you'd like. 
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random 
      idea we get from the API
    - A button to click for triggering the GET request to the Bored API. 
      (Don't worry about implementing the button quite yet)
*/

//"https://apis.scrimba.com/bored/api/activity" at scrimba's server
fetch("https://www.boredapi.com/api/activity") // at boredapi server
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("placeholder-element").textContent = data.activity;
    });