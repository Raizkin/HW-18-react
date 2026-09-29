import { useContacts } from '../context/ContactsContext';

function ContactListItem({ contact }) {
  const { deleteContact } = useContacts();

  return (
    <li>
      {contact.name}: {contact.number}

      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;