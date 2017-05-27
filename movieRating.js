function maximizeRatings(ratings) {
    //if it is positive, then add
    //if it is negative, then check 1 more, it is a smaller negative, then don't jump
   var odd = permuteCombo(ratings, 0)
   var even = permuteCombo(ratings,1)
   return(Math.max(odd, even))

}

function permuteCombo(ratings, index){
	var highestRating = 0;
     for(var i = index; i < ratings.length; i ++) {
        if(ratings[i] > 0) {
            highestRating += ratings[i]
        } else if(ratings[i] < 0) {
            if(ratings[i] > ratings[i+1]) {
                highestRating+= ratings[i]
            } else {
                highestRating += ratings[i+1]
                i++;
            }
        }
        console.log(highestRating)
    }
    return highestRating
}

console.log(maximizeRatings([-1, -2,  -3, -4, -5]))