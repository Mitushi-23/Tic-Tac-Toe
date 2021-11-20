let clickSound = new Audio();
clickSound.src = "sound/penclick.mp3";	

let noClick = new Audio();
noClick.src = "sound/click.mp3";

let sound = new Audio();
sound.src= "sound/music.mp3";


function myfunc(){
    var b0,b1, b2,b3,b4,b5,b6,b7,b8;
    b0= document.getElementById("b0").value;
    b1= document.getElementById("b1").value;
    b2= document.getElementById("b2").value;
    b3= document.getElementById("b3").value;
    b4= document.getElementById("b4").value;
    b5= document.getElementById("b5").value;
    b6= document.getElementById("b6").value;
    b7= document.getElementById("b7").value;
    b8= document.getElementById("b8").value;

    if((b0=='X'|| b0=='x') && (b1=='X'|| b1=='x') && (b2=='X'|| b2=='x'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
        myfunc_2();
    }
    else 
    if((b3=='X'|| b3=='x') && (b4=='X'|| b4=='x') && (b5=='X'|| b5=='x'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("b0").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
        myfunc_2();
    }
    else
    if((b6=='X'|| b6=='x') && (b7=='X'|| b7=='x') && (b8=='X'|| b8=='x'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b0").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        window.alert('Player X won');
        myfunc_2();
    }
    else
    if((b0=='X'|| b0=='x') && (b3=='X'|| b3=='x') && (b6=='X'|| b6=='x'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
        myfunc_2();
    }
    else
    if((b4=='X'|| b4=='x') && (b1=='X'|| b1=='x') && (b7=='X'|| b7=='x'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b0").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
        myfunc_2();
    }
    else
    if((b5=='X'|| b5=='x') && (b8=='X'|| b8=='x') && (b2=='X'|| b2=='x'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b0").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b1").disabled = true;
        window.alert('Player X won');
        myfunc_2();
    }
    else
    if((b0=='X'|| b0=='x') && (b4=='X'|| b4=='x') && (b8=='X'|| b8=='x'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b2").disabled = true;
        window.alert('Player X won');
        myfunc_2();
    }
    else
    if((b4=='X'|| b4=='x') && (b6=='X'|| b6=='x') && (b2=='X'|| b2=='x'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b0").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
        myfunc_2();
    }











    
    else
    if((b0=='O'|| b0=='o') && (b1=='O'|| b1=='o') && (b2=='O'|| b2=='o'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player O won');
        myfunc_2();
    }
    else 
    if((b3=='O'|| b3=='o') && (b4=='O'|| b4=='o') && (b5=='O'|| b5=='o'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("b0").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player O won');
        myfunc_2();
    }
    else
    if((b6=='O'|| b6=='o') && (b7=='O'|| b7=='o') && (b8=='O'|| b8=='o'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b0").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        window.alert('Player O won');
        myfunc_2();
    }
    else
    if((b0=='O'|| b0=='o') && (b3=='O'|| b3=='o') && (b6=='O'|| b6=='o'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player O won');
        myfunc_2();
    }
    else
    if((b4=='O'|| b4=='o') && (b1=='O'|| b1=='o') && (b7=='O'|| b7=='o'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b0").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player O won');
        myfunc_2();
    }
    else
    if((b5=='O'|| b5=='o') && (b8=='O'|| b8=='o') && (b2=='O'|| b2=='o'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b0").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b1").disabled = true;
        window.alert('Player O won');
        myfunc_2();
    }
    else
    if((b0=='O'|| b0=='o') && (b4=='O'|| b4=='o') && (b8=='O'|| b8=='o'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b2").disabled = true;
        window.alert('Player O won');
        myfunc_2();
    }
    else
    if((b4=='O'|| b4=='o') && (b6=='O'|| b6=='o') && (b2=='O'|| b2=='o'))
    {
        sound.play();
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b0").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player O won');
        myfunc_2();
    }



    else
    if((b0=='X'||b0=='O') && (b1=='X'||b1=='O') && (b2=='X'||b2=='O') && (b3=='X'||b3=='O') && (b4=='X'||b4=='O') && (b5=='X'||b5=='O') && (b6=='X'||b6=='O') && (b7=='X'||b7=='O') && (b8=='X'||b8=='O'))
    {
        document.getElementById('print').innerHTML= "Match Tie";
        window.alert('Match Tie');
        myfunc_2();
    }
   else
   {
    if(flag==1)
    {
        document.getElementById("print").innerHTML = "Player X Turn";
    }
    else
    {
        document.getElementById("print").innerHTML = "Player O Turn";
    }
  }
  
}

function myfunc_2(){
    location.reload();
    b0= document.getElementById("b0").value='';
    b1= document.getElementById("b1").value='';
    b2= document.getElementById("b2").value='';
    b3= document.getElementById("b3").value='';
    b4= document.getElementById("b4").value='';
    b5= document.getElementById("b5").value='';
    b6= document.getElementById("b6").value='';
    b7= document.getElementById("b7").value='';
    b8= document.getElementById("b8").value='';
}

flag=1;
function myfunc_3(){
    clickSound.play();
    if(flag==1)
    {
        document.getElementById("b0").value="X";
        document.getElementById("b0").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b0").value="O";
        document.getElementById("b0").disabled=true;
        flag=1;
    }
}

function myfunc_4(){
    clickSound.play();
    if(flag==1)
    {
        document.getElementById("b1").value="X";
        document.getElementById("b1").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b1").value="O";
        document.getElementById("b1").disabled=true;
        flag=1;
    }
}

function myfunc_5(){
    clickSound.play();
    if(flag==1)
    {
        document.getElementById("b2").value="X";
        document.getElementById("b2").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b2").value="O";
        document.getElementById("b2").disabled=true;
        flag=1;
    }
}

function myfunc_6(){
    clickSound.play();
    if(flag==1)
    {
        document.getElementById("b3").value="X";
        document.getElementById("b3").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b3").value="O";
        document.getElementById("b3").disabled=true;
        flag=1;
    }
}

function myfunc_7(){
    clickSound.play();
    if(flag==1)
    {
        document.getElementById("b4").value="X";
        document.getElementById("b4").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b4").value="O";
        document.getElementById("b4").disabled=true;
        flag=1;
    }
}

function myfunc_8(){
    clickSound.play();
    if(flag==1)
    {
        document.getElementById("b5").value="X";
        document.getElementById("b5").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b5").value="O";
        document.getElementById("b5").disabled=true;
        flag=1;
    }
}

function myfunc_9(){
    clickSound.play();
    if(flag==1)
    {
        document.getElementById("b6").value="X";
        document.getElementById("b6").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b6").value="O";
        document.getElementById("b6").disabled=true;
        flag=1;
    }
}

function myfunc_10(){
    clickSound.play();
    if(flag==1)
    {
        document.getElementById("b7").value="X";
        document.getElementById("b7").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b7").value="O";
        document.getElementById("b7").disabled=true;
        flag=1;
    }
}

function myfunc_11(){
    clickSound.play();
    if(flag==1)
    {
        document.getElementById("b8").value="X";
        document.getElementById("b8").disabled=true;
        flag=0;
    }
    else
    {
        document.getElementById("b8").value="O";
        document.getElementById("b8").disabled=true;
        flag=1;
    }
}