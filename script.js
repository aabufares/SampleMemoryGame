/*
    Author : A.ABUFARES
    @Email:a.abufares@outlook.com
*/
var count = 0, success = 0, select1 = null, select2 = null;
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* DOM variables */
var sndCorrect = document.getElementById("sndCorrect"), divCount = document.getElementById("count"), root = document.getElementById("root");
shuffle(arr);
function flip(i) {
    if (select1 == null || select2 == null) {
        var el = document.getElementById(`card${i}`);
        el.classList.toggle('is-flipped');
        if (select1 == null && select2 == null) {
            select1 = el;
        } else {
            select2 = el;
        }

        if (select1 != null && select2 != null) {
            setTimeout(function () {
                if (select1.getAttribute("data-ref") != select2.getAttribute("data-ref")) {
                    select1.classList.remove("is-flipped");
                    select2.classList.remove("is-flipped");
                    select1 = null;
                    select2 = null;
                } else if (select1.getAttribute("id") != select2.getAttribute("id")) {
                    ++success;
                    select1.children[1].style.background = "#75deacf5";
                    select2.children[1].style.background = "#75deacf5";
                    select1.onclick = null;
                    select2.onclick = null;
                    select1.set
                    sndCorrect.play();
                    select1 = null;
                    select2 = null;
                    if (success == 10) {
                        divCompleted.style.display = "block";
                        document.getElementById("sndCompleted").play();
                    }
                } else {
                    select1 = null;
                    select2 = null;
                }
            }, 1000);
            divCount.innerText = ++count;
        }
    }
}
function shuffle(array) {
    //to resort array items randomly
    var currentIndex = array.length, temporaryValue, randomIndex, i, j = 0;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        //create card element
        i = array[currentIndex];
        var div = document.createElement('div');
        div.classList.add("col-2");
        div.innerHTML = `<div class="card" id="card${j}" data-ref='${i}' onclick='flip(${j})'><div class="card-face card-face-front">?</div><div class="card-face card-face-back"><img src="img/img-${i}.png" /></div></div>`;
        root.appendChild(div);
        ++j;
    }
}
