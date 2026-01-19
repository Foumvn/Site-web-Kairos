import { BookOpen, CheckCircle2, ArrowRight, FileText, Search, Lock, Share2, Archive } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Document Management | Kairos",
  description: "Implement comprehensive document management systems that transform how your organization handles information.",
};

export default function DocumentManagementPage() {
  const capabilities = [
    {
      icon: FileText,
      title: "Digital Transformation",
      description: "Convert paper-based processes to digital workflows, reducing costs and improving efficiency.",
    },
    {
      icon: Search,
      title: "Advanced Search & Retrieval",
      description: "Powerful search capabilities with metadata indexing, full-text search, and intelligent categorization.",
    },
    {
      icon: Lock,
      title: "Access Control Systems",
      description: "Granular permissions and role-based access control to ensure document security and compliance.",
    },
    {
      icon: Share2,
      title: "Workflow Automation",
      description: "Automate document routing, approvals, and notifications to streamline business processes.",
    },
    {
      icon: Archive,
      title: "Version Control",
      description: "Track document versions, maintain audit trails, and ensure data integrity throughout the lifecycle.",
    },
  ];

  const solutions = [
    {
      title: "Document Capture",
      description: "Scan, import, and digitize documents from multiple sources with OCR and intelligent data extraction.",
      features: ["Multi-format support", "OCR technology", "Bulk import", "Auto-categorization"],
    },
    {
      title: "Storage & Organization",
      description: "Centralized repository with intelligent folder structures, tagging, and metadata management.",
      features: ["Cloud storage", "Hierarchical organization", "Metadata tagging", "Smart folders"],
    },
    {
      title: "Collaboration Tools",
      description: "Enable teams to collaborate on documents with comments, annotations, and real-time editing.",
      features: ["Real-time collaboration", "Comments & annotations", "Document sharing", "Activity tracking"],
    },
    {
      title: "Compliance & Security",
      description: "Ensure regulatory compliance with retention policies, audit logs, and security controls.",
      features: ["Retention policies", "Audit trails", "Encryption", "Compliance reporting"],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#18181b] text-gray-900 dark:text-gray-100">
      <SiteHeader variant="light" />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-sky-50/50 to-white dark:from-[#1a1f35] dark:to-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 mb-6 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Document <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Management</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Implement comprehensive document management systems that transform how your organization handles information. 
                Streamline workflows, improve collaboration, and enhance data security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 px-8">
                  View Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-white dark:bg-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Key Capabilities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Powerful features to manage your documents efficiently and securely
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 mb-4">
                      <capability.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-[var(--font-brand)] text-gray-900 dark:text-white">
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1c] dark:to-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Complete Document Management Solutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                End-to-end solutions covering the entire document lifecycle
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-[var(--font-brand)] text-gray-900 dark:text-white mb-2">
                      {solution.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{solution.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                  Transform Your Document Workflows
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Modern document management systems eliminate paper-based processes, reduce costs, 
                  improve collaboration, and ensure compliance with regulatory requirements.
                </p>
                <ul className="space-y-4">
                  {[
                    "Reduce paper usage and storage costs",
                    "Improve document security and access control",
                    "Accelerate document retrieval and processing",
                    "Enhance collaboration across teams and departments",
                    "Ensure compliance with retention and audit requirements",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 font-[var(--font-brand)]">
                    Ready to Modernize Your Document Management?
                  </h3>
                  <p className="text-sky-100 mb-6 leading-relaxed">
                    Let's discuss how we can help you implement a comprehensive document management system 
                    tailored to your organization's needs.
                  </p>
                  <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 font-semibold w-full">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-sky-600 via-blue-500 to-indigo-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-[var(--font-brand)]">
              Streamline Your Document Management Today
            </h2>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Transform how your organization handles documents with our comprehensive management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-sky-50 font-semibold px-8 py-6 text-lg shadow-xl"
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

