import { Wrench, CheckCircle2, ArrowRight, Clock, Shield, TrendingUp, HeadphonesIcon } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Application Support & Maintenance | Kairos",
  description: "Keep your digital information systems running smoothly with comprehensive support and maintenance services.",
};

export default function ApplicationSupportMaintenancePage() {
  const services = [
    {
      icon: Clock,
      title: "24/7 System Monitoring",
      description: "Round-the-clock monitoring of your systems to detect and resolve issues before they impact your operations.",
    },
    {
      icon: Wrench,
      title: "Regular Updates & Patches",
      description: "Proactive maintenance with regular updates, security patches, and performance optimizations.",
    },
    {
      icon: HeadphonesIcon,
      title: "Issue Resolution",
      description: "Rapid response to technical issues with dedicated support channels and expert troubleshooting.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous improvement of system performance, scalability, and efficiency based on usage patterns.",
    },
    {
      icon: Shield,
      title: "Security Management",
      description: "Ongoing security monitoring, vulnerability assessments, and compliance maintenance.",
    },
  ];

  const supportTiers = [
    {
      name: "Basic Support",
      features: [
        "Business hours support (9 AM - 5 PM)",
        "Email support",
        "Monthly system health checks",
        "Critical bug fixes",
        "Documentation updates",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional Support",
      features: [
        "Extended hours support (8 AM - 8 PM)",
        "Email and phone support",
        "Weekly system monitoring",
        "Priority bug fixes",
        "Regular performance reports",
        "Quarterly optimization reviews",
      ],
      color: "from-cyan-500 to-sky-500",
    },
    {
      name: "Enterprise Support",
      features: [
        "24/7 support availability",
        "Dedicated support team",
        "Real-time system monitoring",
        "Immediate critical issue response",
        "Monthly optimization sessions",
        "Custom SLA agreements",
        "On-site support available",
      ],
      color: "from-sky-500 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#18181b] text-gray-900 dark:text-gray-100">
      <SiteHeader variant="light" />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-cyan-50/50 to-white dark:from-[#1a1f35] dark:to-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-500 mb-6 shadow-lg">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Application Support & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600">Maintenance</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Keep your digital information systems running smoothly with our comprehensive support and maintenance services. 
                We ensure maximum uptime, security, and optimal performance for your enterprise systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white px-8">
                  Get Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 px-8">
                  View Support Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white dark:bg-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Our Support Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive support to keep your systems running at peak performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-500 mb-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-[var(--font-brand)] text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1c] dark:to-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Support Plans
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the support level that matches your organization's needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300 ${
                    index === 1 ? "border-2 border-cyan-500 scale-105" : ""
                  }`}
                >
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${tier.color} mb-4`}>
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-[var(--font-brand)] text-gray-900 dark:text-white">
                      {tier.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90 text-white ${
                        index === 1 ? "shadow-lg" : ""
                      }`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
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
                  Why Ongoing Support Matters
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Digital systems require continuous attention to maintain security, performance, and reliability. 
                  Our support services ensure your systems remain optimized and protected.
                </p>
                <ul className="space-y-4">
                  {[
                    "Minimize downtime and business disruption",
                    "Stay protected with latest security patches",
                    "Improve system performance over time",
                    "Reduce long-term maintenance costs",
                    "Access to expert knowledge and best practices",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500 to-sky-500 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 font-[var(--font-brand)]">
                    Need Immediate Support?
                  </h3>
                  <p className="text-cyan-100 mb-6 leading-relaxed">
                    Our support team is ready to help you resolve any issues and keep your systems running smoothly.
                  </p>
                  <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 font-semibold w-full">
                    Contact Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-sky-500 to-blue-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-[var(--font-brand)]">
              Ensure Your Systems Stay Optimized
            </h2>
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              Partner with us for reliable, comprehensive support and maintenance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-cyan-50 font-semibold px-8 py-6 text-lg shadow-xl"
                asChild
              >
                <Link href="/contact">Get Support</Link>
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

