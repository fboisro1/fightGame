document.addEventListener("DOMContentLoaded", function(event){
    playerArray = [];
    compArray = [];
    turn = 0;
    playScore = 0;
    compScore = 0;

    document.getElementById("deal").addEventListener("click", function () {
        playScore = 0;
        compScore = 0;
        turn = 0;
        document.getElementById("next").style.display = "block";

        deck.deckLoad();
        deck.shuffle();
        for(i = 0; i < 26; i++){
            playerArray[i] = deck.cardArray[i]; //referencing card obj
            compArray[i] = deck.cardArray[i+26];
        }

        //console.log(deck.cardArray);
        console.log(playerArray);
        console.log("------------------------")
        console.log(compArray);
        
    });

    

    document.getElementById("next").addEventListener("click", function () {
        let pCard = document.getElementById("playerCard");
        let cCard = document.getElementById("compCard");

        document.getElementById("deal").style.display = "none";

        


        
            pCard.innerHTML = convertRank(playerArray[turn]) + " of " +  convertSuit(playerArray[turn]) + "   vs.  ";
            cCard.innerHTML = convertRank(compArray[turn]) + " of " + convertSuit(compArray[turn]);
          

            if(compareCards(playerArray[turn], compArray[turn]) == 0){
                document.getElementById("result").innerHTML = "Player Lost";
                compScore++;
            }
            else{
                document.getElementById("result").innerHTML = "Player Won";
                playScore++;
            }

            document.getElementById("score").innerHTML = "Player score is: " + playScore 
            +  "  Computer score is: " + compScore;


            if(turn == 25){
                //This is the last turn
                document.getElementById("deal").style.display = "block";
                document.getElementById("next").style.display = "none";
                
                if(playScore > compScore){
                    document.getElementById("result").innerHTML = "Player Won the match"; 
                }
                else if(playScore < compScore){
                    document.getElementById("result").innerHTML = "Computer Won the match";
                }
                else{
                    document.getElementById("result").innerHTML = "Issa Tie!";
                }
            }

        // pCard.innerHTML = "boo";
        // cCard.innerHTML = "hoo";
        // document.getElementById("playerCard").innerHTML = "boo";
        // document.getElementById("compCard").innerHTML = "hoo";
        turn++;
    });

    function convertSuit(a) {
        if(a.suit == 1){
            return "spades";
        }
       else if(a.suit == 2){
            return "clubs";
        }
       else if(a.suit == 3){
            return "diamonds";
        }
        else{
            return "hearts";
        }
    }

    function convertRank(a) {
        if(a.rank == 11){
            return "jack";
        }
        else if(a.rank == 12){
            return "queen";
        }
        else if(a.rank == 13){
            return "king"
        }
       else if(a.rank == 14){
            return "ace";
        }
        else{
            return a.rank;
        }
    }


    function compareCards(a, b) {
        if(a.suit > b.suit){
            return 1;
        }
        else if(a.suit < b.suit){
            return 0;
        }
        else {
            
            if(a.rank > b.rank){
                return 1;
            }
            else{
                return 0;
            }
        }
    }
})