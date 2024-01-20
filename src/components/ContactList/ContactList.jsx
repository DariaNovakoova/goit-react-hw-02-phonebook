import styles from './contact-list.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  const contact = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name + ' : ' + number}
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ul className={styles.list}>{contact}</ul>;
};

export default ContactList;
