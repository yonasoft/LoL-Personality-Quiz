import { useState } from 'react';
import './App.css';
import EnterQuiz from './pages/EnterQuiz.jsx';
import QuestionPage from './pages/QuestionPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import { questions } from './data/questions.js';
import { sampleResult } from './data/results.js';

function App() {
  const [currentPage, setCurrentPage] = useState('enter');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const startQuiz = () => {
    setCurrentPage('question');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswerSelect = (answer, answerIndex) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentPage('results');
    }
  };

  const restartQuiz = () => {
    setCurrentPage('enter');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  if (currentPage === 'enter') {
    return <EnterQuiz onStartQuiz={startQuiz} />;
  }

  if (currentPage === 'question') {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <QuestionPage
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        scenario={currentQuestion.scenario}
        question={currentQuestion.question}
        answers={currentQuestion.answers}
        onAnswerSelect={handleAnswerSelect}
      />
    );
  }

  if (currentPage === 'results') {
    return (
      <ResultsPage
        result={sampleResult}
        onRestart={restartQuiz}
      />
    );
  }

  return null;
}

export default App
