import { useState, useEffect } from "react";

const questions = [
    // Q1
    {id: 1, question: "You are a delectable cookie in Kookyville and today’s your day off! What are you doing?", 
        answers: [
            {id: 1, text: "Relax by yourself, maybe go to a spa?", weight: 4},
            {id: 2, text: "Call up some pals :)", weight: 3},
            {id: 3, text: "Great! Let’s get some chores done!", weight: 2},
            {id: 4, text: "I have always wanted to take that one class…", weight: 1}
        ]
    },
    // Q2
    {id: 2, question: "You forgot about a last minute errand! On your way to check out, you decide to treat yourself to a snack. Which one do you choose?", 
        answers: [
            {id: 1, text: "Too much candy to choose from T_T", weight: 4},
            {id: 2, text: "Nothing beats ice cream!", weight: 3},
            {id: 3, text: "Something chocolate-ly… maybe a cookie…", weight: 2},
            {id: 4, text: "Obviously a savory chip.", weight: 1}
        ]
    },
    // Q3
    {id: 3, question: "While marveling at the snacks, you wander into a portal. All of a sudden, you’re in a cookie jar?!", 
        answers: [
            {id: 1, text: "Uh-oh, how do I get out of here? I need a plan!", weight: 4},
            {id: 2, text: "Okay, just need to stay calm. Stay. Calm.", weight: 3},
            {id: 3, text: "Where am I? A cookie jar? Whoa? What’s happening?", weight: 2},
            {id: 4, text: "This is amazing! I’m going to have an adventure in this jar!", weight: 1}
        ]
    },
    
    // Q4
    {id: 4, question: "As you gather your thoughts, you look around and see that there are other cookies around you! What do you do?", 
        answers: [
            {id: 1, text: "Talk to them and gather some intel on the situation.", weight: 4},
            {id: 2, text: "Let’s socialize — new friends!", weight: 3},
            {id: 3, text: "I don’t want to talk to them… but how else am I going to get out?", weight: 2},
            {id: 4, text: "Great, there are people here?", weight: 1}
        ]
    },

    // Q5
    {id: 5, question: "Everyone is welcoming and kind. You find out they also just got here. You start to feel at ease as you talk — who are you the most comfortable with?", 
        answers: [
            {id: 1, text: "Charlie Chip, the chocolate chip cookie who is very polite and friendly.", weight: 4},
            {id: 2, text: "Lucy Zest, the bright, zesty lemon cookie who is lively and veeeery energetic.", weight: 3},
            {id: 3, text: "Olivia Oates, the crunchy oatmeal cookie that speaks of the simple things in life.", weight: 2},
            {id: 4, text: "Gia Spice, savory gojuchang cookie who immediately starts discussing the various escape plans they thought up just now.", weight: 1}
        ]
    },

    // Q6
    {id: 4, question: "The cookies gasp as they look intently around them, through the glass cookie jar. “I think we’re at IKEA!” They suggest exploring, what do you do?", 
        answers: [
            {id: 1, text: "Let’s relax and stay in the jar, it’s warm and cozy here.", weight: 4},
            {id: 2, text: "I’m ready to explore! There’s no telling what surprises IKEA might have.", weight: 3},
            {id: 3, text: "I’ll stay in the jar for now, but I’ll keep an eye on the exits.", weight: 2},
            {id: 4, text: "Adventure awaits! I’m heading out with a group of cookies right now!", weight: 1}
        ]
    },

    // Q7
    {id: 4, question: "While wandering through the IKEA aisles, you start getting into window shopping. What catches your eye?", 
        answers: [
            {id: 1, text: "A cute drink dispenser.", weight: 4},
            {id: 2, text: "Any light fixture.", weight: 3},
            {id: 3, text: "Bakeware ofc!", weight: 2},
            {id: 4, text: "A new rug would be a good touch.", weight: 1}
        ]
    },

    // Q8
    {id: 4, question: "Suddenly, you hear tiny footsteps—there’s a determined hungry toddler heading straight toward you! What do you do?", 
        answers: [
            {id: 1, text: "Panic! I’m too scrumptious, I’ll definitely be spotted!", weight: 4},
            {id: 2, text: "Stay perfectly still and hope the baby doesn’t see us.", weight: 3},
            {id: 3, text: "Time to make a run for it! We’ve got to escape before I'm eaten!", weight: 2},
            {id: 4, text: "I’ll try to distract the baby with some fun tricks, maybe they’ll leave us alone.", weight: 1}
        ]
    },

    // Q9
    {id: 4, question: "You’re in full escape mode, but the toddler is still hot on your tail! How do you try to outsmart it?", 
        answers: [
            {id: 1, text: "I’ll weave through the aisles to lose it in the maze of furniture.", weight: 4},
            {id: 2, text: "Time to take the high road—climb up to the top of a display and out of reach.", weight: 3},
            {id: 3, text: "I’m going to confuse the baby with a trail of cookies leading the other way.", weight: 2},
            {id: 4, text: "Let’s make a bold move—head straight for the exit!", weight: 1}
        ]
    },

    // Q10
    {id: 4, question: "You’ve survived the baby chase and found a peaceful corner to relax in. When you open your eyes, you're back home!", 
        answers: [
            {id: 1, text: "Kick back and enjoy some quiet time, maybe even take a nap.", weight: 4},
            {id: 2, text: "Gather up the cookies and plan the next wild adventure.", weight: 3},
            {id: 3, text: "Take some time to reflect on the adventure and savor the moment.", weight: 2},
            {id: 4, text: "Celebrate with a victory dance—it’s been one crazy day!", weight: 1}
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
        selectedAnswer.push(answer.text);

        setScore(prevScore => {
            const newScore = prevScore + answer.weight;
            console.log("Updated Score inside setScore: " + newScore);
            return newScore;
        });

            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(prev => prev + 1);
        
            } else {
                setQuizFinished(true);

                console.log(selectedAnswer);
            }
        }

    function restartQuiz() {
        setCurrentQuestion(0);
        setSelectedAnswer([]);
        setScore(0);
        setQuizFinished(false);
    }
    
    useEffect(() => {
        console.log("Updated Score (outside handleAnswer):", score);
    }, [score]);

    return (
        <div className="quiz-container">
          {quizFinished ? (
            <div>
              <h2>Quiz Finished!</h2>
              <p>Your score: {score}</p>
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