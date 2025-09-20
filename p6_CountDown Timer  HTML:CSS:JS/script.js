const endDate = new Date("27 April, 2025 19:47:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
       const now = new Date().getTime();

       const distanceCovered = now - startDate;
       const distancePending = endDate - now;

       
       // 1 day in milli secs = 24*60*60*1000
       // 1 hr in milli secs = 60*60*1000
       // 1 min in milli secs = 60*1000
       // 1 sec in milli secs = 1000


       // Calculating - days hrs mins secs
       const days = Math.floor(distancePending/(24*60*60*1000));
       const hrs = Math.floor((distancePending%(24*60*60*1000) / (60*60*1000)));
       const mins = Math.floor((distancePending%(60*60*1000) / (60*1000)));
       const secs = Math.floor((distancePending%(60*1000) / (1000)));


       // Populating the data in UI
       document.getElementById("days").innerHTML = days;
       document.getElementById("hrs").innerHTML = hrs;
       document.getElementById("mins").innerHTML = mins;
       document.getElementById("secs").innerHTML = secs;


       // Calculating width % for progress bar
       const totalDistance = endDate - startDate;
       const progressPercentage = (distanceCovered/totalDistance)*100;


       // Setting width for progress bar
       document.getElementById("progress-bar").style.width = progressPercentage + "%";

       //Clearing negative progress bar
       if(distancePending <= 0){
              clearInterval(x);
              document.getElementById("countdown").innerHTML = "COMPLETED🎯";
              document.getElementById("progress-bar").style.width = "100%";
       }

}, 1000);