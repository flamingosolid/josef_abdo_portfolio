import { useEffect, useState } from "react";
import "./QuizStyles.scss";
const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [playAgain, setPlayAgain] = useState(true);
  const [amountQuestion, setAmountQuestion] = useState(1);

  useEffect(() => {
    const fetchQuizData = async () => {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&type=boolean"
      );
      const result = await response.json();
      setQuizData(result);
    };

    fetchQuizData();
  }, [playAgain]);

  const updateCorrectAnswer = () => {
    setCorrectAnswer((prevCorrectAnswer) => prevCorrectAnswer + 1);
  };

  const updateWrongAnswer = () => {
    setWrongAnswer((prevWrongAnswer) => prevWrongAnswer + 1);
  };

  const checkAnswer = (choice) => {
    setAmountQuestion(amountQuestion + 1);
    if (currentQuestionIndex >= quizData.results.length) {
      return;
    }

    const currentAnswer = quizData.results[currentQuestionIndex].correct_answer;
    if (choice === currentAnswer) {
      updateCorrectAnswer();
    } else {
      updateWrongAnswer();
    }

    nextQuestion();
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  function startGame() {
    setQuizData(null);
    if (!quizData) {
      return (
        <div className="container">
          <h1>Loadign...</h1>
        </div>
      );
    }
    setPlayAgain(!playAgain);
    setCurrentQuestionIndex(0);
    setCorrectAnswer(0);
    setWrongAnswer(0);
    setAmountQuestion(1);
  }

  if (!quizData) {
    return (
      <div className="container">
        <h1>Loadign...</h1>
      </div>
    );
  }

  if (currentQuestionIndex >= quizData.results.length) {
    return (
      <div className="container">
        <h1>Quiz Completed!</h1>
        <button className="button-74" onClick={() => startGame()}>
          Play Again!
        </button>
        <div className="points">
          <h2>Correct: {correctAnswer}</h2>
          <h2>Wrong: {wrongAnswer}</h2>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData.results[currentQuestionIndex]?.question
    .replace(/&#039;/g, "'")
    .replace(/&eacute/g, "è")
    .replace(/&quot;/g, '"');

  return (
    <div className="container">
      <h1 id="question">{currentQuestion}</h1>
      <div className="buttons">
        <button
          id="true"
          className="button-74"
          onClick={() => checkAnswer("True")}
        >
          True
        </button>
        <button
          id="false"
          className="button-74"
          onClick={() => checkAnswer("False")}
        >
          False
        </button>
      </div>
      <div className="points">
        <h2>Correct: {correctAnswer}</h2>
        <h2>Wrong: {wrongAnswer}</h2>
      </div>
      <div className="amount-Question">
        <h2>Question: {amountQuestion}</h2>
      </div>
    </div>
  );
};

export default Quiz;
