let userscore = 0;
let aiscore = 0;


function gameStart(user){
    let num = Math.trunc(Math.random()*10)
    let ai;
    if(num>=0 && num<=3){
        ai="paper"
    }
    else if(num>=4&&num<=6){
        ai = "scissor"
    }else{
        ai="rock"
    }

    if(user==ai){
        document.getElementById('user').innerHTML = "You have choosen "+user
        document.getElementById('ai').innerHTML = "AI has choosen "+ai
        document.getElementById('result').innerHTML = "Game Drawn"
    }

    else if((user=="paper"&&ai=="rock")||(user=="scissor"&&ai=="paper")||(user=="rock"&&ai=="scissor")){
        document.getElementById('user').innerHTML = "You have choosen "+user
        document.getElementById('ai').innerHTML = "AI has choosen "+ai
        document.getElementById('result').innerHTML = "You won"
        userscore++;
    }
    else{
        document.getElementById('user').innerHTML = "You have choosen "+user
        document.getElementById('ai').innerHTML = "AI has choosen "+ai
        document.getElementById('result').innerHTML = "AI won"  
        aiscore++      
    }

    document.getElementById('userscore').innerHTML = "User: "+userscore
    document.getElementById('aiscore').innerHTML = "AI: "+aiscore
}