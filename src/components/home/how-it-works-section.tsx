"use client";

import * as React from "react";
import { ArrowRight, Search, Settings, Zap, CheckCircle2, Database, Shield } from "lucide-react";

import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description?: string;
  details?: string;
};

const DEFAULT_STEPS: Step[] = [
  {
    title: "Analyse de vos besoins",
    description: "Nous étudions vos processus métier et identifions les opportunités de digitalisation.",
    details:
      "Notre équipe d'experts analyse votre infrastructure existante, vos flux de travail et vos objectifs stratégiques pour concevoir une solution sur mesure.",
  },
  {
    title: "Conception de la solution",
    description: "Architecture et design de votre système d'information digital personnalisé.",
    details:
      "Nous concevons une architecture robuste et scalable qui s'intègre parfaitement à votre écosystème existant, en respectant vos contraintes de sécurité et de conformité.",
  },
  {
    title: "Développement et intégration",
    description: "Implémentation de votre système avec intégration de vos outils existants.",
    details:
      "Notre équipe développe et déploie votre solution en suivant les meilleures pratiques, avec des tests rigoureux et une intégration transparente de vos systèmes legacy.",
  },
  {
    title: "Formation et support continu",
    description: "Accompagnement de vos équipes et maintenance de votre infrastructure.",
    details:
      "Nous formons vos utilisateurs et assurons un support technique continu pour garantir la pérennité et l'évolution de votre système d'information digital.",
  },
];

const STEP_ICONS = [Search, Settings, Zap, CheckCircle2];

