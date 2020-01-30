deck = { //deck obj with cardArray
    cardArray: [],

    deckLoad: function () {
        
        for(i = 0; i< 52; i++ ){ //
            //This code creates cards in order
            //If index is between 0-12 then its suit 1, rank 2-14.
            if (i < 13) {
                card = new Card(1, i + 2);
                
            }
            //If index is between 13-25 then its suit 2, rank 2-14
            else if (i >= 13 && i < 26) {
                card = new Card(2, i - 11);
            }

            //If index is between 26-38 then its suit 3, rank 2-14
            else if (i >= 26 && i < 39) {
                card = new Card(3, i - 24);
            }
            //else index is between 39-51 suit 4, rank 2-14
            else {
                card = new Card(4, i - 37);
            }

            this.cardArray.push(card) //This code pushes card obect into cardArray
        }
    },

    shuffle : function () {
        //variables
        

        if(this.cardArray.length < 1 || this.cardArray == undefined){
            //checks if your card array is empty if it is call this.deckLoad() and fills card array
            this.deckLoad();
        }

        var ind = this.cardArray.length;
        while (ind != 0) {
            var rnd = Math.floor(Math.random()*ind);
            ind--;
            
            var temp = this.cardArray[ind];
            this.cardArray[ind] = this.cardArray[rnd];
            this.cardArray[rnd] = temp;

            
        }

    }
}