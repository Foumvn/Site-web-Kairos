"use client";

import { useTranslation } from "@/lib/i18n";
import { FeatureGrid } from "./feature-grid";

export function FeaturesSection() {
    const { t } = useTranslation();

    return (
        <section className="py-24 relative bg-[#020617] border-t border-slate-800">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-600/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[var(--font-brand)] text-white">
                        {t("features.sectionTitle").split(" ").slice(0, -2).join(" ")}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
                            {t("features.sectionTitle").split(" ").slice(-2).join(" ")}
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        {t("features.sectionDescription")}
                    </p>
                </div>

                <FeatureGrid />
            </div>
        </section>
    );
}
