import { GraduationCap, CheckCircle2, ArrowRight, Users, BookOpen, Award, Video, Laptop } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Training & Certification | Kairos",
  description: "Empower your team with comprehensive training programs on Kairos platforms and digital systems.",
};

export default function TrainingPage() {
  const trainingTypes = [
    {
      icon: Users,
      title: "On-Site Training",
      description: "Personalized training sessions delivered at your location, tailored to your team's specific needs and workflows.",
    },
    {
      icon: Video,
      title: "Online Courses",
      description: "Flexible online training programs with interactive modules, videos, and hands-on exercises accessible anytime.",
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Comprehensive certification programs to validate expertise and enhance professional credentials.",
    },
    {
      icon: Laptop,
      title: "Virtual Workshops",
      description: "Live virtual workshops with expert instructors for interactive learning and real-time Q&A sessions.",
    },
  ];

  const programs = [
    {
      title: "Kairos Platform Fundamentals",
      description: "Essential training on core Kairos platform features, navigation, and basic operations.",
      duration: "2 days",
      level: "Beginner",
      topics: ["Platform overview", "User interface", "Basic operations", "Document management", "User permissions"],
    },
    {
      title: "Advanced System Administration",
      description: "Comprehensive training for system administrators on configuration, maintenance, and optimization.",
      duration: "5 days",
      level: "Advanced",
      topics: ["System configuration", "User management", "Security settings", "Performance tuning", "Troubleshooting"],
    },
    {
      title: "Custom Development Training",
      description: "Technical training for developers on building custom solutions and integrations.",
      duration: "3 days",
      level: "Intermediate",
      topics: ["API integration", "Custom workflows", "Development best practices", "Testing & deployment"],
    },
    {
      title: "Document Management Specialist",
      description: "Specialized training on document management best practices, workflows, and optimization.",
      duration: "3 days",
      level: "Intermediate",
      topics: ["Document workflows", "Metadata management", "Search optimization", "Compliance & security"],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#18181b] text-gray-900 dark:text-gray-100">
      <SiteHeader variant="light" />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-white dark:from-[#1a1f35] dark:to-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Training & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Certification</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Empower your team with comprehensive training programs. Learn best practices, advanced features, 
                and get certified on Kairos platforms and digital information systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 px-8">
                  View Programs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Training Types Section */}
        <section className="py-20 bg-white dark:bg-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Training Formats
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Flexible training options to suit your team's learning preferences and schedule
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainingTypes.map((type, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-[var(--font-brand)] text-gray-900 dark:text-white">
                      {type.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1c] dark:to-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Training Programs
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive programs covering all aspects of Kairos platforms and digital systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl font-[var(--font-brand)] text-gray-900 dark:text-white">
                        {program.title}
                      </CardTitle>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                        {program.duration}
                      </span>
                      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                        {program.level}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{program.description}</p>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Topics Covered:</p>
                      <ul className="space-y-1">
                        {program.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white">
                      Learn More
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
                  Why Invest in Training?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Well-trained teams maximize the value of your digital systems, improve productivity, 
                  and ensure optimal system utilization and security.
                </p>
                <ul className="space-y-4">
                  {[
                    "Maximize system utilization and ROI",
                    "Improve team productivity and efficiency",
                    "Reduce support requests and errors",
                    "Enhance security awareness and best practices",
                    "Build internal expertise and self-sufficiency",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 font-[var(--font-brand)]">
                    Ready to Train Your Team?
                  </h3>
                  <p className="text-indigo-100 mb-6 leading-relaxed">
                    Let's discuss your training needs and create a customized program that fits your team's 
                    schedule and learning objectives.
                  </p>
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold w-full">
                    Contact Training Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-[var(--font-brand)]">
              Empower Your Team with Expert Training
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Invest in your team's success with comprehensive training programs on Kairos platforms and digital systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-6 text-lg shadow-xl"
                asChild
              >
                <Link href="/contact">Enroll Now</Link>
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

