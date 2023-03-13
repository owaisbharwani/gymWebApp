/*
This is a playground page for useful JS code snippets from online tutorials.
This page should not be linked to the website upon completion.
*/

//Code for dynamic time in nav bar
let time = document.getElementById("current-time-nav");

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000);

//Code to get todays date
let date = document.getElementById("current-time");

    let x = new Date();
    date.innerHTML = x.toLocaleDateString();

 