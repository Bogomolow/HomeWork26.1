import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddContact({ onSave, language, texts }) {
    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [phone, SetPhone] = useState("");

    // окремі помилки для кожного поля
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const navigate = useNavigate();

    const handleSave = () => {
        let valid = true;


        setFirstNameError("");
        setLastNameError("");
        setPhoneError("");


        if (!firstName) {
            setFirstNameError(texts[language].alerts.fillAll);
            valid = false;
        } else {
            const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄє]{2,}$/;
            if (!nameRegex.test(firstName)) {
                setFirstNameError(texts[language].alerts.wrongName);
                valid = false;
            }
        }


        if (!lastName) {
            setLastNameError(texts[language].alerts.fillAll);
            valid = false;
        } else {
            const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄє]{2,}$/;
            if (!nameRegex.test(lastName)) {
                setLastNameError(texts[language].alerts.wrongName);
                valid = false;
            }
        }


        if (!phone) {
            setPhoneError(texts[language].alerts.fillAll);
            valid = false;
        } else {
            const phoneRegex = /^[0-9]{3}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/;
            if (!phoneRegex.test(phone)) {
                setPhoneError(texts[language].alerts.wrongPhone);
                valid = false;
            }
        }


        if (!valid) return;


        const newContact = { firstName, lastName, phone };
        onSave(newContact);

        SetFirstName("");
        SetLastName("");
        SetPhone("");

        navigate("/contacts");
    };

    return (
        <div>
            <h1>{texts[language].addContact}</h1>

            
            <div>
                <label>{texts[language].firstName}:</label>
                <input
                    value={firstName}
                    onChange={(e) => {
                        SetFirstName(e.target.value);
                        setFirstNameError("");
                    }}
                />
                {firstNameError && <p style={{ color: "red", fontSize: "14px" }}>{firstNameError}</p>}
            </div>

            
            <div>
                <label>{texts[language].lastName}:</label>
                <input
                    value={lastName}
                    onChange={(e) => {
                        SetLastName(e.target.value);
                        setLastNameError("");
                    }}
                />
                {lastNameError && <p style={{ color: "red", fontSize: "14px" }}>{lastNameError}</p>}
            </div>

            
            <div>
                <label>{texts[language].phone}:</label>
                <input
                    value={phone}
                    onChange={(e) => {
                        SetPhone(e.target.value);
                        setPhoneError("");
                    }}
                />
                {phoneError && <p style={{ color: "red", fontSize: "14px" }}>{phoneError}</p>}
            </div>

            <button className="save-btn" onClick={handleSave}>
                {texts[language].save}
            </button>

            <button className="cansel-btn" onClick={() => navigate("/contacts")}>
                {texts[language].cancel}
            </button>
        </div>
    );
}
