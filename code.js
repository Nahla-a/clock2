function digitClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    h = twoDigit(h);
    m = twoDigit(m);
    s = twoDigit(s);
    var am = "AM";


    if (h > 12) {
        am = "PM"
    } else {
        am = "AM"
    }

    if (h == 0) {
        h = 12;
    } else {
        if (h > 12) {
            h = (h - 12);
        }
    }

   
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s + "  " + am;
    var t = setTimeout(function () { digitClock() }, 1000); 

    }

function twoDigit(time) {
    if (time < 10) {
        return "0" + time;
    }
    else {
        return time;
    }

}

function fullDate(){
    var d = new Date();
    var y = d.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var m = months[d.getMonth()];
    var day = d.getDate();

    document.getElementById("date").innerHTML = m + " / " + day + " / " + y ;
    var t = setTimeout(function () { fullDate() }, 1000); /* setting timer */


}

digitClock();
fullDate();