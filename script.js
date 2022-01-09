const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const image1 = document.getElementById('image1')
const answerButtonsElement = document.getElementById('answer-buttons')
const endbutton = document.getElementById('end-btn')
const trybutton = document.getElementById('try-btn')
const startmsgs = document.getElementById('startmsg')
const game = document.getElementById('agar')
const texts = document.getElementById('textme')
var a = document.getElementById("test")
var clicks = 0; 

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  changeImg()
  clickme()
  checker()
})

game.addEventListener('click', () => { 
  currentQuestionIndex++
  setNextQuestion()
  changeImg()
  clickme()
  game.classList.add('hide')
})

function clickme() { 
  clicks += 1; 
}

endbutton.addEventListener('click', () => {
  window.top.close()
})

trybutton.addEventListener('click', setNextQuestion)

function startGame() {
  startButton.classList.add('hide')
  startmsgs.classList.add('hide')
  shuffledQuestions = questions.slice()
  questionContainerElement.classList.remove('hide')
  currentQuestionIndex = 0
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  texts.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  trybutton.classList.add('hide')
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  setStatusClass(selectedButton, correct);
  if(correct){
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      if (clicks == 5) { 
          game.classList.remove('hide')
      } else {
          nextButton.classList.remove('hide')
      }
    } else {
      endbutton.classList.remove('hide')
    }
  } else{
     trybutton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  }
  else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function checker() {
  if (clicks == 7) {
    texts.classList.remove('hide')
  }
}

function z(a) {
  var a = document.getElementById("test")
  if ((a.value=="neutrophil")||(a.value=="Neutrophil")) {
    document.getElementById('err').innerHTML= 'Correct!';
    nextButton.classList.remove('hide')
  }
   else {
  document.getElementById('err').innerHTML= 'Wrong!';
  }
}

