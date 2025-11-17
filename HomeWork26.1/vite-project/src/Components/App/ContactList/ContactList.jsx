export default function ContactList({ contacts, onDelete, onNavigate }) {
    return (
        <div>
            <h1>Список Контактів</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Ім’я</th>
                        <th>Прізвище</th>
                        <th>Телефон</th>
                        <th>Дії</th>
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
                                    <button className="action-btn" onClick={() => onDelete(index)}>Видалити</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">Контактів ще немає</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
