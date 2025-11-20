export default function ContactList({ contacts, onDelete, language, texts }) {
    return (
        <div>
            <h1>{texts[language].contactList}</h1>

            <table>
                <thead>
                    <tr>
                        <th>{texts[language].firstName}</th>
                        <th>{texts[language].lastName}</th>
                        <th>{texts[language].phone}</th>
                        <th>{texts[language].actions}</th>
                    </tr>
                </thead>

                <tbody>
                    {contacts.length > 0 ? (
                        contacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.phone}</td>
                                <td>
                                    <button className="action-btn" onClick={() => onDelete(index)}>
                                        {texts[language].delete}
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">{texts[language].empty}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
