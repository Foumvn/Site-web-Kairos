"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
  href?: string;
}

export function Logo({ variant = "light", showTagline = false, className, href = "/" }: LogoProps) {
  const isDark = variant === "dark";
  const [imageError, setImageError] = useState(false);

  // If image fails to load, use fallback
  if (imageError) {
    return <LogoFallback variant={variant} showTagline={showTagline} className={className} href={href} />;
  }

  return (
    <Link href={href} className={cn("flex items-center group", className)}>
      <div className="relative flex-shrink-0">
        {/* Logo Image - Contains globe + text + tagline */}
        <div
          className={cn(
            "relative transition-all duration-300 group-hover:scale-105",
            // Don't invert for dark mode since logo should be visible on both
          )}
        >
          <Image
            src="/logo.png"
            alt="Kairos - Relever les défis, c'est notre valeur !"
            width={240}
            height={96}
            className="h-14 w-auto sm:h-16 md:h-20 lg:h-24 object-contain"
            priority
            onError={() => setImageError(true)}
            unoptimized
          />
        </div>
      </div>
    </Link>
  );
}

// Fallback component if logo image doesn't exist yet
export function LogoFallback({ variant = "light", showTagline = false, className, href = "/" }: LogoProps) {
  const isDark = variant === "dark";
  
  return (
    <Link href={href} className={cn("flex items-center gap-2 sm:gap-3 group", className)}>
      <div
        className={cn(
          "w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl shadow-lg transition-all group-hover:shadow-xl flex-shrink-0",
          isDark
            ? "bg-gradient-to-br from-sky-500 to-indigo-500 shadow-sky-500/20 group-hover:shadow-sky-500/40"
            : "bg-gradient-to-br from-cyan-500 to-blue-500 shadow-cyan-500/20 group-hover:shadow-cyan-500/40",
        )}
      >
        K
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "text-xl sm:text-2xl md:text-3xl font-bold tracking-tight font-[var(--font-brand)]",
            isDark ? "text-white" : "text-gray-900 dark:text-white",
          )}
        >
          KAIROS
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-xs font-normal leading-tight hidden sm:block mt-0.5",
              isDark ? "text-slate-400" : "text-gray-600 dark:text-gray-400",
            )}
          >
            Relever les défis, c'est notre valeur !
          </span>
        )}
      </div>
    </Link>
  );
}

