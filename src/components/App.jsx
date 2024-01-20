import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// import styles from '.'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermiona Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const ourContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (ourContacts) {
      return alert(`${contact.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { addContact, deleteContact, changeFilter } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '33',
          margin: '0 auto',
          height: 'auto',
          width: '850px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 0 ? (
          <Filter value={filter} changeFilter={changeFilter} />
        ) : (
          <div
            style={{
              flexWrap: 'wrap',
              gap: '10',
              justifyContent: 'space-around',
            }}
          >
            Your phonebook is empty. Add first contact!
          </div>
        )}

        {this.state.contacts.length > 0 && (
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        )}
      </div>
    );
  }
}

export default App;