export function HowItWorksSection({
  title = "Comment ça marche",
  eyebrow = "PROCESSUS",
  steps = DEFAULT_STEPS,
}: {
  title?: string;
  eyebrow?: string;
  steps?: Step[];
}) {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isLocked, setIsLocked] = React.useState(false);
  
  // Refs for scroll hijacking
  const isLockedRef = React.useRef(false);
  const accumulatedDeltaRef = React.useRef(0);
  const savedScrollYRef = React.useRef(0);
  const unlockScrollYRef = React.useRef(0); // Track scroll position when unlocked
  const hasCompletedDownRef = React.useRef(false);
  const hasCompletedUpRef = React.useRef(false);

  const SCROLL_SENSITIVITY = 2000; // Total scroll distance needed for full animation

  React.useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

      // Lock scroll and start animation
      const lockScroll = () => {
        if (isLockedRef.current) return;
        
        isLockedRef.current = true;
        setIsLocked(true);
        savedScrollYRef.current = window.scrollY;
        unlockScrollYRef.current = window.scrollY; // Initialize unlock position
        
        // Fix body position to prevent scroll
        document.body.style.position = "fixed";
        document.body.style.top = `-${savedScrollYRef.current}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.overflow = "hidden";
      };

    // Unlock scroll and resume normal scrolling
    const unlockScroll = (direction: "down" | "up" = "down") => {
      if (!isLockedRef.current) return;
      
      isLockedRef.current = false;
      setIsLocked(false);
      
      // Restore body position
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      
      // Restore scroll position and add a small offset to continue scrolling
      const baseScrollY = savedScrollYRef.current;
      const offset = direction === "down" ? 200 : -200; // Scroll further to exit trigger zone
      const newScrollY = baseScrollY + offset;
      
      // Track the unlock position
      unlockScrollYRef.current = newScrollY;
      
      requestAnimationFrame(() => {
        window.scrollTo({
          top: newScrollY,
          behavior: "auto" // Instant scroll to avoid conflicts
        });
      });
    };

    // Apply delta to animation progress
    const applyScrollDelta = (delta: number) => {
      accumulatedDeltaRef.current = Math.max(
        0,
        Math.min(SCROLL_SENSITIVITY, accumulatedDeltaRef.current + delta)
      );

      const progress = accumulatedDeltaRef.current / SCROLL_SENSITIVITY;
      setScrollProgress(progress);

      // Update active step
      const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
      setActiveIndex(stepIndex);

      // Exit conditions
      if (progress >= 1 && delta > 0) {
        // Completed scrolling down - unlock and continue scrolling down
        hasCompletedDownRef.current = true;
        hasCompletedUpRef.current = false;
        unlockScroll("down");
      } else if (progress <= 0 && delta < 0) {
        // Completed scrolling up - unlock and continue scrolling up
        hasCompletedUpRef.current = true;
        hasCompletedDownRef.current = false;
        unlockScroll("up");
      }
    };

    // Check if section is in trigger zone
    const checkTriggerZone = () => {
      if (!section || isLockedRef.current) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      
      // Trigger when section top is still high up (around 20% from top of viewport)
      // This means animation starts very early, when section is still higher up, ensuring all steps are visible
      const triggerPoint = windowHeight * 0.2; // 20% from top - section is still very high, all steps visible
      const triggerThreshold = 200; // Threshold for triggering
      const isInTriggerZone = sectionTop <= triggerPoint + triggerThreshold && sectionTop >= 0;

      // Also check if section is visible
      const isVisible = rect.top < windowHeight && rect.bottom > 0;

      // Don't re-lock if we just completed in that direction and section is still in trigger zone
      // This allows normal scrolling to continue
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - unlockScrollYRef.current;
      const hasScrolledAway = Math.abs(scrollDelta) > 400; // Must scroll at least 400px away from unlock point

      if (isInTriggerZone && isVisible) {
        // Check if we should re-lock based on scroll direction
        const scrollingDown = currentScrollY > savedScrollYRef.current;
        
        // Only lock if:
        // 1. We haven't completed in this direction, OR
        // 2. We've scrolled far enough away from the lock point
        if (scrollingDown && (!hasCompletedDownRef.current || hasScrolledAway)) {
          // Set initial progress based on current state
          if (hasCompletedUpRef.current || hasScrolledAway) {
            accumulatedDeltaRef.current = 0;
            setScrollProgress(0);
            setActiveIndex(0);
            hasCompletedDownRef.current = false;
          }
          lockScroll();
        } else if (!scrollingDown && (!hasCompletedUpRef.current || hasScrolledAway)) {
          // Coming from below, set progress to max
          if (hasCompletedDownRef.current || hasScrolledAway) {
            accumulatedDeltaRef.current = SCROLL_SENSITIVITY;
            setScrollProgress(1);
            setActiveIndex(steps.length - 1);
            hasCompletedUpRef.current = false;
          }
          lockScroll();
        }
      }

      // Reset completion flags when section is completely out of view
      if (rect.bottom < -100) {
        hasCompletedDownRef.current = false;
        hasCompletedUpRef.current = false;
      }
      if (rect.top > windowHeight + 100) {
        hasCompletedDownRef.current = false;
        hasCompletedUpRef.current = false;
      }
    };

    // Handle wheel events during lock
    const handleWheel = (e: WheelEvent) => {
      if (!isLockedRef.current) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      applyScrollDelta(e.deltaY);
    };

    // Handle keyboard events during lock
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLockedRef.current) return;

      let delta = 0;
      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
          delta = 100;
          break;
        case "ArrowUp":
        case "ArrowLeft":
          delta = -100;
          break;
        case "PageDown":
        case " ":
          if (!e.shiftKey) delta = 300;
          break;
        case "PageUp":
          delta = -300;
          break;
        default:
          return;
      }

      if (delta !== 0) {
        e.preventDefault();
        applyScrollDelta(delta);
      }
    };

    // Handle touch events
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isLockedRef.current) return;
      
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const delta = (touchStartY - touchY) * 2; // Amplify touch scroll
      touchStartY = touchY;
      
      applyScrollDelta(delta);
    };

    // Handle scroll to check trigger zone
    const handleScroll = () => {
      checkTriggerZone();
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Initial check
    checkTriggerZone();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      
      // Cleanup on unmount
      if (isLockedRef.current) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
      }
    };
  }, [steps.length]);

  // Calculate line progress percentage
  const lineProgress = Math.min(scrollProgress * 100, 100);

  // Calculate individual step progress
  const getStepProgress = (index: number) => {
    const stepStart = index / steps.length;
    const stepEnd = (index + 1) / steps.length;
    
    if (scrollProgress < stepStart) return 0;
    if (scrollProgress >= stepEnd) return 1;
    
    return (scrollProgress - stepStart) / (stepEnd - stepStart);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-50 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            {eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 font-[var(--font-brand)]">
            {title.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              {title.split(" ").slice(1).join(" ") || title}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: stepper */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Background Rail */}
              <div
                className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full"
                style={{ transform: "translateX(-50%)" }}
                aria-hidden="true"
              />

              {/* Animated Progress Line */}
              <div
                className="absolute left-4 top-0 w-0.5 rounded-full origin-top"
                style={{
                  height: `${lineProgress}%`,
                  background: "linear-gradient(180deg, #00e0c6 0%, #3b82f6 100%)",
                  boxShadow:
                    "0 0 12px rgba(0, 224, 198, 0.5), 0 0 24px rgba(59, 130, 246, 0.3)",
                  transition: "height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: "translateX(-50%)",
                }}
                aria-hidden="true"
              />

              {/* Glowing dot at the end of progress line */}
              <div
                className="absolute left-4 pointer-events-none"
                style={{
                  top: `${Math.min(lineProgress, 98)}%`,
                  transition: "top 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: "translateX(-50%)",
                }}
                aria-hidden="true"
              >
                <span
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #00e0c6, #3b82f6)",
                    boxShadow:
                      "0 0 16px rgba(0, 224, 198, 0.8), 0 0 32px rgba(59, 130, 246, 0.5)",
                    opacity: lineProgress > 2 && lineProgress < 98 ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </div>

              {/* Steps */}
              <div className="space-y-2">
                {steps.map((step, idx) => {
                  const stepProgress = getStepProgress(idx);
                  const isActive = idx === activeIndex;
                  const isCompleted = idx < activeIndex;
                  const isReached = scrollProgress >= idx / steps.length;

                  // Calculate "approach" effect
                  const approachOffset = isActive
                    ? Math.sin(stepProgress * Math.PI) * -6
                    : isCompleted
                      ? -3
                      : 0;

                  const StepIcon = STEP_ICONS[idx] || CheckCircle2;

                  return (
                    <div
                      key={`${step.title}-${idx}`}
                      className="relative pl-12"
                      style={{
                        transform: `translateY(${approachOffset}px)`,
                        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      {/* Number bubble - centered on line */}
                      <div
                        className="absolute left-4 top-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold overflow-hidden"
                        style={{
                          transform: "translateX(-50%)",
                          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        {/* Animated ring */}
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: isReached
                              ? `conic-gradient(from 0deg, #00e0c6 ${stepProgress * 100}%, transparent ${stepProgress * 100}%)`
                              : "transparent",
                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        />
                        {/* Inner circle */}
                        <span
                          className={cn(
                            "absolute inset-0.5 rounded-full flex items-center justify-center transition-all duration-400",
                            isActive
                              ? "bg-gradient-to-br from-primary to-blue-500 text-white scale-110"
                              : isCompleted
                                ? "bg-primary/20 text-primary"
                                : "bg-white text-gray-400 border border-gray-200"
                          )}
                          style={{
                            boxShadow: isActive
                              ? "0 4px 20px rgba(0, 224, 198, 0.5)"
                              : isCompleted
                                ? "0 2px 10px rgba(0, 224, 198, 0.2)"
                                : "none",
                          }}
                        >
                          {idx + 1}
                        </span>
                      </div>

                      {/* Step content card */}
                      <div
                        className={cn(
                          "rounded-2xl border bg-white px-5 transition-all duration-400",
                          isActive
                            ? "border-primary/40 shadow-lg shadow-primary/10 py-5"
                            : isCompleted
                              ? "border-primary/20 shadow-md py-4"
                              : "border-gray-200 py-4"
                        )}
                        style={{
                          transform: isActive ? "scale(1.02)" : "scale(1)",
                          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <p
                              className={cn(
                                "font-semibold leading-snug transition-colors duration-400",
                                isActive
                                  ? "text-gray-900"
                                  : isCompleted
                                    ? "text-gray-800"
                                    : "text-gray-500"
                              )}
                            >
                              {step.title}
                            </p>

                            {/* Description */}
                            {step.description && (
                              <p
                                className={cn(
                                  "mt-1 text-sm transition-all duration-400",
                                  isActive
                                    ? "text-gray-600"
                                    : isCompleted
                                      ? "text-gray-500"
                                      : "text-gray-400"
                                )}
                              >
                                {step.description}
                              </p>
                            )}

                            {/* Accordion details - automatic for active step */}
                            <div
                              className="overflow-hidden transition-all duration-500 ease-out"
                              style={{
                                maxHeight: isActive && step.details ? "200px" : "0px",
                                opacity: isActive ? 1 : 0,
                                marginTop: isActive && step.details ? "12px" : "0px",
                              }}
                            >
                              <p className="text-sm text-gray-600 leading-relaxed border-l-2 border-primary/30 pl-3">
                                {step.details}
                              </p>
                            </div>
                          </div>

                          {/* Icon */}
                          <span
                            className={cn(
                              "shrink-0 mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-400",
                              isActive
                                ? "border-primary/30 bg-primary/10 text-primary scale-110"
                                : isCompleted
                                  ? "border-primary/20 bg-primary/5 text-primary/70"
                                  : "border-gray-200 text-gray-300"
                            )}
                          >
                            <StepIcon className="h-5 w-5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: visual card */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow-xl overflow-hidden">
                <div className="absolute -top-14 -right-14 h-56 w-56 rounded-full bg-primary/15 blur-2xl" />
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-primary tracking-wide">
                      Étape {activeIndex + 1}/{steps.length}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-gray-900 font-[var(--font-brand)]">
                      {steps[activeIndex]?.title}
                    </h3>
                  </div>
                  <a
                    href="/solutions"
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Progress bar */}
                <div className="mt-6 flex items-center gap-2">
                  {steps.map((_, idx) => {
                    const stepProg = getStepProgress(idx);
                    const isStepCompleted = idx < activeIndex;
                    const isStepActive = idx === activeIndex;

                    return (
                      <div
                        key={idx}
                        className="h-1.5 flex-1 rounded-full bg-gray-200 overflow-hidden"
                      >
                        <div
                          className="h-full rounded-full transition-all duration-400 ease-out"
                          style={{
                            width: isStepCompleted
                              ? "100%"
                              : isStepActive
                                ? `${stepProg * 100}%`
                                : "0%",
                            background: "linear-gradient(90deg, #00e0c6, #3b82f6)",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Feature cards */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <MiniCard
                    title="Analyse approfondie"
                    subtitle="Audit & diagnostic"
                    tone="from-primary to-blue-500"
                    icon={<Search className="h-5 w-5" />}
                    isActive={activeIndex >= 0}
                  />
                  <MiniCard
                    title="Architecture sur mesure"
                    subtitle="Design & conception"
                    tone="from-blue-500 to-indigo-500"
                    icon={<Settings className="h-5 w-5" />}
                    isActive={activeIndex >= 1}
                  />
                  <MiniCard
                    title="Intégration complète"
                    subtitle="Déploiement & tests"
                    tone="from-cyan-500 to-sky-500"
                    icon={<Database className="h-5 w-5" />}
                    isActive={activeIndex >= 2}
                  />
                  <MiniCard
                    title="Support continu"
                    subtitle="Formation & maintenance"
                    tone="from-sky-500 to-blue-500"
                    icon={<Shield className="h-5 w-5" />}
                    isActive={activeIndex >= 3}
                  />
                </div>

                <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                  {steps[activeIndex]?.description ||
                    "Scrollez pour découvrir chaque étape du processus."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator when locked */}
      {isLocked && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 animate-pulse">
          <div className="px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur text-white text-sm font-medium">
            Scrollez pour continuer
          </div>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-gray-400 animate-bounce" />
          </div>
        </div>
      )}
    </section>
  );
}

function MiniCard({
  title,
  subtitle,
  tone,
  icon,
  isActive,
}: {
  title: string;
  subtitle: string;
  tone: string;
  icon?: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white/70 backdrop-blur p-4 transition-all duration-400",
        isActive
          ? "border-primary/30 shadow-md"
          : "border-gray-200 opacity-50"
      )}
      style={{
        transform: isActive ? "scale(1.02)" : "scale(1)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className={cn(
          "h-10 w-10 rounded-xl shadow-lg mb-3 flex items-center justify-center transition-all duration-400",
          isActive ? `bg-gradient-to-br ${tone} text-white` : "bg-gray-200 text-gray-400"
        )}
      >
        {icon}
      </div>
      <p
        className={cn(
          "font-semibold transition-colors duration-300",
          isActive ? "text-gray-900" : "text-gray-400"
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          "text-sm transition-colors duration-300",
          isActive ? "text-gray-500" : "text-gray-300"
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
