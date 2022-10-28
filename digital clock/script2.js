function clock() {
      let hours = document.getElementById("hours");
      let minutes = document.getElementById("minutes");
      let seconds = document.getElementById("seconds");
      let am = document.getElementById("am");
    
      var date=new Date();
     var s=date.getSeconds();
    var m=date.getMinutes();
     var h=date.getHours();
    
     if(hours>=12){
      am.innerHTML="PM";
       }
       else{
      am.innerHTML="AM";
}

      if (h > 12) {
        h = h - 12;
      }
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
    
      hours.innerHTML = h;
      minutes.innerHTML = m;
      seconds.innerHTML = s;
    }
    setInterval(clock, 1000);