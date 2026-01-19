import { Search, CheckCircle2, ArrowRight, TrendingUp, BarChart3, Eye, Target, Globe } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Strategic Watch & Economic Intelligence | Kairos",
  description: "Stay ahead of the competition with our intelligence gathering and analysis services.",
};

export default function StrategicWatchEconomicIntelligencePage() {
  const services = [
    {
      icon: Eye,
      title: "Market Analysis",
      description: "Comprehensive analysis of market trends, opportunities, and threats to inform strategic decision-making.",
    },
    {
      icon: TrendingUp,
      title: "Competitor Monitoring",
      description: "Track competitor activities, strategies, and market positioning to maintain competitive advantage.",
    },
    {
      icon: Target,
      title: "Trend Identification",
      description: "Early detection of emerging trends, technologies, and market shifts that could impact your business.",
    },
    {
      icon: BarChart3,
      title: "Custom Reports",
      description: "Tailored intelligence reports with actionable insights specific to your industry and objectives.",
    },
    {
      icon: Globe,
      title: "Economic Intelligence",
      description: "Monitor economic indicators, policy changes, and global events affecting your business environment.",
    },
  ];

  const deliverables = [
    {
      title: "Competitive Intelligence Reports",
      description: "Regular reports on competitor activities, product launches, pricing strategies, and market positioning.",
      frequency: "Weekly / Monthly",
    },
    {
      title: "Market Trend Analysis",
      description: "In-depth analysis of market trends, customer behavior, and industry developments.",
      frequency: "Monthly / Quarterly",
    },
    {
      title: "Technology Watch",
      description: "Monitoring of emerging technologies, innovations, and their potential impact on your industry.",
      frequency: "Bi-weekly",
    },
    {
      title: "Strategic Recommendations",
      description: "Actionable recommendations based on intelligence gathered to support strategic planning.",
      frequency: "As needed",
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 mb-6 shadow-lg">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Strategic Watch & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Economic Intelligence</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Stay ahead of the competition with our intelligence gathering and analysis services. 
                Make informed decisions based on comprehensive market insights and strategic intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 px-8">
                  View Services
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
                Our Intelligence Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive intelligence gathering and analysis to support strategic decision-making
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 mb-4">
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

        {/* Deliverables Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1c] dark:to-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Intelligence Deliverables
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Regular intelligence reports and analysis tailored to your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deliverables.map((deliverable, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl font-[var(--font-brand)] text-gray-900 dark:text-white">
                        {deliverable.title}
                      </CardTitle>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {deliverable.frequency}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{deliverable.description}</p>
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
                  Why Strategic Intelligence Matters
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  In today's rapidly changing business environment, having access to timely and accurate intelligence 
                  is crucial for making informed strategic decisions and maintaining competitive advantage.
                </p>
                <ul className="space-y-4">
                  {[
                    "Make data-driven strategic decisions",
                    "Identify opportunities before competitors",
                    "Anticipate market changes and trends",
                    "Reduce risks through informed planning",
                    "Optimize resource allocation and investments",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 font-[var(--font-brand)]">
                    Ready to Gain Strategic Advantage?
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Let's discuss how our intelligence services can help you stay ahead of the competition 
                    and make informed strategic decisions.
                  </p>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold w-full">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-[var(--font-brand)]">
              Stay Ahead with Strategic Intelligence
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Make informed decisions and maintain competitive advantage with our comprehensive intelligence services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg shadow-xl"
                asChild
              >
                <Link href="/contact">Get Started</Link>
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

