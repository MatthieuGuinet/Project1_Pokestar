// getting nodes of the question and answers
const quizzQuestion = document.getElementById("quizz-question");
const answer1 = document.getElementById("quizz-answer1");
const answer2 = document.getElementById("quizz-answer2");
const answer3 = document.getElementById("quizz-answer3");
const answer4 = document.getElementById("quizz-answer4");

// defining the questions objects. COuld later be done using a constructor
//question 1 already exists in the index.html

let question2 = {
  question: "Quelle est ta couleur préférée ?",
  answer1: "bleu",
  answer2: "jaune",
  answer3: "beige",
  answer4: "rouge",
  answer1class: "vaporeon",
  answer2class: "jolteon",
  answer3class: "eevee",
  answer4class: "flareon",
};

let question3 = {
  question: "Tu es plutôt d'humeur ?",
  answer1: "Douce et apaiséé",
  answer2: "Sanguine et massacrante",
  answer3: "Electrique",
  answer4: "Lisse et facile",
  answer1class: "eevee",
  answer2class: "flareon",
  answer3class: "jolteon",
  answer4class: "vaporeon",
};

// defining the var counting number of "suivant" clicks, value is the current question
let suivantCount = 0;

//defining the var count of each pokemon
let eeveeCount = 0;
let flareonCount = 0;
let jolteonCount = 0;
let vaporeonCount = 0;

// function to define the "suivant" button effect in the quizz

export default function nextQuestion() {
  let allAnswers = document.getElementsByClassName("quizz-answer");
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

    // removes the isChosen class  from all the items before switching to the next question

    // let allAnswers = document.getElementsByClassName("quizz-answer");

    for (let i = 0; i < allAnswers.length; i++) {
      allAnswers[i].classList.remove("isChosen");
      allAnswers[i].classList.remove("eevee");
      allAnswers[i].classList.remove("flareon");
      allAnswers[i].classList.remove("jolteon");
      allAnswers[i].classList.remove("vaporeon");
    }

    //removes the pokemon named class

    //  controls that all the questions aren't answered yet and displays answers for the right question
    switch (suivantCount) {
      case 1:
        quizzQuestion.innerText = question2.question;
        answer1.innerText = question2.answer1;
        answer2.innerText = question2.answer2;
        answer3.innerText = question2.answer3;
        answer4.innerText = question2.answer4;
        answer1.classList.add(question2.answer1class);
        answer2.classList.add(question2.answer2class);
        answer3.classList.add(question2.answer3class);
        answer4.classList.add(question2.answer4class);
        break;

      case 2:
        quizzQuestion.innerText = question3.question;
        answer1.innerText = question3.answer1;
        answer2.innerText = question3.answer2;
        answer3.innerText = question3.answer3;
        answer4.innerText = question3.answer4;
        answer1.classList.add(question3.answer1class);
        answer2.classList.add(question3.answer2class);
        answer3.classList.add(question3.answer3class);
        answer4.classList.add(question3.answer4class);

        break;

      // all the questions have been answered, let's display some result depending on the previous choices associated to some pokemon
      case 3:
        console.log(eeveeCount);

      default:
        break;
    }
  }
}
