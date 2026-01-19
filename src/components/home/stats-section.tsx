"use client";

import { TrendingUp, Users, FileText, Shield } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: "2,000+", labelKey: "stats.organizations", color: "from-blue-500 to-cyan-500" },
    { icon: FileText, value: "500+", labelKey: "stats.systems", color: "from-cyan-500 to-sky-500" },
    { icon: Shield, value: "99.9%", labelKey: "stats.uptime", color: "from-sky-500 to-blue-500" },
    { icon: TrendingUp, value: "150+", labelKey: "stats.countries", color: "from-blue-500 to-indigo-500" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
