let name = prompt("İsminizi giriniz :")
let myName = document.querySelector("#myName")
myName.innerHTML = `${name}`


function showTime() {
    let clock = new Date();
    let hour = clock.getHours();
    let mins = clock.getMinutes();
    let sec = clock.getSeconds();


    let time = hour + ":" + mins + ":" + sec + "  "

    document.getElementById('myClock').innerHTML = time;
}

setInterval(showTime,100);



