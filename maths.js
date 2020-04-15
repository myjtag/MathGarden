let answer;
let score = 0;
let backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;

    answer = n1 + n2;
}

function checkAnswer() {
    const prediction = predictImage();
    console.log(`answer: ${answer} , prediction ${prediction}`);

    if (prediction == answer) {
        score++;
        console.log(`Correct! score is: ${score}`);

        if (score <= 6) {
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert('you have won!');
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
            return;
        }
    }
    else {
        if (score != 0) {
            score--;
        }
        console.log(`Wrong! score is: ${score}`);
        alert('opps, check your calculations!');
        setTimeout(() => {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);
    }


}