
             function diceButton() {
                const play1=Math.floor(Math.random() * 6) + 1;
                const play1dice="Dice"+play1+".png";
                document.getElementById("img1").setAttribute('src',play1dice);

                const play2=Math.floor(Math.random() * 6) + 1;
                const play2dice="Dice"+play2+".png";
                document.getElementById("img2").setAttribute('src',play2dice);
             

                if(play1 > play2) {

                   document.getElementById("gameHead").innerHTML="Player 1 Won! :)";
             }

                  else if(play1 < play2) {
                   
                     document.getElementById("gameHead").innerHTML="Player 2 Won! :)";
                }

                else {

                     document.getElementById("gameHead").innerHTML="Draw!";
                }
            
                
            }  
             
         