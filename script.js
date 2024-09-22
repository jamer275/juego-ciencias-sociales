const questions = [
    {
        question: "¿En donde se halla el extenso territorio Arabigo ?",
        options: ["Europa", "Continente Africano", "La Meca"],
        correct: 1
    },
    {
        question: "¿En la Meca existe tres dioses?",
        options: [ "Monat, Al-uzza, Al-laf","Omeya A-juarismi A-battani", "Al- uzza, Aristoteles, Mahoma"],
        correct: 0
    },
    {
        question: "¿En la medida que el Ummah fue creciendo en la meca fue esparciendose por otras poblaciones como Yatrib?",
        options: ["Falso", "Verdadero"],
        correct: 1
    },
    {
        question: "¿El coran fue escrito en lengua Inglesa lo que ocasiono que el crecimiento del territorio musulman?",
        options: [ "Falso","Verdadero"],
        correct: 1
    },
    {
        question: "¿Que aporto Al-jurarismi?",
        options: ["Conocimiento Algebra, Aritmeticas","Cartografia","Botanica"],
        correct: 0
    },
    {
        question: "¿Que estudio Al-battani?",
        options: ["Astronomia, Matematica", "Lenguaje","Biologia"],
        correct: 0
    },
    {
        question: "¿Porque se destaco  Al-razis?",
        options: [ "Destacado medico","Destacado profeta", "Destacado astronomo"],
        correct: 0
    },
    {
        question: "¿En la Meca existe tres dioses?",
        options: [ "Monat, Al-uzza, Al-laf","Omeya, A-juarismi, A-battani", "Al- uzza, Aristoteles, Mahoma"],
        correct: 0
    },
    {
        question: "¿Una tribu importante fueron los Quraisies quienes tomaron el control de la meca?",
        options: ["Falso", "Verdadero"],
        correct: 1
    },
    {
        question: "¿En la medida que el ummah fue creciendo en la meca fue esparciendose por otras poblaciones como yatrib?",
        options: ["Falso", "Verdadero"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let lives = 3;

const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-button');
const livesContainer = document.getElementById('lives-container');
const scoreElement = document.getElementById('score');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    lives = 3;
    updateLives();
    showQuestion();
    scoreElement.textContent = "";
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestionIndex].correct;
    if (selectedOption === correctOption) {
        score++;
    } else {
        lives--;
        updateLives();
        if (lives === 0) {
            alert("Has perdido todas las vidas. ¡Juego terminado!");
            scoreElement.textContent = `Tu puntaje final es: ${score}`;
            return startGame();
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("¡Has respondido todas las preguntas!");
        scoreElement.textContent = `Tu puntaje final es: ${score}`;
        startGame();
    }
}

function updateLives() {
    livesContainer.innerHTML = '';
    for (let i = 0; i < lives; i++) {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        livesContainer.appendChild(heart);
    }
}

startGame();
