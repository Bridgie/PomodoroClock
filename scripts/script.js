$(document).ready(function(){
  
  var input = '';
  var action = '';
  var rest = 300;
  var pomodoro = 1500;  
  var minutes = '';
  var counter = 1500;
  var prevAction = '';
  var timeCounter;
  var running = false
  var prevCounter;
  
  $('button').click(function(){
    input = $(this).attr("value"); //take input
    console.log(input);
    
    //start if
      if(input === "pomodoroMore" && running == false){  // TODO if 0 then do nothing
        pomodoro += 60;                  //add 1 minute to pomodoro
        counter += 60;
        secondsToHms(pomodoro)             //seconds to hms function
        $(".firstTimer").html(minutes);
        $("#timer").html(minutes);
                    }
      else if(input === "pomodoroLess" && running == false){
        pomodoro -= 60; 
        counter -= 60;
        secondsToHms(pomodoro)    
        $(".firstTimer").html(minutes);
        $("#timer").html(minutes);
      }
      else if(input === "restMore" && running == false){
        rest += 60;
        secondsToHms(rest)
        $(".secondTimer").html(minutes);
      }
      else if(input === "restLess" && running == false){
        rest -= 60;
        secondsToHms(rest)
        $(".secondTimer").html(minutes);
      }else if(input === "=" && running == false){            //timer
         
        timeCounter = setInterval(getTime, 1000);
        running = true;
         
      }else if (input === "=" && running == true){
          clearInterval(timeCounter);
          running = false;
      }                               //end timer
    // end if
    
    //function to convert seconds into HH:MM:SS
  function secondsToHms(d) {
d = Number(d);
var h = Math.floor(d / 3600);
var m = Math.floor(d % 3600 / 60);
var s = Math.floor(d % 3600 % 60);
return minutes = ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s); }
    //secondstohms end function
    
    //start timer function
     function getTime(){
       if (counter == 0){
         counter = rest;
         counter--;
         secondsToHms(counter);
         $("#timer").html(minutes);
         return counter;
         $("#session").html("rest")
         prevCounter = counter;
       }else if(prevCounter == 0){
         counter = pomodoro;
         counter--;
         secondsToHms(counter);
         $("#timer").html(minutes);
         prevCounter = counter;
         return counter;
       }else{
       counter--;
       secondsToHms(counter);
       $("#timer").html(minutes);
       return counter;
       }
  };   //end timer function 
    
  }); //end click
  
}); // end ready