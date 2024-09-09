function submitFrm(){
    if (validateForm()==false){
        alert("Please fill in all fields");
        exit();
    } else {
        // saveValues();
        //  postValues();

        window.location.replace("/succ.html")
    }
    
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

    localStorage.setItem('fullname', FullName);
    localStorage.setItem('PhoneNumber', PhoneNumber);
    localStorage.setItem('Email', Email);
    localStorage.setItem('NumOfAtt', NumOfAtt);
    localStorage.setItem('ArrTime', ArrTime);
    localStorage.setItem('MenuPref', MenuPref);
    localStorage.setItem('TblOption', TblOption);
}

function postValues(){
    const outName = document.getElementById('outName');
    const outnum = document.getElementById('outnum');
    const outMail = document.getElementById('outMail');
    const outNumAtt = document.getElementById('outNumAtt');
    const outArrTime = document.getElementById('outArrTime');
    const outMenuPref = document.getElementById('outMenuPref');
    const outTblOption = document.getElementById('outTblOption');


    outName.textContent = localStorage.getItem('fullname');
}