
import { useState } from "react";

export default function AddContact({ onSave, onNavigate }) {

    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [phone, SetPhone] = useState("")

    const handleSave = () => {

        if (!firstName || !lastName || !phone) {
            alert('Введіть всі поля')
            return;

        }

        const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄє]{2,}$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        alert("Ім’я та прізвище повинні містити лише букви і бути довше 1 символу.");
        return;
    }

   
    
const phoneRegex = /^[0-9]{3}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/;

if (!phoneRegex.test(phone)) {
    alert("Телефон повинен бути у форматі: 097 831 92 26");
    return;
}

        const newContact = { firstName, lastName, phone }
        onSave(newContact);


        SetFirstName("");
        SetLastName("");
        SetPhone("");
    }
    return (
        <div>
            <h1>Додати контакт</h1>

            <div>
                <label>Ім’я:</label>
                <input value={firstName} onChange={(e) => SetFirstName(e.target.value)} />
            </div>

            <div>
                <label>Прізвище:</label>
                <input value={lastName} onChange={(e) => SetLastName(e.target.value)} />
            </div>

            <div>
                <label>Телефон:</label>
                <input value={phone} onChange={(e) => SetPhone(e.target.value)} />
            </div>

            <button className="save-btn" onClick={handleSave}>Зберегти</button>
            <button className="cansel-btn" onClick={() => onNavigate("ContactList")}>Відміна</button>
        </div>
    );
}
