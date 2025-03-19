import { useState } from "react";

const questions = [
    {id: 1, question: "How do you handle stressful situations?", 
        answers: ["Stay calm and find a logical solution.", "Get overwhelmed but push through.", "Seek support from friends or family.", "Procrastinate and hope for the best."
        ]
    },
    // Q2
    {id: 2, question: "What is your ideal weekend plan?", 
        answers: ["Exploring a new city or going on an adventure.", "Staying in with a good book or TV show.", "Hanging out with friends at a café or bar.", "Working on a personal project or hobby."]
    }
];

function QuizScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    function handleAnswer(answer) {

            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                selectedAnswer.push(answer);
                console.log(selectedAnswer);
            } else {
                setQuizFinished(true);
                selectedAnswer.push(answer);
                console.log(selectedAnswer);
            }
        }

    function restartQuiz() {
        setCurrentQuestion(0);
        setSelectedAnswer([]);
        setScore(0);
        setQuizFinished(false);
    }
    

    return (
        <div>
          {quizFinished ? (
            <div>
              <h2>Quiz Finished!</h2>
              <p>Your score: </p>
              <button onClick={restartQuiz}>Restart Quiz</button>
            </div>
          ) : (
            <div>
              <h2>{questions[currentQuestion].question}</h2>
              <div>
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer)}
                    
                    
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      );
};

export default QuizScreen;