"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[var(--font-brand)]">
          {t("cta.title")}
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("cta.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-cyan-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            {t("cta.startFree")} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
          >
            {t("cta.scheduleDemo")}
          </Button>
        </div>
      </div>
    </section>
  );
}
