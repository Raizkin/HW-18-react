import { useContacts } from '../context/ContactsContext';

function Filter() {
  const { filter, changeFilter } = useContacts();

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
}

export default Filter;