"use client";

import { Code, Link2, LockKeyhole, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";

const featureKeys = [
  {
    titleKey: "features.items.customDev.title",
    descriptionKey: "features.items.customDev.description",
    icon: Code,
    gradient: "from-sky-500 to-blue-600",
    shadow: "shadow-blue-500/20",
  },
  {
    titleKey: "features.items.security.title",
    descriptionKey: "features.items.security.description",
    icon: LockKeyhole,
    gradient: "from-indigo-500 to-indigo-400",
    shadow: "shadow-indigo-500/20",
  },
  {
    titleKey: "features.items.integration.title",
    descriptionKey: "features.items.integration.description",
    icon: Link2,
    gradient: "from-teal-400 to-emerald-600",
    shadow: "shadow-teal-500/20",
  },
  {
    titleKey: "features.items.automation.title",
    descriptionKey: "features.items.automation.description",
    icon: Zap,
    gradient: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20",
  },
] as const;

export function FeatureGrid() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {featureKeys.map((f) => {
        const Icon = f.icon;
        return (
          <Card
            key={f.titleKey}
            className={cn(
              "group rounded-2xl bg-slate-900/40 border-slate-800 text-slate-200",
              "hover:border-sky-500/30 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1",
              "shadow-2xl shadow-transparent hover:shadow-sky-500/5",
            )}
          >
            <CardHeader className="p-8 pb-0">
              <div
                className={cn(
                  "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6",
                  f.gradient,
                  "shadow-lg",
                  f.shadow,
                  "group-hover:scale-110 transition-transform duration-300",
                )}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-white font-[var(--font-brand)] group-hover:text-sky-300 transition-colors">
                {t(f.titleKey)}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-3">
              <p className="text-slate-400 leading-relaxed text-sm">{t(f.descriptionKey)}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
