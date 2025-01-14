let result = ''; 
let computerM = '';
let playerMove = '';


document.querySelector('#butte').addEventListener('click', () => {
    pickCompM(); 
    playG('rock'); 
    Gest('rock',computerM); 

    alert('You picked rock. the computer picked ' + computerM + '. ' + result + '\n' + 
    'Your score : ' + score.Wins + '  Computer score : ' + score.Losses + '  Ties : ' + score.Tie
    );
}); 

document.querySelector('#buttd').addEventListener('click', () => {
    pickCompM(); 
    playG('paper'); 
    Gest('paper',computerM); 

    alert('You picked Paper. the computer picked ' + computerM + '. ' + result + '\n' + 
    'Your score : ' + score.Wins + '  Computer score : ' + score.Losses + '  Ties : ' + score.Tie
    );
});

document.querySelector('#buttt').addEventListener('click', () => {
    pickCompM(); 
    playG('scissors')
    Gest('scissors',computerM); 

    alert('You picked Scissors. the computer picked ' + computerM + '. ' + result + '\n' + 
    'Your score : ' + score.Wins + '  Computer score : ' + score.Losses + '  Ties : ' + score.Tie
    );
}); 

document.querySelector('#buttc').addEventListener('click', () => {
    document.querySelector('.js-confirmation').innerHTML = `Are you sure you want to quit? <br> <button class = "js-yes"> Yes </button> <button class = "js-no"> No </button>`

    //The setTimeout coming in clutch, where it very slightly delays the calling of our functionings so that the DOM elements can properly load up before we apply event-listeners onto them. Wonderful!. 
        setTimeout(() => {
            document.querySelector('.js-yes').addEventListener('click', () => {
                score.Wins = 0; 
                score.Losses = 0; 
                score.Tie = 0; 
                document.querySelector('.js-score').innerHTML = 'Your score : ' + score.Wins + ',' + '  Computer score : ' + score.Losses + ',' +' Ties : ' + score.Tie
                Gest('rock','rock'); 
                ElemMoves('Nothing', 'Nothing')
                document.querySelector('.js-result').innerHTML = 'Start the game!';
                document.querySelector('.js-confirmation').innerHTML = '';
            })
    
            document.querySelector('.js-no').addEventListener('click', () => {
                document.querySelector('.js-confirmation').innerHTML = ''; 
            })
        }, 10);
})

document.body.addEventListener('keydown', (event) => {
    if(event.key == 'r'){
        pickCompM(); 
        playG('rock'); 
        Gest('rock',computerM); 
    
        alert('You picked rock. the computer picked ' + computerM + '. ' + result + '\n' + 
        'Your score : ' + score.Wins + '  Computer score : ' + score.Losses + '  Ties : ' + score.Tie
        );
    }
    else if(event.key == 'p'){
        pickCompM(); 
        playG('paper'); 
        Gest('paper',computerM); 
    
        alert('You picked Paper. the computer picked ' + computerM + '. ' + result + '\n' + 
        'Your score : ' + score.Wins + '  Computer score : ' + score.Losses + '  Ties : ' + score.Tie
        );
    }
    else if(event.key == 's'){
        pickCompM(); 
        playG('scissors')
        Gest('scissors',computerM); 
    
        alert('You picked Scissors. the computer picked ' + computerM + '. ' + result + '\n' + 
        'Your score : ' + score.Wins + '  Computer score : ' + score.Losses + '  Ties : ' + score.Tie
        );
    }
    else if(event.key == 'Escape'){
        document.querySelector('.js-confirmation').innerHTML = `Are you sure you want to quit? <br> <button class = "js-yes"> Yes </button> <button class = "js-no"> No </button>`

//The setTimeout coming in clutch, where it very slightly delays the calling of our functionings so that the DOM elements can properly load up before we apply event-listeners onto them. Wonderful!. 
    setTimeout(() => {
        document.querySelector('.js-yes').addEventListener('click', () => {
            score.Wins = 0; 
            score.Losses = 0; 
            score.Tie = 0; 
            document.querySelector('.js-score').innerHTML = 'Your score : ' + score.Wins + ',' + '  Computer score : ' + score.Losses + ',' +' Ties : ' + score.Tie
            Gest('rock','rock'); 
            ElemMoves('Nothing', 'Nothing')
            document.querySelector('.js-result').innerHTML = 'Start the game!';
            document.querySelector('.js-confirmation').innerHTML = '';
        })

        document.querySelector('.js-no').addEventListener('click', () => {
            document.querySelector('.js-confirmation').innerHTML = ''; 
        })
    }, 10);
    }
}); 

