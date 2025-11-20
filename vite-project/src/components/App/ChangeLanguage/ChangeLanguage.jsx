export default function ChangeLanguage({ language, setLanguage }) {
  return (
    <button
      className="btn-gray"
      onClick={() => setLanguage(language === "ua" ? "en" : "ua")}
    >
      {language === "ua" ? "EN" : "UA"}
    </button>
  );
}
