import { useState } from 'react'
import ContactList from './ContactList/ContactList.jsx'
import AddContact from './AddContact/AddContact.jsx'

import './App.css'

function App() {

  const [currenPage, SetCurrentPage] = useState("ContactList");

  const [contacts, SetContacts] = useState([]);

  const addContact = (newContact) => {
    SetContacts([...contacts, newContact])
    SetCurrentPage("ContactList")
  }

  const handleDeleteContact = (index) => {
    SetContacts(contacts.filter((_, i) => i !== index))

  }


  const swapePages = () => {
    switch (currenPage) {
      case 'ContactList':
        return <ContactList contacts={contacts} onDelete={handleDeleteContact} onNavigate={SetCurrentPage} />

      case 'AddContact':
        return <AddContact onSave={addContact} onNavigate={SetCurrentPage} />
      default:
        return <ContactList contacts={contacts} onDelete={handleDeleteContact} onNavigate={SetCurrentPage} />

    }



  }

  return (
    <div className='app-container'>
      <div className='nav-buttons'>

      <button onClick={() => SetCurrentPage('ContactList')}>Контакти</button>
      <button onClick={() => SetCurrentPage('AddContact')}>Додати</button>
      </div>
      {swapePages()}


    </div>
  )
}

export default App
