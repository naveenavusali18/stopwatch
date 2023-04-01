window.onload = function(){
    var buttonstart = document.getElementById("start");
    var buttonstop = document.getElementById("stop");
    var buttonreset = document.getElementById("reset");
    var sec=0;
    var minn = 0;
    var hour = 0;
    var timer;
    var status = 0;
    const start = function(){
        sec += 1;
        if(sec === 60){
            sec = 0;
            minn += 1;
        }
        if(minn == 60){
            minn = 0;
            hour += 1;
        }
        if(sec < 10 )
        document.getElementById("seco").innerHTML = "0"+sec;
        else
        document.getElementById("seco").innerHTML = sec;
        if(minn < 10)
        document.getElementById("min").innerHTML = "0"+minn;
        else
        document.getElementById("min").innerHTML = minn;
        if(hour < 10)
        document.getElementById("hr").innerHTML = "0"+hour;
        else
        document.getElementById("hr").innerHTML = hour;
    }
    buttonstart.onclick = function(){
        status = 1;
        buttonstart.disabled = true;
        timer = setInterval(start, 1000);
    }

    buttonstop.onclick = function(){
        if(status == 1){
            buttonstart.innerHTML = "resume";
            buttonstart.disabled = false;
            clearInterval(timer);
        }
    }

    buttonreset.onclick = function(){
        status = 0;
        buttonstart.innerHTML = "start";
        buttonstart.disabled = false;
        sec = 0;
        minn = 0;
        hour = 0;
        clearInterval(timer);
        document.getElementById("seco").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("hr").innerHTML = "00";
    }
}