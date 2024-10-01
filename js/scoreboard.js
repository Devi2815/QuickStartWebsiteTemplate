let mainScore = document.getElementById("score1")
let mainWicket = document.getElementById("wickets1")
let mainOver = document.getElementById("over1")
let scoreBtn1 = document.getElementById("btn1")
let scoreBtn2 = document.getElementById("btn2")
let scoreBtn3 = document.getElementById("btn3")
let scoreBtn4 = document.getElementById("btn4")
let scoreBtn5 = document.getElementById("btn5")
let scoreBtn6 = document.getElementById("btn6")
let wicketButton = document.getElementById("wic")
let oversButton = document.getElementById("ov")
let gameOver =  document.getElementById("imgGame")
let scoreCount = 0
let wicketCount = 0
let overCount = 0
let clickCount = 0

function buttons1(){
    scoreCount += 1
    mainScore.textContent = scoreCount;
    clickCount += 1;
}
function buttons2(){
    scoreCount += 2
    mainScore.textContent = scoreCount;
    clickCount += 1;
}
function buttons3(){
    scoreCount += 3
    mainScore.textContent = scoreCount;
    clickCount += 1;
}
function buttons4(){
    scoreCount += 4
    mainScore.textContent = scoreCount;
    clickCount += 1;
}
function buttons5(){
    scoreCount += 5
    mainScore.textContent = scoreCount;
    clickCount += 1;
}
function buttons6(){
    scoreCount += 6
    mainScore.textContent = scoreCount;
    clickCount += 1;
}


// if(clickCount % 6 == 0){
//     overCount += 1;
//     mainOver.textContent = overCount
// }
// if(overCount === 20){
//     gameOver.style.display = "flex"
// }



// function ovButton(){
//     if(clickCount % 6 == 0){
//         mainOver.textContent = overCount
//         overCount += 1
//     }
// }






// function wicButton(){
//     wicketCount += 1
//     mainWicket.textContent = wicketCount;
// }

function wicButton(){
    
    
    if(wicketCount<=10){
        mainWicket.textContent = wicketCount;
        wicketCount++
    }
    else{
        gameOver.style.display = "flex"
    }
    
}



//for team 2 score board

let mainScore1 = document.getElementById("score2")
let mainWicket1 = document.getElementById("wickets2")
let mainOver1 = document.getElementById("over2")
let scoreBtn11 = document.getElementById("btn11")
let scoreBtn22 = document.getElementById("btn22")
let scoreBtn33 = document.getElementById("btn33")
let scoreBtn44 = document.getElementById("btn44")
let scoreBtn55 = document.getElementById("btn55")
let scoreBtn66 = document.getElementById("btn66")
let wicketButton1 = document.getElementById("wic2")
let oversButton1 = document.getElementById("ov2")
let gameOver1 =  document.getElementById("imgGame")
let scoreCount1 = 0
let wicketCount1 = 0
let overCount1 = 0
let clickCount1 = 0

function button1(){
    scoreCount1 += 1
    mainScore1.textContent = scoreCount1;
    clickCount1 += 1;
    
}
function button2(){
    scoreCount1 += 2
    mainScore1.textContent = scoreCount1;
    clickCount1 += 1;
}
function button3(){
    scoreCount1 += 3
    mainScore1.textContent = scoreCount1;
    clickCount1 += 1;
}
function button4(){
    scoreCount1 += 4
    mainScore1.textContent = scoreCount1;
    clickCount1 += 1;
}
function button5(){
    scoreCount1 += 5
    mainScore1.textContent = scoreCount1;
    clickCount1 += 1;
}
function button6(){
    scoreCount1 += 6
    mainScore1.textContent = scoreCount1;
    clickCount1 += 1;
}



// if (clickCount1 == 6){
//     if(clickCount1 % 6 == 0){
//         overCount1 += 1;
//         mainOver1.textContent = overCount1;
//     }
//     if(overCount1 === 20){
//         gameOver1.style.display = "flex"
//     }
// }




// function ovButton2(){
//     if(clickCount1 % 6 == 0){
//         mainOver1.textContent = overCount1
//         overCount1 += 1
//     }
// }



function wicButton2(){
    if(wicketCount1<=10){
        mainWicket1.textContent = wicketCount1;
        wicketCount1++
    }
    else{
        gameOver.style.display = "flex"
    }
    
}







