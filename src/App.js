import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './app.module.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter'
import ContactList from './components/ContactList'

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }
  setContacts = (name, phone) => {
    const {contacts} = this.state
    const id = uuidv4()
    const newContacts = {
      name: name,
      phone: phone,
      id: id
    }
    const checkForDouble = contacts.filter(e => e.name === name);
    checkForDouble.length > 0 ? alert(`${name} already exist!`) :
    this.setState(prevState => {
      return{
        contacts: [...prevState.contacts, newContacts]
      }
    })
  }
  deleteContact = (id) => {
    const {contacts} = this.state;
    const afterDelete = contacts.filter(element => element.id !== id);
    this.setState({
      contacts: afterDelete
    })
  }
  setFilter = (filterWord) => {
    this.setState({
      filter: filterWord
    })
  }
  filterContacts = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
  }
  render() {
    const filteredContacts = this.filterContacts()
    return (
      <div className={style.wrapper}>
        <h1>Phonebook</h1>
          <ContactForm onSubmit={this.setContacts}/>
        <h2>Contacts</h2>
          <Filter filter={this.setFilter}/>
          <ContactList contactList={filteredContacts} deleting={this.deleteContact}/>
      </div>
    )
  }
}

export default App;
