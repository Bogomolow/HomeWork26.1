import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import { useState } from 'react';
import ContactList from './ContactList/ContactList.jsx'
import AddContact from './AddContact/AddContact.jsx'
import ChangeTopic from './ChangeTopic.jsx'
import ChangeLanguage from './ChangeLanguage/ChangeLanguage.jsx'
import { texts } from './ChangeLanguage/translation.js';
import './App.css'

function App() {

  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  }

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  }

  const [theme, SetTheme] = useState("light");
  const [language, setLanguage] = useState("ua");












  return (
    <BrowserRouter>
      <div className={`app-container ${theme}`}>
        <div className='nav-buttons'>


          <Navigation language= {language} texts = {texts} />


          <Routes>
            <Route
              path="/"
              element={<ContactList contacts={contacts} onDelete={deleteContact} language={language} texts={texts}/>}
            />

            <Route
              path="/contacts"
              element={<ContactList contacts={contacts} onDelete={deleteContact} language = {language} texts = {texts} />}
            />

            <Route
              path="/add"
              element={<AddContact onSave={addContact}  language = {language} texts = {texts}  />}
            />

            <Route
              path="*"
              element={<ContactList contacts={contacts} onDelete={deleteContact} language={language} texts={texts} />}
            />
          </Routes>


          <ChangeTopic theme={theme} SetTheme={SetTheme} />
          <ChangeLanguage language = {language} setLanguage = {setLanguage}/>



        </div>



      </div>
    </BrowserRouter>
  )
}

export default App
