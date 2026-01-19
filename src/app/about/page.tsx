import { Award, Target, Users, Zap, Heart, Shield } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with digital information systems and enterprise technology solutions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Your data's security is our top priority. We implement the highest standards of protection.",
      color: "from-cyan-500 to-sky-500",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "We build solutions that truly serve our customers' needs and exceed their expectations.",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product development to customer support.",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  const milestones = [
    { year: "2015", title: "Company Founded", description: "Kairos was born with a vision to revolutionize digital information systems for enterprises." },
    { year: "2018", title: "Enterprise Solutions", description: "Launched our comprehensive digital system implementation services." },
    { year: "2020", title: "Global Expansion", description: "Expanded operations to serve organizations across 150+ countries." },
    { year: "2023", title: "2,000+ Clients", description: "Reached a major milestone with over 2,000 organizations trusting Kairos for their digital transformation." },
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
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Kairos</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                We're on a mission to empower organizations worldwide by implementing and creating comprehensive digital information systems
                that transform how businesses operate and manage their critical data.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white dark:bg-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 font-[var(--font-brand)] text-gray-900 dark:text-white">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  At Kairos, we believe that robust digital information systems are essential for modern organizations. Our mission is to design,
                  implement, and maintain comprehensive systems that are secure, scalable, and perfectly aligned with your business needs.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  We combine technical expertise with deep understanding of enterprise requirements to create digital solutions that not only meet today's challenges
                  but scale for tomorrow's growth.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 text-white">
                  <Award className="h-16 w-16 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Proven Expertise</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Recognized by industry leaders for our innovative approach to digital system implementation and enterprise integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50/30 dark:from-[#18181b] dark:to-[#1a1f35]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do at Kairos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} mb-4 shadow-lg`}
                    >
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-[var(--font-brand)] text-gray-900 dark:text-white">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white dark:bg-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Key milestones in our company's growth and evolution.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    <div className="hidden md:block shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="md:hidden mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <Card className="flex-1 border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{milestone.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Users className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4 font-[var(--font-brand)]">
              Join Our Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-xl"
            >
              View Open Positions
            </a>
          </div>
        </section>
      </main>

      <SiteFooter variant="light" />
    </div>
  );
}

