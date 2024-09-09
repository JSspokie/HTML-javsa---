function submitFrm(){
    saveValues();
    postValues();

    window.location.replace("http://127.0.0.1:5500/succ.html")
}


function saveValues(){
    var FullName = document.getElementById('FullName').value
    var PhoneNumber = document.getElementById('telnum').value
    var Email = document.getElementById('email').value
    var NumOfAtt = document.getElementById('numAtt').value
    var ArrTime = document.getElementById('arrTime').value
    var MenuPref = document.getElementById('MenuPref').value
    var TblOption = document.getElementById('tableOption').value

    localStorage.setItem('fullname', FullName)
    localStorage.setItem('PhoneNumber', PhoneNumber)
    localStorage.setItem('Email', Email)
    localStorage.setItem('NumOfAtt', NumOfAtt)
    localStorage.setItem('ArrTime', ArrTime)
    localStorage.setItem('MenuPref', MenuPref)
    localStorage.setItem('TblOption', TblOption)
}