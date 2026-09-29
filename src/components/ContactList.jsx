import { useContacts } from '../context/ContactsContext';
import ContactListItem from './ContactListItem';

function ContactList() {
  const { contacts } = useContacts();

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;