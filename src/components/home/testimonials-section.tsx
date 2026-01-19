import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Kairos implemented a complete digital information system that transformed our operations. The custom solution perfectly matches our workflow and has dramatically improved our efficiency.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      quote:
        "The security architecture they designed is outstanding. We feel confident knowing our critical business data is protected with enterprise-grade security measures.",
      author: "Michael Chen",
      role: "Security Director, FinanceHub",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      quote:
        "System integration was seamless. They connected all our existing enterprise software in weeks, not months. The implementation was smooth and the ROI was immediate.",
      author: "Emily Rodriguez",
      role: "Operations Manager, GlobalInc",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about their experience with Kairos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
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

