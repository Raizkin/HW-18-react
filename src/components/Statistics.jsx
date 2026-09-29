import { useEffect, useRef } from 'react';
import { useFeedback } from '../context/FeedbackContext';

function Statistics() {
  const { feedback, total, positivePercentage } = useFeedback();

  const statisticsRef = useRef(null);

  useEffect(() => {
    statisticsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, []);

  return (
    <div ref={statisticsRef}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Statistics;