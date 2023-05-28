'use strict'


// let secretNumber = Math.trunc(Math.random()* 100) + 1
// console.log(secretNumber)

// console.log('Welcome to the guessing game');

// const player1Name = prompt('What is your name player1?')

// console.log(`Welcome ${player1Name} to the guessing game` )

// const player1Age = prompt(`What is your age ${player1Name}`)

// const player1Occupation = prompt(`What do you do for a living ${player1Name}?`)

// const player1Country = prompt('Where do you come from?')

// const player2Name = prompt('What is your name player2?')

// console.log(`Welcome ${player2Name} to the guessing game` )

// const player2Age = prompt(`What is your age ${player2Name}?`)

// const player2Occupation = prompt(`What do you do for a living ${player2Name}?`)

// const player2Country = prompt('Where do you come from?')

// let player1guesses = 3;
// let player2guesses = 3;

// console.log(`Thank you for filling out your info ${player1Name} and ${player2Name}. Lets start!`)
// console.log(`Try and guess a number between 1 and 100, you have 4 tries. ${player1Name} starts`)



// for (player1guesses; player1guesses >= 0; player1guesses--) {
// let player1MadeGuess = parseInt(prompt(`make a guess!`))

//     if (player1MadeGuess > secretNumber) {
//         console.log('Too high 📈');
//         console.log(`You have ${player1guesses} left`)
        
        
//     } 
    
//     else if(player1MadeGuess < secretNumber) {
//         console.log('Too Low 📉')
//         console.log(`You have ${player1guesses} left`)
        
//     }


//     else if (player1MadeGuess === secretNumber) {
//         console.log('That is correct 🎉');
//         console.log(`${player1Name} has won the game`)
//         break;
//     }

    
// };

// console.log(`${player1Name} has not guessed the number`)
// console.log(`It's ${player2Name}'s turn`)


// for (player2guesses; player2guesses >= 0; player2guesses--) {
//     let player2MadeGuess = parseInt(prompt(`make a guess!`))
    
//         if (player2MadeGuess > secretNumber) {
//             console.log('Too high 📈');
//             console.log(`You have ${player2guesses} left`)
            
            
//         } 
        
//         else if(player2MadeGuess < secretNumber) {
//             console.log('Too Low 📉')
//             console.log(`You have ${player2guesses} left`)
            
//         }
        
        
//         else if (player2MadeGuess === secretNumber) {
//             console.log('That is correct 🎉');
//             console.log(`${player2Name} has won the game`)
//             break;
//         }
    
        
//     };


class GuessingGame {
    constructor() {
      this.secretNumber = Math.floor(Math.random()* 100) + 1;
      this.player1guesses = 4;
      this.player2guesses = 4;
      this.currentPlayer = 1;
      console.log(this.secretNumber)
    }
  
    start() {
      document.querySelector('.message').innerHTML = 'Welcome to the guessing game!'
      this.getPlayerInfo(1);
      this.getPlayerInfo(2);
      this.play();
    }
  
    // getPlayerInfo(playerNumber) {
    //   const name = document.querySelector('.input1').value;
    //   const age = document.querySelector('.input2').value
    //   const occupation = document.querySelector('.input3').value
    //   const country = document.querySelector('.input4').value
    //   const nameplayer2 = document.querySelector('.input5').value;
    //   const age2 = document.querySelector('.input6').value
    //   const occupation2 = document.querySelector('.input7').value
    //   const country2 = document.querySelector('.input8').value
    //   if (playerNumber === 1) {
    //     this.player1Name = name;
    //     this.player1Age = age;
    //     this.player1Occupation = occupation;
    //     this.player1Country = country;
    //   } else {
    //     this.player2Name = nameplayer2;
    //     this.player2Age = age2;
    //     this.player2Occupation = occupation2;
    //     this.player2Country = country2;
    //   }
    // }
    getPlayerInfo(playerNumber) {
      if (playerNumber === 1) {
        this.player1Name = document.querySelector('.input1').value;
        this.player1Age = document.querySelector('.input2').value;
        this.player1Occupation = document.querySelector('.input3').value;
        this.player1Country = document.querySelector('.input4').value;
      } else {
        this.player2Name = document.querySelector('.input5').value;
        this.player2Age = document.querySelector('.input6').value;
        this.player2Occupation = document.querySelector('.input7').value;
        this.player2Country = document.querySelector('.input8').value;
      }
    }
    // play() {
    //    for (this.currentPlayer = 1; this.currentPlayer <= 2; this.currentPlayer++) {
    //     const currentPlayerName = this.currentPlayer === 1 ? this.player1Name : this.player2Name;
    //     document.querySelector('.player-call').innerHTML = `${currentPlayerName}, it's your turn to guess!`
    //     // for (let guesses = 3; guesses >= 0; guesses--) {
    //       document.querySelector('.check').addEventListener('click', () => {
    //         const madeGuess = document.querySelector('.guess').value;
    //         // document.querySelector('.guesses-amount').innerHTML = `Make a guess! You have ${guesses} tries left.`
    //         let guesses = 4
    //         if (madeGuess > this.secretNumber) {
    //           document.querySelector('.message').innerHTML= `Too high 📈`
    //           guesses--
    //         } else if (madeGuess < this.secretNumber) {
    //           document.querySelector('.message').innerHTML= `Too low 📉`
    //           guesses--
    //         } else if(guesses < 0) {
    //           document.querySelector('.message').innerHTML= `Your guesses are up, its ${this.player2Name}'s turn` 
              
