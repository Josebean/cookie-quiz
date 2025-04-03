import { useState } from "react";

const questions = [
    // Q1
    {id: 1, question: "How do you handle stressful situations?", 
        answers: [
            {id: 1, text: "Stay calm and find a logical solution.", weight: 4},
            {id: 2, text: "Get overwhelmed but push through.", weight: 3},
            {id: 3, text: "Seek support from friends or family.", weight: 2},
            {id: 4, text: "Procrastinate and hope for the best.", weight: 1}
        ]
    },
    // Q2
    {id: 2, question: "What is your ideal weekend plan?", 
        answers: [
            {id: 1, text: "Exploring a new city or going on an adventure.", weight: 4},
            {id: 2, text: "Staying in with a good book or TV show.", weight: 3},
            {id: 3, text: "Hanging out with friends at a café or bar.", weight: 2},
            {id: 4, text: "Working on a personal project or hobby.", weight: 1}
        ]
    },
    // Q3
    {id: 3, question: "How do you usually make decisions?", 
        answers: [
            {id: 1, text: "Based on logic and facts.", weight: 4},
            {id: 2, text: "By trusting my gut feeling.", weight: 3},
            {id: 3, text: "I ask for advice from others.", weight: 2},
            {id: 4, text: "I overthink until the last minute.", weight: 1}
        ]
    },
    
    // Q4
    {id: 4, question: "If you could have any superpower, which one would you choose?", 
        answers: [
            {id: 1, text: "Super intelligence.", weight: 4},
            {id: 2, text: "Invisibility.", weight: 3},
            {id: 3, text: "Time travel.", weight: 2},
            {id: 4, text: "Mind reading.", weight: 1}
        ]
    },

    // Q5
    {id: 5, question: "What motivates you the most?", 
        answers: [
            {id: 1, text: "Achieving personal success.", weight: 4},
            {id: 2, text: "Helping others and making a difference.", weight: 3},
            {id: 3, text: "Seeking new experiences and excitement.", weight: 2},
            {id: 4, text: "Finding peace and balance in life.", weight: 1}
        ]
    },

    // Q6
    {id: 4, question: "How do you approach meeting new people?", 
        answers: [
            {id: 1, text: "I love it! I enjoy making new connections.", weight: 4},
            {id: 2, text: "I am friendly but prefer small groups.", weight: 3},
            {id: 3, text: "I get nervous but try to be social.", weight: 2},
            {id: 4, text: "I avoid it when possible.", weight: 1}
        ]
    },

    // Q7
    {id: 4, question: "What is your dream job like?", 
        answers: [
            {id: 1, text: "High-paying and prestigious.", weight: 4},
            {id: 2, text: "Creative and fulfilling.", weight: 3},
            {id: 3, text: "Something that allows me to help others.", weight: 2},
            {id: 4, text: "One that gives me freedom and flexibility.", weight: 1}
        ]
    },

    // Q8
    {id: 4, question: "Which animal do you relate to the most?", 
        answers: [
            {id: 1, text: "Lion: Confident and ambitious.", weight: 4},
            {id: 2, text: "Owl: Wise and introspective.", weight: 3},
            {id: 3, text: "Dolphin: Social and fun-loving.", weight: 2},
            {id: 4, text: "Cat: Independent and mysterious.", weight: 1}
        ]
    },

    // Q9
    {id: 4, question: "What is your biggest fear?", 
        answers: [
            {id: 1, text: "Failure.", weight: 4},
            {id: 2, text: "Loneliness.", weight: 3},
            {id: 3, text: "The unknown.", weight: 2},
            {id: 4, text: "Losing control.", weight: 1}
        ]
    },

    // Q10
    {id: 4, question: "How would your friends describe you?", 
        answers: [
            {id: 1, text: "Determined and hardworking.", weight: 4},
            {id: 2, text: "Thoughtful and kind.", weight: 3},
            {id: 3, text: "Fun and spontaneous.", weight: 2},
            {id: 4, text: "Independent and reserved.", weight: 1}
        ]
    }
];

function QuizScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    let weightScore = 0;

    function handleAnswer(answer) {
        console.log("Weight: " + answer.weight);
        selectedAnswer.push(answer.text);

        
        

            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setScore(score + answer.weight);
                console.log("Score: " + score);
                console.log("Current Question: " + currentQuestion);

                
            } else {
                setQuizFinished(true);
                setScore(score + answer.weight);
                console.log(selectedAnswer);
                console.log("Score: " + score);
                console.log("Current Question: " + currentQuestion);

            }
        }

    function restartQuiz() {
        setCurrentQuestion(0);
        setSelectedAnswer([]);
        setScore(0);
        setQuizFinished(false);
    }
    

    return (
        <div className="quiz-container">
          {quizFinished ? (
            <div>
              <h2>Quiz Finished!</h2>
              <p>Your score: </p>
              <button className="main-button" onClick={restartQuiz}>Restart Quiz</button>
            </div>
          ) : (
            <div>
              <h2>{questions[currentQuestion].question}</h2>
              <div className="answers-container">
                {questions[currentQuestion].answers.map((answer) => (
                  <button className="main-button"
                    key={answer.id}
                    onClick={() => handleAnswer(answer)}
                    
                    
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      );
};

export default QuizScreen;