'use strict';

function message1() {
    alert('Hello!')
};


function message2() {
    alert('Hello Hello!')
};



function hover() {
    document.getElementById("p1").innerHTML = "1st paragraph hovered!"
    document.getElementById("p2").innerHTML = "Also, the 2nd paragraph has been hovered!"
};

console.log(hover());