    //         } else {
    //           document.querySelector('.message').innerHTML= `That is correct 🎉`
    //           document.querySelector('.guesses-amount').innerHTML= `${currentPlayerName} has won the game!`
    //           return;
    //         // }
    //       }
    //       });
    //       // document.querySelector('.guesses-amount').innerHTML = `Make a guess! You have ${guesses} tries left.`
    //     // document.querySelector('.message').innerHTML= `${currentPlayerName} has used all their guesses!`
    //   }
    //   // document.querySelector('.message').innerHTML= `Both players have used all their guesses. The secret number was ${this.secretNumber}.`
    // }
    play() {
      const currentPlayerName = this.currentPlayer === 1 ? this.player1Name : this.player2Name;
      document.querySelector('.player-call').innerHTML = `${currentPlayerName}, it's your turn to guess!`;
    
      document.querySelector('.check').addEventListener('click', () => {
        const madeGuess = document.querySelector('.guess').value;
        let guesses = this.currentPlayer === 1 ? this.player1guesses : this.player2guesses;
    
        if (madeGuess > this.secretNumber) {
          document.querySelector('.message').innerHTML = `Too high 📈`;
        } else if (madeGuess < this.secretNumber) {
          document.querySelector('.message').innerHTML = `Too low 📉`;
        } else if(madeGuess == this.secretNumber) {
          document.querySelector('.message').innerHTML = `That is correct 🎉`;
          document.querySelector('.guesses-amount').innerHTML = "";
          document.querySelector('.player-call').innerHTML = "";
          document.documentElement.style.setProperty('--dark-mode', '#ca15da');
          document.querySelector('.guess').value = "";
          document.querySelector('.number').innerHTML = this.secretNumber;
          return;
        }
    
        guesses--;
        if (guesses < 0) {
          this.switchPlayers();
        } else if (guesses === 0) {
          if (this.currentPlayer === 1) {
            this.switchPlayers();
          } else {
            document.querySelector('.message').innerHTML = `Both players have used all their guesses. The secret number was ${this.secretNumber}.`;
            document.querySelector('.guesses-amount').innerHTML = '';
          }
        } else {
          this.currentPlayer === 1 ? (this.player1guesses = guesses) : (this.player2guesses = guesses);
          document.querySelector('.guesses-amount').innerHTML = `Make a guess! You have ${guesses} ${guesses === 1 ? 'try' : 'tries'} left.`;
        }
      });

      // document.querySelector('.again').addEventListener('click', () => {
      //   this.secretNumber = Math.floor(Math.random() * 100) + 1;
      //   document.querySelector('.guesses-amount').innerHTML = "";
      //   document.querySelector('.player-call').innerHTML = "";
      //   document.querySelector('.guess').innerHTML = "?";
      //   document.querySelector('.message').innerHTML = "start guessing!"
      //   document.documentElement.style.setProperty('--dark-mode', '#1ebc8a');
        
      // })
      
    }

    switchPlayers() {
      if (this.currentPlayer === 1) {
        this.currentPlayer = 2;
        document.querySelector('.player-call').innerHTML = `${this.player2Name}, it's your turn to guess!`;
        document.querySelector('.guesses-amount').innerHTML = `Make a guess! You have ${this.player2guesses} ${
          this.player2guesses === 1 ? 'try' : 'tries'
        } left.`;
      } else {
        this.currentPlayer = 1;
        document.querySelector('.player-call').innerHTML = `${this.player1Name}, it's your turn to guess!`;
        document.querySelector('.guesses-amount').innerHTML = `Make a guess! You have ${this.player1guesses} ${
          this.player1guesses === 1 ? 'try' : 'tries'
        } left.`;
      }
    }
    
}
  
  const game = new GuessingGame();
  document.querySelector('.start').addEventListener('click', () => {
    game.start()
    document.querySelector('.message').scrollIntoView({behavior: "smooth"})
  })
