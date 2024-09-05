function play(usrChoice){
    const arrRPS = ['Rock', 'Paper', 'Scissors'];
    const resultLabel = document.getElementById('result')
    let cprNum = Math.floor(Math.random() * 3);
    cprNum = Math.round(cprNum);
    cprChoice = arrRPS[cprNum];

    if (usrChoice == 'Rock' && cprChoice == 'Scissors'){
        resultLabel.textContent = "You WIN!!"
    } else if (usrChoice == 'Rock' && cprChoice == 'Paper'){
        resultLabel.textContent = "You LOSE!!"
    } else if (usrChoice == 'Rock' && cprChoice == 'Rock'){
        resultLabel.textContent = "It's a tie!!"
    } else if (usrChoice == 'Scissors' && cprChoice == 'Paper'){
        resultLabel.textContent = "You WIN!!"
    } else if (usrChoice == 'Scissors' && cprChoice == 'Rock'){
        resultLabel.textContent = "You LOSE!!"
    } else if (usrChoice == 'Scissors' && cprChoice == 'Scissors'){
        resultLabel.textContent = "It's a tie!!"
    }  else if (usrChoice == 'Paper' && cprChoice == 'Paper'){
        resultLabel.textContent = "It's a tie!!"
    } else if (usrChoice == 'Paper' && cprChoice == 'Rock'){
        resultLabel.textContent = "You WIN!!"
    } else if (usrChoice == 'Paper' && cprChoice == 'Scissors'){
        resultLabel.textContent = "You LOSE!!"
    } 
    

}