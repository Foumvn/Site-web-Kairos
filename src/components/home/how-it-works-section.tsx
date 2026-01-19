"use client";

import * as React from "react";
import {
  CheckCircle2,
  FileText,
  Users,
  Target,
  BarChart3,
  Flag,
  Zap,
  HelpCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation, useLanguage } from "@/lib/i18n";

// Map icons to IDs
const ICON_MAP: Record<string, any> = {
  "phase-1": Flag,
  "phase-2": FileText,
  "phase-3": Zap,
  "phase-4": CheckCircle2,
  "phase-5": BarChart3,
};

export function HowItWorksSection() {
  const { t } = useTranslation();
  const { raw } = useLanguage();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  // Get dynamic data
  const PHASES = raw("methodology.phases") || [];
  const GLOSSARY = raw("methodology.glossaryItems") || [];

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2;

      const distance = startTrigger - top;
      const totalDistance = height + (startTrigger - endTrigger) - 300;

      if (distance < 0) {
        setScrollProgress(0);
      } else {
        const progress = Math.min(Math.max(distance / totalDistance, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-50 to-transparent blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            {t("methodology.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 font-[var(--font-brand)] mb-6">
            {t("methodology.title")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              {t("methodology.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            {t("methodology.description")}
          </p>
        </div>

        {/* SECTION 2: PHASES timeline */}
        <div className="mb-24 relative" ref={containerRef}>
          {/* Timeline track (gray background) */}
          <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-gray-100 hidden md:block rounded-full" />

          {/* Progress Line (Animated) */}
          <div
            className="absolute left-[28px] top-0 w-1 bg-gradient-to-b from-primary via-blue-500 to-primary rounded-full hidden md:block transition-all duration-100 ease-out shadow-[0_0_15px_rgba(56,189,248,0.6)]"
            style={{
              height: `${scrollProgress * 100}%`,
              opacity: scrollProgress > 0 ? 1 : 0
            }}
          />

          <div className="space-y-16">
            {PHASES.map((phase: any, idx: number) => {
              const phaseThreshold = idx / (PHASES.length - 1 || 1);
              const isActive = scrollProgress > phaseThreshold - 0.05;
              const Icon = ICON_MAP[phase.id] || Flag;

              return (
                <div key={phase.id} className="relative md:pl-28 group">
                  {/* Timeline node */}
                  <div
                    className={cn(
                      "hidden md:flex absolute left-0 top-0 w-14 h-14 rounded-full border-4 items-center justify-center z-10 shadow-lg transition-all duration-500",
                      isActive
                        ? "bg-white border-primary scale-110 shadow-primary/30"
                        : "bg-white border-gray-200"
                    )}
                  >
                    <Icon className={cn(
                      "w-6 h-6 transition-colors duration-500",
                      isActive ? "text-primary" : "text-gray-400"
                    )} />

                    {/* Pulse effect for active node */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-primary/20 -z-10" />
                    )}
                  </div>

                  {/* Mobile Icon */}
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                  </div>

                  <div className={cn(
                    "bg-white border rounded-3xl p-6 md:p-8 transition-all duration-500",
                    isActive
                      ? "border-primary/30 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] translate-x-2"
                      : "border-gray-200 shadow-sm"
                  )}>
                    <div className="hidden md:block mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-primary text-lg font-medium">{phase.objective}</p>
                    </div>
                    <div className="md:hidden mb-6">
                      <p className="text-primary font-medium">{phase.objective}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                      {/* Left: Steps */}
                      <div className="space-y-6">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                          <Target className="w-4 h-4" /> {phase.content.whatToDo || t("methodology.whatToDo")}
                        </h4>
                        <Accordion type="single" collapsible className="w-full">
                          {phase.content.steps.map((step: any, stepIdx: number) => (
                            <AccordionItem key={stepIdx} value={`item-${stepIdx}`} className="border-b-0 mb-3">
                              <AccordionTrigger className="hover:no-underline py-4 px-5 bg-gray-50 hover:bg-white hover:shadow-md rounded-xl text-sm font-semibold text-gray-800 transition-all border border-transparent hover:border-gray-100 data-[state=open]:bg-primary/5 data-[state=open]:text-primary text-left">
                                {step.title}
                              </AccordionTrigger>
                              <AccordionContent className="pt-2 px-5 pb-4 text-gray-600 bg-white rounded-b-xl text-sm leading-relaxed">
                                <ul className="list-disc list-inside space-y-2 mt-2 marker:text-primary">
                                  {step.details.map((d: string, i: number) => (
                                    <li key={i}>{d}</li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>

                      {/* Right: Deliverables & Decision */}
                      <div className="flex flex-col gap-6">
                        <div className="bg-slate-50/80 backdrop-blur rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> {t("methodology.deliverablesTitle")}
                          </h4>
                          <ul className="space-y-3">
                            {phase.content.deliverables.map((item: string, i: number) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-6 border border-blue-100">
                          <h4 className="font-bold text-sm uppercase tracking-wider text-blue-800/60 mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4" /> {t("methodology.decisionTitle")}
                          </h4>
                          <p className="text-blue-900 font-medium text-sm">
                            {phase.content.decision}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
}


