// getting nodes of the question and answers
const quizQuestion = document.getElementById("quiz-question");
const answer1 = document.getElementById("quiz-answer1");
const answer2 = document.getElementById("quiz-answer2");
const answer3 = document.getElementById("quiz-answer3");
const answer4 = document.getElementById("quiz-answer4");
let quizResultImg = document.getElementById("quiz-result-img");
const allAnswers = document.getElementsByClassName("quiz-answer");

// defining the questions objects using a constructor. COuld later be done using a constructor
//question 1 already exists in the index.html

class Question {
  constructor(question, answer1, answer1class, answer2, answer2class, answer3, answer3class, answer4, answer4class){
    this.question = question;
    this.answer1 = answer1;
    this.answer1class = answer1class;
    this.answer2=answer2;
    this.answer2class=answer2class;
    this.answer3=answer3;
    this.answer3class=answer3class;
    this.answer4=answer4;
    this.answer4class=answer4class;
  }
}

let question1 = new Question("Quelle est ton activité préférée ?","La nature","eevee","La pêche","vaporeon","Le bricolage","jolteon","Lire au coin du feu","flareon");

let question2 = new Question("Quelle est ta couleur préférée ?","Bleu","vaporeon","Jaune","jolteon","Beige","eevee","Rouge","flareon");

let question3 = new Question("Tu es plutôt d'humeur...", "Douce et apaisée","eevee","Sanguine et massacrante","flareon", "Electrique","jolteon","Lisse et facile","vaporeon");

let question4 = new Question("Quel est ton dessin animé préféré ?","La petite sirène","vaporeon","Moi, moche et méchant","jolteon","Bambi","eevee","Dragons","flareon");

let question5 = new Question("En soirée, tu es plutôt ?","Shooters enflammés","flareon","Tek' Paf","jolteon","Grand verre d'eau","vaporeon","Jus détox","eevee")

let question6 = new Question("En musique, tu écoutes ?","Beethoven","eevee","Céline Dion","vaporeon","Johnny Haliday","flareon","Michael Jackson","jolteon")

// function fillQuiz to fill the quizz-container 

   function fillQuiz(questionNumberX){
    quizQuestion.innerText = questionNumberX.question;
      answer1.innerText = questionNumberX.answer1;
      answer2.innerText = questionNumberX.answer2;
      answer3.innerText = questionNumberX.answer3;
      answer4.innerText = questionNumberX.answer4;
      answer1.classList.add(questionNumberX.answer1class);
      answer2.classList.add(questionNumberX.answer2class);
      answer3.classList.add(questionNumberX.answer3class);
      answer4.classList.add(questionNumberX.answer4class);
  }

// defining the var counting number of "suivant" clicks, value is the current question
let suivantCount = 0;

//defining the var count of each pokemon
let eeveeCount = 0;
let flareonCount = 0;
let jolteonCount = 0;
let vaporeonCount = 0;

// defining the maxCount gathered
let pokemonMaxCount = 0;

// function to define the "suivant" button effect in the quiz

function nextQuestion() {
  // controls that an answer is effectively chosen, then adds 1 to the suivantCount
  if (
    answer1.classList.contains("isChosen") ||
    answer2.classList.contains("isChosen") ||
    answer3.classList.contains("isChosen") ||
    answer4.classList.contains("isChosen")
  ) {
    suivantCount += 1;

    // takes into account the answer for the final result

    let chosenAnswer = document.getElementsByClassName("isChosen");

    if (chosenAnswer[0].classList.contains("eevee")) {
      eeveeCount += 1;
    }
    if (chosenAnswer[0].classList.contains("flareon")) {
      flareonCount += 1;
    }
    if (chosenAnswer[0].classList.contains("jolteon")) {
      jolteonCount += 1;
    }
    if (chosenAnswer[0].classList.contains("vaporeon")) {
      vaporeonCount += 1;
    }

    // removes the isChosen and pokemon classes  from all the items before switching to the next question

     for (let i = 0; i < allAnswers.length; i++) {
      allAnswers[i].classList.remove("isChosen","eevee","flareon","jolteon","vaporeon");
    }

    //  controls that all the questions aren't answered yet and displays answers for the right question
    switch (suivantCount) {
      case 1:
        fillQuiz(question2);
        break;
      case 2:
        fillQuiz(question3);
        break;
      case 3:
        fillQuiz(question4);
        break;
      case 4:
       fillQuiz(question5);
        break;
      case 5:
        fillQuiz(question6);
        break;

      // all the questions have been answered, let's display some result depending on the previous choices associated to some pokemon

      case 6:
        // establishing the max score obtained
        pokemonMaxCount = Math.max(
          eeveeCount,
          flareonCount,
          jolteonCount,
          vaporeonCount
        );

        // removing the "suivant" button, displaying the next button

        let nextButton = document.getElementById("quiz-button-next");
        nextButton.style.display = "none";

        document.getElementById("quiz-replay-button").style.display = "initial";

        // removing the answers display
        for (let i = 0; i < allAnswers.length; i++) {
          allAnswers[i].style.display = "none";
        }

        //comparing each pokemon score to the best score. If winning, then displays new title, new image of the winning pokemon by giving the quizResultImg the correct source

        if (eeveeCount === pokemonMaxCount) {
          quizQuestion.innerText = "EVOLI !!!!";
          quizResultImg.style.display = "initial";
          quizResultImg.src = "./assets/quiz_section/eevee_quiz_result.png";
        } else if (flareonCount === pokemonMaxCount) {
          quizQuestion.innerText = "FLAREON !!!!";
          quizResultImg.style.display = "initial";
          quizResultImg.src = "./assets/quiz_section/flareon_quiz_result.png";
        } else if (jolteonCount === pokemonMaxCount) {
          quizQuestion.innerText = "JOLTEON !!!!";
          quizResultImg.style.display = "initial";
          quizResultImg.src = "./assets/quiz_section/jolteon_quiz_result.png";
        } else if (vaporeonCount === pokemonMaxCount) {
          quizQuestion.innerText = "VAPOREON !!!!";
          quizResultImg.style.display = "initial";
          quizResultImg.src = "./assets/quiz_section/vaporeon_quiz_result.png";
        }

      default:
        break;
        mod;
    }
  }
  else {
    document.getElementById("quiz-error").style.display = "initial";
    document.getElementById("quiz-button-next").style.marginBottom = "10px";
  }
}

function replay() {
  // reseting maxCount, pokemon values and next button values
  pokemonMaxCount = 0;
  eeveeCount = 0;
  jolteonCount = 0;
  vaporeonCount = 0;
  flareonCount = 0;
  suivantCount = 0;

  // insertion of the first question which was already displayed on first opening of the website

  fillQuiz(question1);

  // displaying back "suivant" button

  let nextButton = document.getElementById("quiz-button-next");
  nextButton.style.display = "initial";

  //as all answers have been removed by using "display none", let's give them back the flex value

  for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].style.display = "flex";
  }

  //   removing the quiz-replay button

  quizResultImg.style.display = "none";
  document.getElementById("quiz-replay-button").style.display = "none";
}

//exporting the two quiz functions to index.js

export let quizFunctions = {
  nextQuestion: nextQuestion,
  replay: replay,
};
