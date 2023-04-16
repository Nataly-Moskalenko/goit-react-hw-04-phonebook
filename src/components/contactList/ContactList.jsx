import ContactItem from '../contactItem/ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  onDeleteContact: PropTypes.func.isRequired,
};
