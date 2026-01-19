"use client";

import * as React from "react";

// Import translations
import fr from "./translations/fr.json";
import en from "./translations/en.json";
import es from "./translations/es.json";
import de from "./translations/de.json";

// Types
export type LanguageCode = "fr" | "en" | "es" | "de";

export interface Language {
    code: LanguageCode;
    name: string;
    flag: string;
}

export const LANGUAGES: Language[] = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

// Translations map
const translations: Record<LanguageCode, typeof fr> = {
    fr,
    en,
    es,
    de,
};

// Context type
interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    raw: (key: string) => any;
}

// Create context
const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

// Provider component
export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = React.useState<Language>(LANGUAGES[0]);
    const [mounted, setMounted] = React.useState(false);

    // Load saved language from localStorage on mount
    React.useEffect(() => {
        setMounted(true);
        const savedLang = localStorage.getItem("kairos-language");
        if (savedLang) {
            const found = LANGUAGES.find((l) => l.code === savedLang);
            if (found) {
                setLanguageState(found);
            }
        }
    }, []);

    // Save language to localStorage when it changes
    const setLanguage = React.useCallback((lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("kairos-language", lang.code);
        // Update document lang attribute
        document.documentElement.lang = lang.code;
    }, []);

    // Translation function with dot notation support
    const getRawValue = React.useCallback(
        (key: string, langCode: LanguageCode): any => {
            const keys = key.split(".");
            let value: any = translations[langCode];

            for (const k of keys) {
                if (value && typeof value === "object" && k in value) {
                    value = value[k];
                } else {
                    return undefined;
                }
            }
            return value;
        },
        []
    );

    const t = React.useCallback(
        (key: string): string => {
            const value = getRawValue(key, language.code);
            if (typeof value === "string") return value;
            console.warn(`Translation key not found or not a string: ${key}`);
            return key;
        },
        [getRawValue, language.code]
    );

    const raw = React.useCallback(
        (key: string): any => {
            return getRawValue(key, language.code);
        },
        [getRawValue, language.code]
    );

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <LanguageContext.Provider
                value={{
                    language: LANGUAGES[0],
                    setLanguage: () => { },
                    t: (key) => {
                        const value = getRawValue(key, "fr");
                        return typeof value === "string" ? value : key;
                    },
                    raw: (key) => getRawValue(key, "fr"),
                }}
            >
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, raw }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Custom hook to use language context
export function useLanguage() {
    const context = React.useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

// Shorthand hook for translations only
export function useTranslation() {
    const { t, language } = useLanguage();
    return { t, language };
}
