import { Code, Wrench, BookOpen, Search, GraduationCap } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Custom Application Development",
      description:
        "Design and build custom digital information systems tailored to your organization's specific needs. Our expert team creates scalable, secure enterprise solutions using proven technologies.",
      features: ["System architecture design", "Custom development", "Enterprise integration", "Cloud infrastructure"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wrench,
      title: "Application Support & Maintenance",
      description:
        "Keep your digital information systems running smoothly with our comprehensive support and maintenance services. We ensure maximum uptime, security, and optimal performance for your enterprise systems.",
      features: ["24/7 system monitoring", "Regular updates & patches", "Issue resolution", "Performance optimization"],
      color: "from-cyan-500 to-sky-500",
    },
    {
      icon: BookOpen,
      title: "Document Management",
      description:
        "Implement comprehensive document management systems that transform how your organization handles information. Streamline workflows, improve collaboration, and enhance data security.",
      features: ["Digital transformation", "Workflow automation", "System integration", "Access control systems"],
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: Search,
      title: "Strategic Watch & Economic Intelligence",
      description:
        "Stay ahead of the competition with our intelligence gathering and analysis services. Make informed decisions based on comprehensive market insights.",
      features: ["Market analysis", "Competitor monitoring", "Trend identification", "Custom reports"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: GraduationCap,
      title: "Training & Certification",
      description:
        "Empower your team with comprehensive training programs. Learn best practices, advanced features, and get certified on Kairos platforms.",
      features: ["On-site training", "Online courses", "Certification programs", "Ongoing support"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#18181b] text-gray-900 dark:text-gray-100">
      <SiteHeader variant="light" />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white dark:from-[#1a1f35] dark:to-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Comprehensive digital system implementation and creation services for enterprises and organizations. 
                From custom development to system integration and support, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white dark:bg-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardHeader>
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-[var(--font-brand)] text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-semibold mt-1`}>
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className={`w-full border-2 bg-transparent hover:bg-gradient-to-r ${service.color} hover:text-white hover:border-transparent transition-all`}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-[var(--font-brand)]">
              Need a Custom Digital System?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Our team of experts is ready to help you design and implement the perfect digital information system for your unique organizational needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg shadow-xl"
              >
                Contact Sales
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter variant="light" />
    </div>
  );
}

