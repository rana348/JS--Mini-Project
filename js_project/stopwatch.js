var timer=true;//to click on start button only once!
    var sec=0,hr=0,min=0;  //hold are value as respectively
    var second=document.getElementById('sec')
    var minute=document.getElementById('min')
    var hour=document.getElementById('hr')

    function clock(){
        sec=sec+1; //increments second by 1
        //console.log(sec)
        if(sec==60){         ///to check if second is 60 to increment min
            min=min+1
            minute.innerText=min;    //display minute on webpage
            sec=0;
        }
        else if(min==60)  //to check if minute is 60 to increment hour
        {
            hr=hr+1
            hour.innerText=hr;   //display hour on webpage
            min=0;
        }
        second.innerText=sec;  //display seconds on webpage
    }

    function start(){  //to start the stopwatch
        if(timer){
            window.intervalClock=setInterval(clock,1000);
            timer=false;
        }
        else{
            console.log("already started");
        }
    }
    function reset(){  //to reset the stopwatch
        hr=0;
        min=0;
        sec=0;

        second.innerText=0;
        minute.innerText=0;
        hour.innerText=0;
        clearInterval(window.intervalClock);
        timer=true;
    }

    function stop(){   //to stop the stopwatch
        clearInterval(window.intervalClock);
        timer=true;
    }