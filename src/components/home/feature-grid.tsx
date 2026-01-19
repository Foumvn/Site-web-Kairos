import { Code, Link2, LockKeyhole, Zap, Settings } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Custom System Development",
    description:
      "We design and build tailored digital information systems that perfectly match your organization's unique processes and requirements. From concept to deployment, we deliver solutions that drive efficiency.",
    icon: Code,
    gradient: "from-sky-500 to-blue-600",
    shadow: "shadow-blue-500/20",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Protect your critical business data with robust security architectures. We implement comprehensive encryption, access controls, and compliance frameworks to safeguard your digital infrastructure.",
    icon: LockKeyhole,
    gradient: "from-indigo-500 to-indigo-400",
    shadow: "shadow-indigo-500/20",
  },
  {
    title: "System Integration",
    description:
      "Seamlessly connect your new systems with existing enterprise software through our integration expertise. We unify disparate systems into cohesive, efficient digital ecosystems.",
    icon: Link2,
    gradient: "from-teal-400 to-emerald-600",
    shadow: "shadow-teal-500/20",
  },
  {
    title: "High-Performance Infrastructure",
    description:
      "Deploy scalable, reliable digital systems that perform under pressure. Our infrastructure solutions ensure optimal performance, availability, and responsiveness for your organization.",
    icon: Zap,
    gradient: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20",
  },
] as const;

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <Card
            key={f.title}
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
                {f.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-3">
              <p className="text-slate-400 leading-relaxed text-sm">{f.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}


