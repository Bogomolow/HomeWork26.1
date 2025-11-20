import { useNavigate } from "react-router-dom";

export default function Navigation({ language, texts }) {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/contacts')}>
                {texts[language].contacts}
            </button>

            <button onClick={() => navigate('/add')}>
                {texts[language].add}
            </button>
        </div>
    );
}
