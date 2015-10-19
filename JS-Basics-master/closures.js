//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.
var inner = outer();
  //Code Here

//Once you do that, invoke inner.

  //Code Here
inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number/3;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.
  //Code Here
var makeCall = callFriend();
makeCall(867-5309);


//Next Problem
function makeOrageJuiceMachine(){
  function orageJuiceMachine(orenges){
    return 'Here are ' + orenges/5 + ' cups of orange juice';
  }
  return orageJuiceMachine;
};
var makeOreageJuice = makeOrageJuiceMachine();
makeOreageJuice(50);


/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //makeCounter creates a short cut to the value of x that begins at 0. Then it returns a machine the efects the value of x by adding one to it. then outputs the current value of x
   var x = 0;
   
 function makeCounter(){ // manufacturing machine we call "makeCounter"
   var x = 0; // creates a shortcut to the value found at x and starts it at 0
   
   return function(id){ // outputs another machine that
       x++;           // adds one to the value of x
       document.getElementById(id).value = x;      // then outputs the current value of x
   };
  // 
  //  Code below here does not run
   var y = 5;
   console.log(y);
 }
  
        
  var counter1 = makeCounter(); // we ran the machine "makeCounter" which made the machine we are now calling "count"
  var counter2 = makeCounter(); // we ran the machine "makeCounter" which made the machine we are now calling "count"
  var counter3 = makeCounter(); // we ran the machine "makeCounter" which made the machine we are now calling "count"
  var counter4 = makeCounter(); // we ran the machine "makeCounter" which made the machine we are now calling "count"
  // count is assined to the value returned from invoking makeCounter.
  // THIS IS WHY WE NEED CLOSURES!
  // count() // 1  // whenever we run the machine "count", the value of x is then added to and we can use the value of x at that point
  // count() // 2
  // count() // 3
  // count() // 4

var i = 0;
    function countThis(id) {
        i++;
          document.getElementById(id).value = i;
    }

//Next Problem



/*
  Write a function that does something simple (console, alert, etc). 
  Write a second function that accepts the first function as it's first parameter. 
  The second function should return a new third function which, when invoked, 
  invokes the first, original function that was passed in, but will only ever do so once.
*/

  //Code Here



//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. 
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number. 
  Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's 
  been invoked 'N' number of times, return 'STOP'.
*/



//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code)
   then below write what you expect to happen when the funciton is invoked. 
   *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

    //Code Here



//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


