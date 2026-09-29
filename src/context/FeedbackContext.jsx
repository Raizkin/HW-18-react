import { createContext, useContext, useState } from 'react';

const FeedbackContext = createContext(null);

const options = ['good', 'neutral', 'bad'];

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage =
    total === 0 ? 0 : Math.round((feedback.good / total) * 100);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        options,
        handleFeedback,
        total,
        positivePercentage,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);

  if (!context) {
    throw new Error('useFeedback must be used inside FeedbackProvider');
  }

  return context;
}