import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, defaultLanguage, languages } from "./translations";

const LanguageContext = createContext({
  lang: defaultLanguage,
  setLang: () => {},
  t: (key) => key,
});

// Resolve a dot-path like "about.bio1" against an object, falling back to
// English and finally to the key itself so the UI never renders "undefined".
const resolve = (obj, path) =>
  path.split(".").reduce((acc, part) => (acc == null ? undefined : acc[part]), obj);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(defaultLanguage);

  // Pick the stored language, or guess from the browser, on first mount.
  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    const supported = languages.map((l) => l.code);
    if (stored && supported.includes(stored)) {
      setLang(stored);
      return;
    }
    const browser = (window.navigator.language || "").slice(0, 2).toLowerCase();
    if (supported.includes(browser)) setLang(browser);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => {
    const value = resolve(translations[lang], key);
    if (value !== undefined) return value;
    const fallback = resolve(translations[defaultLanguage], key);
    return fallback !== undefined ? fallback : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
