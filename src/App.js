import { useTranslation, Trans } from "react-i18next";
import { Outlet, Link } from "react-router-dom";

const lngs = {
  en: { nativeName: "English" },
  ar: { nativeName: "Arabic" },
  ko: { nativeName: "Korean" },
};

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/contact-us"}>Contact</Link>

      <hr />

      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default App;
