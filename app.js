'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What kind of animal was Harry Potter\'s enchanted pet?',
      answers: [
        'owl',
        'stag',
        'rat',
        'cat'
      ],
      correctAnswer: 'owl',
      image: 'owl.jpg',
      alt: 'snowy owl Hedwig',
      explanation: 'Harry Potter\'s pet was an owl named Hedwig'
    },
    {
      question: 'What was Harry\'s patronus?',
      answers: [
        'stag',
        'doe',
        'rhino',
        'rat'
      ],
      correctAnswer: 'stag',
      image: 'stag.jpg',
      alt: 'Stag patronus',
      explanation: 'Harry Potter had a stag as his patronus'
    },
    {
      question: 'What was Snape\'s patronus?',
      answers: [
        'owl',
        'stag',
        'rat',
        'doe'
      ],
      correctAnswer: 'doe',
      image: 'doe.jpg',
      alt: 'Doe patronus',
      explanation: 'His patronus is a doe, much like Harry\'s mother\'s patronus'
    },
    {
      question: 'What fictional race is Hagrid?',
      answers:[
        'half-ogre',
        'all man',
        'giant',
        'half-giant'
      ],
      correctAnswer: 'half-giant',
      image: 'hagrid.jpg',
      alt: 'Hagrid the groundskeeper',
      explanation: 'Hagrid is a half-giant. His mother is a giant and his father is human'
    },
    {
      question: 'Who Guarded Azkaban?',
      answers:[
        'united states military!',
        'dementors',
        'azkban dragons',
        'ghost'
      ],
      correctAnswer: 'dementors',
      image: 'dementor.jpg',
      alt: 'The soul sucking Dementor; guardian of Azkaban',
      explanation: 'The soul sucking Dementor; guardian of Azkaban'
    },
  ],
  questionNumber: 0,
  score: 3,
  quizStarted: false
    
};

//user should be able to start quiz by pressing start quiz
function renderFirstPage(){
  let startPage = `<section class='quizContent'>
  <h1>Harry Potter Quiz</h1>
      <button type='button' class='start'>Start Game</button>
</section>`;
  return startPage;

}
function renderQuizQuestions(){
  return `<section class='quizContent'>
  <h1>Harry Potter Quiz</h1>
  <p>question `+store.questionNumber+` of 5 </p>
  <p label="question">`+store.questions[store.questionNumber].question+`</p>
  <form id='quiz'>
      <input type="radio" value="`+store.questions[store.questionNumber].answers[0]+`"  name="choices" id="choice-first">
      <label for="choice-first">`+store.questions[store.questionNumber].answers[0]+`</label>
      
      <input type="radio" value="`+store.questions[store.questionNumber].answers[1]+`" name="choices" id="choice-second">
      <label for="choice-second">`+store.questions[store.questionNumber].answers[1]+`</label>

      <input type="radio" value="`+store.questions[store.questionNumber].answers[2]+`"  name="choices" id="choice-third">
      <label for="choice-third">`+store.questions[store.questionNumber].answers[2]+`</label>
      
      <input type="radio" value="`+store.questions[store.questionNumber].answers[3]+`" name="choices" id="choice-fourth">
      <label for="choice-fourth">`+store.questions[store.questionNumber].answers[3]+`</label>
  </form>
  <form>
      <button class='checkAnswer' type='Submit'>Check Answer</button>
  </form>
  
</section>`;
}
function loadFirstPage() {
  
  $('main').html(renderFirstPage());
}
function loadFirstQuestion() {
  $('main').html(renderQuizQuestions());
}

function handleStartButton(){
  
  $('main').on('click',  '.start', event => {
    store.questionNumber = 0;
    loadFirstQuestion();
  }
  ); 

}

//loads appropriate html for questions 

//user should be able to select radio button then click submit 
function handleSubmitButton(){
  $('main').on('click', '.checkAnswer', event =>{
    event.preventDefault();
    let myRadio = $('input[name=choices]')
    let checkedValue = myRadio.filter(':checked').val();
    if (checkedValue === store.questions[store.questionNumber].correctAnswer){
      console.log('correct')
    }
    // if (checkedValue === store.questions[store.questionNumber].correctAnswer){
    //   alert('CORRRECT');
    // }
  }
  );

}

//user should be able to see the result of their answers and their current score
function scoreCalculator(){

}
 

//user should be able to go to next question by clicking next question button
function handleNextButton() {

}

//user should reach the final page showing their total result of the quiz 
  

//user shoud be able to restart the quiz with the restart button
function handleRestartButton(){

}

function resetScore(){
  store.score  = 0;
  console.log(store.score);
}
resetScore();

function questionTracker() {
  store.questionNumber++;
  //tracking which question user is on within STORE object questino arrray
  //each time button is pressed, tracker ++ until it reaches final question. 
}
  
function loadQuestions() {
  //based on where tracker is by using questionTracker()
  $('main').html(questionTracker());
}

function runQuiz(){
  loadFirstPage();
  handleStartButton();
  handleSubmitButton();
  scoreCalculator();
  handleNextButton();
  handleRestartButton();
  resetScore();
  questionTracker();
  loadQuestions();
}

$(runQuiz);

/**
   *
   * Your app should include a render() function, that regenerates
   * the view each time the store is updated. See your course
   * material, consult your instructor, and reference the slides
   * for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   */