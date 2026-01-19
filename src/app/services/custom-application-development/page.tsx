import { Code, CheckCircle2, ArrowRight, Database, Cloud, Shield, Zap } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Custom Application Development | Kairos",
  description: "Design and build custom digital information systems tailored to your organization's specific needs.",
};

export default function CustomApplicationDevelopmentPage() {
  const features = [
    {
      icon: Database,
      title: "System Architecture Design",
      description: "We design robust, scalable architectures that align with your business objectives and technical requirements.",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Our expert developers build tailored solutions using modern technologies and best practices.",
    },
    {
      icon: Cloud,
      title: "Enterprise Integration",
      description: "Seamlessly integrate new systems with your existing infrastructure and third-party applications.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security measures and compliance with industry standards from day one.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed, scalability, and reliability to handle your growing business needs.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, business processes, and technical constraints to create a comprehensive plan.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our team designs the system architecture and creates prototypes for validation and feedback.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing, code reviews, and quality assurance throughout the process.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment with comprehensive documentation, training, and ongoing support services.",
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Custom Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Development</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Design and build custom digital information systems tailored to your organization's specific needs. 
                Our expert team creates scalable, secure enterprise solutions using proven technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 px-8">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive custom development services to transform your business operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-[var(--font-brand)] text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1c] dark:to-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {process.map((item, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-[var(--font-brand)] text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </CardTitle>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white dark:bg-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 font-[var(--font-brand)] text-gray-900 dark:text-white">
                  Why Choose Custom Development?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Off-the-shelf solutions often fall short of meeting your unique business requirements. 
                  Custom development ensures your digital systems are perfectly aligned with your organization's needs.
                </p>
                <ul className="space-y-4">
                  {[
                    "Tailored to your specific workflows and processes",
                    "Scalable architecture that grows with your business",
                    "Full ownership and control of your systems",
                    "Seamless integration with existing infrastructure",
                    "Ongoing support and maintenance from our expert team",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 font-[var(--font-brand)]">
                    Ready to Build Your Custom System?
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Let's discuss how we can create a digital information system that perfectly fits your organization's needs.
                  </p>
                  <Button size="lg" className="bg-white text-cyan-600 hover:bg-blue-50 font-semibold w-full">
                    Contact Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-[var(--font-brand)]">
              Start Your Custom Development Project Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Our team is ready to help you transform your business with custom digital information systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg shadow-xl"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter variant="light" />
    </div>
  );
}

