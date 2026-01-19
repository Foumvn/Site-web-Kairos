"use client";

import { Bot, Brain, Zap, Share2, TrendingUp, FolderOpen, Cpu, ArrowLeftRight, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AIKnowledgeSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gray-100/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-cyan-500 font-bold tracking-widest text-sm uppercase mb-4 block">
            KAIROS SOLUTIONS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl text-gray-900 font-[var(--font-brand)]">
            Transform your organization with <br className="hidden md:block" />
            <span className="relative inline-block">
              digital information systems
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-cyan-500"
                fill="none"
                viewBox="0 0 200 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00025 6.99997C2.00025 6.99997 101.5 0.999991 198.5 2.49997"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </span>{" "}
            tailored to your business needs
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Diagram */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[500px] flex items-center">
              {/* Main DOC/AI Card */}
              <div className="relative z-10 w-3/4 max-w-lg h-64 md:h-80 flex rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white">
                {/* DOC Section */}
                <div className="w-1/2 relative p-6 flex flex-col items-center justify-center border-r border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="w-16 h-16 rounded-2xl bg-teal-900/10 text-cyan-500 border border-cyan-500/30 flex items-center justify-center mb-4">
                    <FolderOpen className="h-9 w-9" />
                  </div>
                  <h3 className="text-cyan-500 font-bold text-lg mb-2">LEGACY</h3>
                  <p className="text-xs md:text-sm text-center text-gray-500">
                    Existing Systems<br />& Infrastructure
                  </p>
                </div>

                {/* Digital Section */}
                <div className="w-1/2 relative p-6 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="w-16 h-16 rounded-2xl bg-blue-900/10 text-blue-500 border border-blue-500/30 flex items-center justify-center mb-4">
                    <Cpu className="h-9 w-9" />
                  </div>
                  <h3 className="text-blue-500 font-bold text-lg mb-2">DIGITAL</h3>
                  <p className="text-xs md:text-sm text-center text-gray-500">
                    Modern Information<br />Systems
                  </p>
                </div>

                {/* Sync Icon in center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 shadow-sm z-20">
                  <ArrowLeftRight className="h-5 w-5" />
                </div>
              </div>

              {/* Animated Beams SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                {/* Static beam lines */}
                <path
                  className="stroke-gray-300 opacity-30"
                  d="M 50 50 C 65 50, 75 10, 93 10"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="stroke-gray-300 opacity-30"
                  d="M 50 50 C 65 50, 70 30, 81 30"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="stroke-gray-300 opacity-30"
                  d="M 50 50 C 65 50, 80 50, 93 50"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="stroke-gray-300 opacity-30"
                  d="M 50 50 C 65 50, 70 70, 81 70"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="stroke-gray-300 opacity-30"
                  d="M 50 50 C 65 50, 75 90, 93 90"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Animated beam lines */}
                <path
                  className="animate-beam stroke-cyan-500 opacity-0"
                  d="M 50 50 C 65 50, 75 10, 93 10"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="3"
                  style={{ animationDelay: "0s" }}
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="animate-beam stroke-cyan-500 opacity-0"
                  d="M 50 50 C 65 50, 70 30, 81 30"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="3"
                  style={{ animationDelay: "2.2s" }}
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="animate-beam stroke-cyan-500 opacity-0"
                  d="M 50 50 C 65 50, 80 50, 93 50"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="3"
                  style={{ animationDelay: "0.8s" }}
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="animate-beam stroke-cyan-500 opacity-0"
                  d="M 50 50 C 65 50, 70 70, 81 70"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="3"
                  style={{ animationDelay: "3.1s" }}
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="animate-beam stroke-cyan-500 opacity-0"
                  d="M 50 50 C 65 50, 75 90, 93 90"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="3"
                  style={{ animationDelay: "1.5s" }}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Floating Icons Column */}
              <div className="absolute right-0 top-0 h-full w-1/4 flex flex-col justify-between py-4">
                <FloatingIcon
                  icon={<Bot className="h-6 w-6 text-green-500" />}
                  className="animate-float self-end mr-4 w-14 h-14"
                />
                <FloatingIcon
                  icon={<Brain className="h-7 w-7 text-purple-500" />}
                  className="animate-float-delay self-start ml-2 w-16 h-16"
                />
                <FloatingIcon
                  icon={<Zap className="h-7 w-7 text-blue-500" />}
                  className="animate-float self-end mr-0 w-16 h-16"
                />
                <FloatingIcon
                  icon={<Share2 className="h-7 w-7 text-orange-500" />}
                  className="animate-float-delay self-start ml-2 w-16 h-16"
                />
                <FloatingIcon
                  icon={<TrendingUp className="h-6 w-6 text-red-500" />}
                  className="animate-float self-end mr-4 w-14 h-14"
                />
              </div>
            </div>
          </div>

          {/* Right side - Info Card */}
          <div className="lg:col-span-5">
            <Card className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />
              <CardContent className="p-0 relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 leading-tight font-[var(--font-brand)]">
                  Your digital transformation <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    starts here
                  </span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We design and implement comprehensive digital information systems that transform how your organization 
                  manages data, processes, and workflows. Our solutions are tailored to your specific business needs.
                </p>
                <ul className="space-y-3 mb-10 font-mono text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Custom System Architecture
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Enterprise Integration
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Scalable Infrastructure
                  </li>
                </ul>
                <a
                  className="inline-flex items-center text-cyan-500 font-semibold hover:text-cyan-400 transition-colors group/link"
                  href="#"
                >
                  <span className="border-b border-cyan-500/50 group-hover/link:border-cyan-500 pb-0.5 transition-all">
                    Learn more about our solutions
                  </span>
                  <ChevronRight className="ml-1 h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white p-3 rounded-full shadow-lg border border-gray-200 flex items-center justify-center relative z-10 ${className ?? ""}`}
    >
      {icon}
    </div>
  );
}

