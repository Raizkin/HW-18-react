import { useFeedback } from '../context/FeedbackContext';

function FeedbackOptions() {
  const { options, handleFeedback } = useFeedback();

  return (
    <div className="buttons">
      {options.map((option) => (
        <button key={option} onClick={() => handleFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;