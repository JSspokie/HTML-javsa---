document.addEventListener('DOMContentLoaded', function(){
    postValues();
    confetti();
});

function submitFrm(){
    if (validateForm()==false){
        alert("Please fill in all fields");
        exit();
    };

    transition();
    saveValues();
    //postValues();

    //alert(localStorage.getItem("fullname"))

    return false;
}

function transition(){
    window.location.pathname = "succ.html";
    return false;
}

function validateForm(){
    var FullName = document.getElementById('FullName').value
    var PhoneNumber = document.getElementById('telnum').value
    var Email = document.getElementById('email').value
    var NumOfAtt = document.getElementById('numAtt').value
    var ArrTime = document.getElementById('arrTime').value
    var MenuPref = document.getElementById('MenuPref').value
    var TblOption = document.getElementById('tableOption').value

    if(FullName=="" || PhoneNumber=="" || Email=="" || NumOfAtt==""
        || ArrTime=="" || MenuPref=="" || TblOption==""
    ){
        return false;
    }
}

function saveValues(){
    var FullName = document.getElementById('FullName').value;
    var PhoneNumber = document.getElementById('telnum').value;
    var Email = document.getElementById('email').value;
    var NumOfAtt = document.getElementById('numAtt').value;
    var ArrTime = document.getElementById('arrTime').value;
    var MenuPref = document.getElementById('MenuPref').value;
    var TblOption = document.getElementById('tableOption').value;

    localStorage.setItem("fullname", FullName);
    localStorage.setItem("PhoneNumber", PhoneNumber);
    localStorage.setItem("Email", Email);
    localStorage.setItem("NumOfAtt", NumOfAtt);
    localStorage.setItem("ArrTime", ArrTime);
    localStorage.setItem("MenuPref", MenuPref);
    localStorage.setItem("TblOption", TblOption);
}

function postValues(){
    const outName = document.getElementById('outName');
    const outnum = document.getElementById('outnum');
    const outMail = document.getElementById('outMail');
    const outNumAtt = document.getElementById('outNumAtt');
    const outArrTime = document.getElementById('outArrTime');
    const outMenuPref = document.getElementById('outMenuPref');
    const outTblOption = document.getElementById('outTblOption');
    
    outName.textContent = "Full Name: " + localStorage.getItem("fullname");
    outnum.textContent = "Phone Number: "+localStorage.getItem("PhoneNumber");
    outMail.textContent = "Email Address: "+localStorage.getItem("Email");
    outNumAtt.textContent = "Number Of Attendees: "+localStorage.getItem("NumOfAtt");
    outArrTime.textContent = "Arrival time: "+localStorage.getItem("ArrTime");
    outMenuPref.textContent = "Menu Preference: "+localStorage.getItem("MenuPref");
    outTblOption.textContent = "Table Option: "+localStorage.getItem("TblOption");
}

function confetti(){
    const duration = 99999999 * 999999999,
    animationEnd = Date.now() + duration;
  
  let skew = 1;
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  (function frame() {
    const timeLeft = animationEnd - Date.now(),
      ticks = Math.max(200, 500 * (timeLeft / duration));
  
    skew = Math.max(0.8, skew - 0.001);
  
    confetti({
      particleCount: 5,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });
  
    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
}