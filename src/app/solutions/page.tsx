import { Brain, Bot, Bolt, Cpu, FolderOpen, Share2, Shuffle, TrendingUp } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 dark:bg-[#18181b] dark:text-gray-100 transition-colors duration-300">
      <SiteHeader variant="light" />

      <main className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gray-200/50 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">KAIROS SOLUTIONS</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl dark:text-white text-gray-900">
              Transform your organization with <br className="hidden md:block" />
              <span className="relative inline-block">
                digital information systems
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary"
                  fill="none"
                  viewBox="0 0 200 9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.00025 6.99997C2.00025 6.99997 101.5 0.999991 198.5 2.49997" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>{" "}
              tailored to your business needs
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Diagram */}
            <div className="lg:col-span-7 relative">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[500px] flex items-center">
                <div className="relative z-10 w-3/4 max-w-lg h-64 md:h-80 flex rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-[#202022]">
                  <div className="w-1/2 relative p-6 flex flex-col items-center justify-center border-r border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1a2e2b] dark:to-[#121212]">
                    <div className="w-16 h-16 rounded-2xl bg-teal-900/30 text-primary border border-primary/30 flex items-center justify-center mb-4">
                      <FolderOpen className="h-9 w-9" />
                    </div>
                    <h3 className="text-primary font-bold text-lg mb-2">LEGACY</h3>
                    <p className="text-xs md:text-sm text-center text-gray-500 dark:text-gray-400">
                      Existing Systems <br />
                      & Infrastructure
                    </p>
                  </div>
                  <div className="w-1/2 relative p-6 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-[#1a1f35] dark:to-[#121212]">
                    <div className="w-16 h-16 rounded-2xl bg-blue-900/30 text-blue-400 border border-blue-400/30 flex items-center justify-center mb-4">
                      <Cpu className="h-9 w-9" />
                    </div>
                    <h3 className="text-blue-400 font-bold text-lg mb-2">DIGITAL</h3>
                    <p className="text-xs md:text-sm text-center text-gray-500 dark:text-gray-400">
                      Modern Information <br />
                      Systems
                    </p>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-400 shadow-sm z-20">
                    <Shuffle className="h-5 w-5" />
                  </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path className="stroke-gray-300 dark:stroke-gray-700 opacity-30" d="M 50 50 C 65 50, 75 10, 93 10" fill="none" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path className="stroke-gray-300 dark:stroke-gray-700 opacity-30" d="M 50 50 C 65 50, 70 30, 81 30" fill="none" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path className="stroke-gray-300 dark:stroke-gray-700 opacity-30" d="M 50 50 C 65 50, 80 50, 93 50" fill="none" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path className="stroke-gray-300 dark:stroke-gray-700 opacity-30" d="M 50 50 C 65 50, 70 70, 81 70" fill="none" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path className="stroke-gray-300 dark:stroke-gray-700 opacity-30" d="M 50 50 C 65 50, 75 90, 93 90" fill="none" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke" />

                  <path className="animate-beam stroke-primary opacity-0" d="M 50 50 C 65 50, 75 10, 93 10" fill="none" strokeLinecap="round" strokeWidth="3" style={{ animationDelay: "0s" }} vectorEffect="non-scaling-stroke" />
                  <path className="animate-beam stroke-primary opacity-0" d="M 50 50 C 65 50, 70 30, 81 30" fill="none" strokeLinecap="round" strokeWidth="3" style={{ animationDelay: "2.2s" }} vectorEffect="non-scaling-stroke" />
                  <path className="animate-beam stroke-primary opacity-0" d="M 50 50 C 65 50, 80 50, 93 50" fill="none" strokeLinecap="round" strokeWidth="3" style={{ animationDelay: "0.8s" }} vectorEffect="non-scaling-stroke" />
                  <path className="animate-beam stroke-primary opacity-0" d="M 50 50 C 65 50, 70 70, 81 70" fill="none" strokeLinecap="round" strokeWidth="3" style={{ animationDelay: "3.1s" }} vectorEffect="non-scaling-stroke" />
                  <path className="animate-beam stroke-primary opacity-0" d="M 50 50 C 65 50, 75 90, 93 90" fill="none" strokeLinecap="round" strokeWidth="3" style={{ animationDelay: "1.5s" }} vectorEffect="non-scaling-stroke" />
                </svg>

                <div className="absolute right-0 top-0 h-full w-1/4 flex flex-col justify-between py-4">
                  <Bubble className="animate-float self-end mr-4" icon={<Bot className="h-6 w-6 text-green-500" />} />
                  <Bubble className="animate-float-delay self-start ml-2 w-16 h-16" icon={<Brain className="h-7 w-7 text-purple-500" />} />
                  <Bubble className="animate-float self-end mr-0 w-16 h-16" icon={<Bolt className="h-7 w-7 text-blue-500" />} />
                  <Bubble className="animate-float-delay self-start ml-2 w-16 h-16" icon={<Share2 className="h-7 w-7 text-orange-500" />} />
                  <Bubble className="animate-float self-end mr-4" icon={<TrendingUp className="h-6 w-6 text-red-500" />} />
                </div>
              </div>
            </div>

            {/* Copy card */}
            <div className="lg:col-span-5">
              <Card className="bg-gray-50 dark:bg-[#27272a] rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                    Your digital transformation <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">starts here</span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    We design and implement comprehensive digital information systems that transform how your organization 
                    manages data, processes, and workflows. Our solutions are tailored to your specific business needs.
                  </p>
                  <ul className="space-y-3 mb-10 font-mono text-sm text-gray-700 dark:text-gray-400">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Custom System Architecture
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Enterprise Integration
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Scalable Infrastructure
                    </li>
                  </ul>
                  <a className="inline-flex items-center text-primary font-semibold hover:text-teal-300 transition-colors group/link" href="#">
                    <span className="border-b border-primary/50 group-hover/link:border-primary pb-0.5 transition-all">
                      Learn more about our solutions
                    </span>
                    <span className="ml-1 text-lg group-hover/link:translate-x-1 transition-transform">›</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter variant="light" />
    </div>
  );
}

function Bubble({
  className,
  icon,
}: {
  className?: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={[
        "bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center w-14 h-14 relative z-10",
        className ?? "",
      ].join(" ")}
    >
      {icon}
    </div>
  );
}


