// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '✅Correct Number!';


// document.querySelector('.Number').textContent = '13';
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let score = 20;
let highscore = 0;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
document.querySelector('.check').addEventListener
    ('click', function () {
        
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        if (!guess) {
            document.querySelector('.message').textContent =
                '❌ No Number';

        }
        else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉Correct Number!';
            document.querySelector('.Number').textContent = secretNumber;
            highscore++;
            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('body').style.backgroundColor='rgb(60, 83, 69)';
            document.querySelector('.Number').style.padding = '20px 60px';
        }
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '📈 Bu son katta... ';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = '🧨yurishingiz tugadi';
                document.querySelector('.score').textContent = 0;
            }


        }
        else if (guess < secretNumber ) {
            if (score > 1) {
                document.querySelector('.message').textContent = '📉 Bu son kichik... ';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = '🧨yurishingiz tugadi';
                document.querySelector('.score').textContent = 0;
            }

        }
    })
