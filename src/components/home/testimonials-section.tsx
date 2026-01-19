"use client";

import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation, useLanguage } from "@/lib/i18n";

export function TestimonialsSection() {
  const { t } = useTranslation();
  const { raw } = useLanguage();

  const testimonials = raw("testimonials.items") || [];

  return (
    <section className="py-24 bg-white dark:bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading for innovators */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          {t("testimonials.chosenByInnovators")}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-3xl mx-auto">
          {t("testimonials.startupsToGiants")}
        </p>
        {/* Logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mb-12">
          {raw("testimonials.logos")?.map((logo: any, idx: number) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: any, index: number) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-cyan-500 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.author}`} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(" ").map((n: string) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

