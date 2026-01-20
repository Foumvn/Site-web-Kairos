"use client";

import React from "react";
import { Twitter } from "lucide-react";
import { useTranslation, useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Testimonial() {
  const { t } = useTranslation();
  const { raw } = useLanguage();

  const testimonials = raw("testimonials.items") || [];

  // Distribution pour l'effet Masonry (5 colonnes)
  const columns = [
    { type: "large", items: [testimonials[0]] },
    { type: "stacked", items: [testimonials[1], testimonials[2]] },
    { type: "large", items: [testimonials[3]] },
    { type: "stacked", items: [testimonials[4], testimonials[5]] },
    { type: "large", items: [testimonials[6]] }
  ];

  return (
    <section className="py-24 bg-[#0f172a] overflow-hidden text-white border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t("testimonials.chosenByInnovators")} <br />
            <span className="text-slate-500 font-medium">
              {t("testimonials.startupsToGiants")}
            </span>
          </h2>
          <button className="bg-primary hover:opacity-90 text-primary-foreground font-bold py-2 px-6 rounded-md transition-all text-sm">
            View all customers
          </button>
        </div>

        {/* Masonry Layout Grid with Horizontal Scroll (Marquee) */}
        <div className="relative mt-8">
          <div className="flex animate-scroll-left hover:[animation-play-state:paused] gap-4 w-max">

            {/* First Set of Columns */}
            {columns.map((col, colIdx) => (
              <div key={`col-1-${colIdx}`} className="space-y-4 w-[350px] shrink-0">
                {col.items.map((item, itemIdx) => (
                  <Card
                    key={itemIdx}
                    item={item}
                    size={col.type === "large" ? "large" : "small"}
                    isTwitter={col.type === "stacked"}
                  />
                ))}
              </div>
            ))}

            {/* Duplicate Set for Infinite Scroll */}
            {columns.map((col, colIdx) => (
              <div key={`col-2-${colIdx}`} className="space-y-4 w-[350px] shrink-0">
                {col.items.map((item, itemIdx) => (
                  <Card
                    key={itemIdx}
                    item={item}
                    size={col.type === "large" ? "large" : "small"}
                    isTwitter={col.type === "stacked"}
                  />
                ))}
              </div>
            ))}

          </div>

          {/* Side Gradients for Horizontal Fade (Stronger on sides) */}
          <div className="absolute inset-y-0 left-0 w-64 md:w-[600px] bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-64 md:w-[600px] bg-gradient-to-l from-[#0f172a] via-[#0f172a]/90 to-transparent z-20 pointer-events-none" />

          {/* Bottom Gradient Fade (Very Subtle) */}
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0f172a] to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function Card({ item, size, isTwitter }: { item: any; size: "small" | "large"; isTwitter: boolean }) {
  if (!item) return null;

  return (
    <div className={cn(
      "bg-[#0a0a0b] border border-[#1e293b] p-8 rounded-xl flex flex-col justify-between hover:border-slate-600 transition-all duration-500 group",
      size === "large" ? "min-h-[520px]" : "min-h-[252px]"
    )}>
      <div>
        <div className="flex justify-between items-start mb-8">
          {isTwitter ? (
            <div className="flex items-center gap-1">
              <Twitter className="w-5 h-5 text-slate-200 fill-current" />
            </div>
          ) : (
            <div className="font-black text-2xl tracking-tighter flex items-center gap-2 italic">
              <div className="w-6 h-6 bg-red-600 rounded-full" />
              {item.author.split(" ")[0].toUpperCase()}
            </div>
          )}
        </div>

        <p className={cn(
          "text-slate-300 leading-relaxed font-normal",
          size === "large" ? "text-xl mt-12" : "text-[15px]"
        )}>
          {item.quote}
        </p>
      </div>

      <div className="mt-8">
        <div className="flex flex-col">
          <span className="font-bold text-white text-sm">
            {item.author}
            {isTwitter && <span className="text-slate-500 font-normal ml-1">@{item.author.toLowerCase().replace(" ", "")}</span>}
          </span>
          {!isTwitter && <span className="text-slate-500 text-xs mt-1">{item.role}</span>}
        </div>
      </div>
    </div>
  );
}
