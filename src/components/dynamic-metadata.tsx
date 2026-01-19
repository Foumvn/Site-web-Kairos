"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

/**
 * DynamicMetadata component
 * Updates the document title and meta description when the language changes.
 * This is necessary because Next.js metadata is static (server-side),
 * but our language switching is client-side.
 */
export function DynamicMetadata() {
    const { t, language } = useLanguage();

    useEffect(() => {
        // Update document title
        document.title = t("meta.title");

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", t("meta.description"));
        } else {
            // Create meta description if it doesn't exist
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = t("meta.description");
            document.head.appendChild(meta);
        }

        // Update Open Graph tags if they exist
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute("content", t("meta.title"));
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute("content", t("meta.description"));
        }

        // Update html lang attribute
        document.documentElement.lang = language.code;

    }, [t, language.code]);

    // This component doesn't render anything visible
    return null;
}
