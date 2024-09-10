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
    outMail.textContent = "Email: "+localStorage.getItem("Email");
    outNumAtt.textContent = "Number Of Attendees: "+localStorage.getItem("NumOfAtt");
    outArrTime.textContent = "Arrival time: "+localStorage.getItem("ArrTime");
    outMenuPref.textContent = "Menu Preference: "+localStorage.getItem("MenuPref");
    outTblOption.textContent = "Table Option: "+localStorage.getItem("TblOption");
}

function confetti(){
  const container = document.getElementById('confetti-container');

  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A6', '#33FFF6'];

  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `-${Math.random() * 100}vh`;
    confetti.style.width = `${Math.random() * 20 + 10}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    container.appendChild(confetti);

    // Animation
    confetti.animate([
        { transform: `translateY(0)`, opacity: 1 },
        { transform: `translateY(${Math.random() * 100 + 100}vh)`, opacity: 0 }
    ], {
        duration: Math.random() * 2000 + 3000,
        easing: 'linear',
        fill: 'forwards'
    }).onfinish = () => {
        container.removeChild(confetti);
    };
}

setInterval(createConfetti, 100);

}