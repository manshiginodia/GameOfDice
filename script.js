
var target=30
var p1=0;
var p2=0;
var count=1;
function RollDice()
{
    var dicenum = Math.floor(Math.random()*35)+1
    if(count%2 ==1)
    {
        document.getElementById('in1').value=dicenum
        p1=dicenum
    }
    else
    {
        document.getElementById('in2').value=dicenum
        p2=dicenum
    }
    count++

    document.getElementById('in3').value=dicenum

    if(p1>=30)
    {
        document.getElementById('out2').innerHTML = '<b>PLAYER 1 WINS!!!!<b>'
        document.querySelector('#button').disabled = true;
    }
    else if(p2>=30)
    {
        document.getElementById('out2').innerHTML = '<b>PLAYER 1 WINS!!!!</b>'
        document.querySelector('#button').disabled = true;
    }
    else
    {
        document.getElementById('out2').innerText = 'PLEASE CONTINUE TO ROLL DICE'
    }
}