let score = JSON.parse(localStorage.getItem('score')); //this command to reconvert our score from a string to an object. 
//    {
//     Wins: 0,
//     Losses: 0, 
//     Tie: 0
//    }
//But now out score is null, we commented out the object part. so, here is the thing to do : 
if(score == null){
    score = 
   {
    Wins: 0,
    Losses: 0, 
    Tie: 0
   }
}

function ElemMoves(ex,why) {
    document.querySelector('.js-moves').innerHTML = "You picked : " + ex +"----" + "The computer picked : " + why
}

function Gest(ex,why){
    document.querySelector('.js-result2').innerHTML = 
    'You' +
    '<img class = "imago3" src="' + ex + '.svg" alt="">' + " " + 
    '<img class = "imago3" src="' + why + '.svg" alt="">' + 
    'Computer'; 
}

let holder; 
let AutoPlaying = false;

function Auto(){
if(AutoPlaying == false){
    holder = setInterval(function(){ //setInterval returns a value, so, you can store it in a variable to later apply operations on it. 
        pickCompM(); 
        pickPlayerM(); 
        playG(playerMove);
        Gest(playerMove,computerM); 
        ElemMoves(playerMove,computerM); 
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-score').innerHTML = 'Your score : ' + score.Wins + '  Computer score : ' + score.Losses + '  Ties : ' + score.Tie;
    }, 1000 )
    AutoPlaying = true; 
    document.querySelector('#nache').innerHTML = 'Stop!'; 
}
else{
    clearInterval(holder); //This command is used to stop an async function. 
    AutoPlaying = false; 
    document.querySelector('#nache').innerHTML = 'Autoplay!'; 
}
}

    function pickCompM(){
// This math.random function generates a random number between 0 and 1; 
    const randomN = Math.random(); //keep check of the concept of "scope" for different variables. 
    if (randomN >= 0 && randomN < 1/3){
        computerM = 'rock'; 
    }
    else if(randomN > 1/3 && randomN < 2/3){
        computerM = 'paper'; 
    }
    else if(randomN > 2/3 && randomN < 1){
        computerM = 'scissors'; 
    }
    }

    function playG(playerMove){
if (playerMove == 'rock'){
        if(computerM === 'rock'){
        result = 'Tie'; 
        score.Tie ++
        }
        else if(computerM === 'paper'){
        result = 'You Lose'; 
        score.Wins ++ 
         }
        else{
        result = 'You win'; 
        score.Losses ++ 
        }
        }

if (playerMove == 'paper'){
        if(computerM === 'rock'){
        result = 'You Win'; 
        score.Wins ++ 
        }
        else if(computerM === 'paper'){
        result = 'Tie'; 
        score.Tie ++
        }
    else{
        result = 'You Loose';
        socre.Losses ++ 
        }
        }

if (playerMove == 'scissors'){
        if(computerM === 'rock'){
        result = 'You Lose'; 
        score.Losses ++ 
        }
    else if(computerM === 'paper'){
        result = 'You Win'; 
        score.Wins ++ 
        }
    else{
        result = 'Tie'; 
        score.Tie ++
        }
        }
        localStorage.setItem('score', JSON.stringify(score)); //you have to keep this part within the function to update the values after every evocation

        ElemMoves(playerMove,computerM); 
        Gest(playerMove,computerM); 

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-score').innerHTML = 'Your score : ' + score.Wins + '  Computer score : ' + score.Losses + '  Ties : ' + score.Tie
        
        }

    function pickPlayerM(){
        const randomN = Math.random(); 
        if(randomN > 0 && randomN <= 1/3){
            playerMove = 'rock'; 
        }
        if(randomN > 1/3 && randomN <= 2/3){
            playerMove = 'paper'; 
        }
        else{
            playerMove = 'scissors'; 
        }
    }
