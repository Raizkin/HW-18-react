import { useEffect } from 'react';

import { FeedbackProvider, useFeedback } from './context/FeedbackContext';
import { ContactsProvider } from './context/ContactsContext';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import Section from './components/Section';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import './App.css';

function FeedbackApp() {
  const { total } = useFeedback();

  return (
    <div className="app">
      <h1>Please leave feedback</h1>

      <Section title="">
        <FeedbackOptions />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

function PhonebookApp() {
  return (
    <div className="app phonebook">
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = 'HW-18 React';
  }, []);

  return (
    <>
      <FeedbackProvider>
        <FeedbackApp />
      </FeedbackProvider>

      <ContactsProvider>
        <PhonebookApp />
      </ContactsProvider>
    </>
  );
}

export default App;