const questions = [
  {
    question: 'Are you excited to learn about the immune system?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'YES!!!', correct: true },
      { text: 'No', correct: false },
      { text: 'YES!!!!!!!', correct: true }
    ]
  },
  {
    question: 'Our immune system protects from the thousands of different viruses we encounter daily! Without it, a simple paper cut could mean death. So to demonstrate how the immune system functions to protect us from bacterias, viruses and foreign bodies, we start our journey with a paper cut!',
    answers: [
      { text: 'I am exicted!', correct: true },
    ]
  },  
  {
    question: 'Paper cuts might seem like a very light injury, but the cut provides an opening for things that do not belong in the body to enter the body. For this activity we are only assuming that a bacteria enters the body and trace the bacteria through its journey in our body and its interactions with our immune system.',
    answers: [
      { text: 'Got it!', correct: true },
    ]
  },
  {
    question: 'What is the type of microbe that enters our body in this activity again? ',
    answers: [
      { text: 'Viruses', correct: false },
      { text: 'Bacteria', correct: true },
      { text: 'Fungi', correct: false },
      { text: 'Protists', correct: false }
    ]
  },
  {
    question: 'How many WANTED viruses can you spot in this blood vessel? (Talk about being as sick as a dog...)',
    answers: [
      { text: '15', correct: false },
      { text: '17', correct: true },
      { text: '21', correct: false },
      { text: '18', correct: false }
    ]
  },
  {
    question: 'Macrophages are the first to arrive to battle the invading bacteria. 1 bacteria can multiply into 1 million in 3 hours! Macrophages are special cells that engulf the invading bacteria and lock them up in their cells much like sprinkles in a block of Jello, where the Jello is the macrophages and the sprinkles are bacteria. A strand of your hair is about 0.0005cm thick, take guess how big macrophages are:',
    answers: [
      { text: '0.0000005cm', correct: false },
      { text: '0.0031cm', correct: false },
      { text: '0.00021cm', correct: true },
      { text: '0.1cm', correct: false }
    ]
  },
  {
    question: 'Oh no! Macrophages cannot handle bacterial invasion alone! A macropages can only engulf about 100 bacteria each there are, but clearly more bacterial invaders than that! Consult the picture above and determine what should we do.',
    answers: [
      { text: 'Release Helper and Killer T cells', correct: false },
      { text: 'Kindly ask the bacteria to leave ', correct: false },
      { text: 'Release messenger proteins to go get additional support', correct: true },
      { text: 'Do nothing because I have confidence in my macrophage buddies', correct: false }
    ]
  },
  {
    question: 'Good Job! while the messenger proteins runs to call for help at the site of the infection, unscramble the letters above to see what else we should release to help fight the bacteria.Also... read the sentences carefully....',
    answers: [
    ]
  },
  {
    question: 'What percentage of white blood cells do neutrophils make up?',
    answers: [
      { text: '20%-30%', correct: false },
      { text: '30%-40%', correct: false },
      { text: '60%-70%', correct: false },
      { text: '40%-60%', correct: true }
    ]
  },
  {
    question: 'Take a guess! Complete the sentence: neutrophils are so good at killing that they also kill _____ cells in the process of killing bacteria.',
    answers: [
      { text: 'viruses', correct: false },
      { text: 'human cells', correct: true },
      { text: 'macrophages', correct: false },
      { text: 'themselves', correct: false }
    ]
  },
  {
    question: 'The dendritic cells are the brains of the immune system. Help the dendritic cell decide if this is a bacterial infection or a viral infection. Different types of infections will trigger different types of reponses!',
    answers: [
      { text: 'Viral infection', correct: false },
      { text: 'Bacterial infection', correct: true },
    ]
  },
  {
    question: 'Lymph nodes are situated throughout your body to keep the distance from the site of battle and the location of reinforcements low. Though most lymph nodes are located near the neck and head area. What is attached to the outside of the dendritic cells?',
    answers: [
      { text: 'pieces of dead bacteria', correct: true },
      { text: 'human cells', correct: false },
      { text: 'peanut butter', correct: false },
      { text: 'neutrophils', correct: false }
    ]
  },
  {
    question: 'Some duplicated virgin T cells move to activate B cells, but some stay as memory T cells which will provide you will immunity to this bacteria the next time it invades.',
    answers: [
      { text: 'Got it!', correct: true },
    ]
  },
  {
    question: 'What is the purpose of memory T cells?',
    answers: [
      { text: 'Remeber what the human ate for lunch', correct: false },
      { text: 'To act as a quick reponse the next time the same bacteria invades', correct: true },
      { text: 'To move to the brain and store information on the bacterial infection', correct: false },
      { text: 'Does nothing', correct: false }
    ]
  },
  {
    question: 'B cells are commonly said to be the "weapons factories" of the immune system, what do you think B cells produce?',
    answers: [
      { text: 'Bombs', correct: false },
      { text: 'MOABS', correct: false },
      { text: 'Antibodies', correct: true },
      { text: 'Anti-Antibodies', correct: false }
    ]
  },
  {
    question: 'Millions of antibodies produced by B cells rush back to the site where the bacteria are invading and since they are specialized in attaching themselves to bacteria. Do T cells produce antibodies? ',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'Sometimes', correct: false },
      { text: 'No', correct: true },
      { text: 'Depends on if they feel like it', correct: false },
    ]
  },
  {
    question: 'The newly made antibodies are specialized in binding to bacteria. As the bind to the bacteria, it stuns and slowly kills the bacteria. The binded antibodies also provide macrophages and neutrophils the ability to grip the slippery bacteria and suck them inside.',
    answers: [
      { text: 'Got it!', correct: true },

    ]
  },
  {
    question: 'The antibodies will be able to fight off the remaining bacteria, Good Job! Do you remember the memory T cells we talked about before? Why are they important?',
    answers: [
    { text: 'Because the memory T cells will fight off another bacterial infection by themselves', correct: false },
    { text: 'There is no need to activate the adaptive immune system if the same bacteria invades again', correct: true },
    { text: 'The memory T cells do nothing... come one everyone knows this!', correct: false },
    { text: 'Memory T cells can fight off any type of bacteria', correct: false },
    ]
  },
  {
    question: 'Congratulations! I hope you have learned and enjoyed learning about the immune system! Select one of the choices below and click "end"',
    answers: [
    { text: 'Ok....', correct: true },
    { text: 'I enjoyed it', correct: true },
    { text: 'I did not enjoy it', correct: true },
    { text: 'I had fun', correct: true },
    ]
  },
]