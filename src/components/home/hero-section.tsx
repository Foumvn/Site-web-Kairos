"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeroGlobe } from "./hero-globe";

export function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                <div className="flex flex-col gap-8 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-medium text-slate-300">{t("hero.badge")}</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight font-[var(--font-brand)] text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-400 to-cyan-400">
                            {t("hero.titleHighlight")}
                        </span>{" "}
                        {t("hero.title")}
                    </h1>

                    <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                        {t("hero.description")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a
                            className="px-8 py-4 rounded-full bg-white text-[#020617] font-bold text-center hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                            href="#"
                        >
                            {t("hero.exploreSolutions")} <ArrowRight className="h-5 w-5" />
                        </a>
                        <a
                            className="px-8 py-4 rounded-full border border-slate-700 bg-slate-800/30 backdrop-blur-sm text-white font-medium text-center hover:bg-slate-800 transition-colors"
                            href="#"
                        >
                            {t("hero.watchShowreel")}
                        </a>
                    </div>

                    <div className="flex items-center gap-6 mt-8 pt-8 border-t border-slate-800/50">
                        <div className="flex -space-x-3">
                            <Avatar className="h-10 w-10 border-2 border-[#0f172a]">
                                <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-5fezGAOzkH-kYOgHHC0Qs0K5lnoDGCjgvEliJxAWjLi8a7HwuyIampSwo2mH-Aj-iV2v0WT-AKbRsF-edrDDfdRwY7tVcYb2HiSUXsO-gme2JpYyxomATHGnzOtkllZ-4axJSsGPBAPmGX2oW8Ru9AGqJjVHS3EVnLj5ufDP7nZXli4Z_2KcSmJo2VZrfQFJeM_ms5DbceT9hoypONczdn5Em_fFEIhDeR-T21-XRKq-AEIzX-YA92jZeI85rNHPFG9qDVjIsJA" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-10 w-10 border-2 border-[#0f172a]">
                                <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2wDh9f9ZTGJcQktpbc63mcxypkHUxxWyPz6l2lfqD2dG_GzvtXk2y7_97PtSdbqTMnFw93VB8NUmFSKCbtQL5hwsBaXiJx02IKX_pvUPPMUOeGWEO_RK-T5dVVKZh2Y8ebW07fMPNmtmNc4eE3U13Akt4DeoCi5x5IwbihaI0l7Ikso9A4MWiR4j01wEYVhP9vNkK6ZrB-hE3MoBZTYjEpq-L6tUMcvpNOPAwDxNWI53zUrAPlh4_yC4oEL2g-wavAORglS0L8iI" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-10 w-10 border-2 border-[#0f172a]">
                                <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg2g6B17ZwiqtWhufh4Ul4fxaMoF0jcQg5alliUU9u_AU8TKEgER3macoAdP2Z-Ii9KVrMMowZvnfG_H7g1Eg23rwyLu-yYhM26ulUiCLfOEAjEhjL0zOTG4LTLVbbOLVGSv_88sTlCtmouYQe7hdGzBx9AtP1DUfCcb0-_SSDD8G4mZp8Lu7YPO1bqY0zBCurTcDTXWXPXtV3lv1WvgX0fiRTvLI97HxtTCUklEr5TM-h4f2dW5X9jgO2mUjmBM3mSNsQp5AZBjY" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <div className="h-10 w-10 rounded-full border-2 border-[#0f172a] bg-slate-700 flex items-center justify-center text-xs font-bold">
                                +2k
                            </div>
                        </div>
                        <div className="text-sm text-slate-400">
                            {t("hero.trustedBy")}
                        </div>
                    </div>
                </div>

                <HeroGlobe />
            </div>
        </section>
    );
}
