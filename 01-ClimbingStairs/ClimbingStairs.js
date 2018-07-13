/*

This Excercise was taken from www.codefights.com a place to learn algorithms and improve de programming skills
Problem:

You are climbing a staircase that has n steps. You can take the steps either 1 or 2 at a time. Calculate how many distinct ways you can climb to the top of the staircase.

Example

For n = 1, the output should be
climbingStairs(n) = 1;

For n = 2, the output should be
climbingStairs(n) = 2.

You can either climb 2 steps at once or climb 1 step two times.
*/

//Function that resolve this
function climbingStairs(steps) { 
    //Here is with Dyanmic Programming Top-Down Manner, this method is not eficient for 42 steps or up
    /*
    if(steps == 1) return 1
    if(steps == 2) return 2
    return climbingStairs(steps - 1) + climbingStairs(steps - 2)
    */

    //This is by Bottom-Up Manner, optimized using Memoization
    if(steps == 1) return 1
    if(steps == 2) return 2
    
    let previous = [1,2]
    let current = 2 //We come here when steps > 2
    while(current < steps){
        //We need to update the two previous steps
        let pretotal = previous[0] + previous[1]
        // and we update previous[0] with original previous[1]  and further
        previous[0] = previous[1]
        previous[1] = pretotal // We need update the most recent with the total sum of previous three
        ++current
        
    }
    return previous[1]
}
/*
Test and Try to improve the solution by yourself :D
*/