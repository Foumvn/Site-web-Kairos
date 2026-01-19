"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  BarChart3,
  ChevronDown,
  ClipboardList,
  FilePenLine,
  FileSearch,
  FolderKanban,
  GraduationCap,
  Handshake,
  HeartPulse,
  HelpCircle,
  Home,
  Mail,
  Menu,
  MonitorCheck,
  Newspaper,
  PenTool,
  Phone,
  Scan,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Logo, LogoFallback } from "@/components/logo";

type HeaderVariant = "dark" | "light";

type NavLink = { title: string; href: string };
type NavItem =
  | { type: "link"; title: string; href: string; icon?: React.ReactNode }
  | { type: "dropdown"; title: string; widthClass: string; sections: { title?: string; items: Array<{ title: string; description?: string; href: string; icon?: React.ReactNode }> }[] };

const products: NavItem = {
  type: "dropdown",
  title: "Products",
  widthClass: "w-[600px]",
  sections: [
    {
      title: "Our Solutions",
      items: [
        { title: "Kairos-KM", description: "Knowledge Management System", href: "#", icon: <FolderKanban className="h-5 w-5" /> },
        { title: "Kairos-Web Scan", description: "Intelligent Web Monitoring", href: "#", icon: <FileSearch className="h-5 w-5" /> },
        { title: "Kairos-Document Factory", description: "High-volume doc processing", href: "#", icon: <ClipboardList className="h-5 w-5" /> },
        { title: "Kairos-courrier", description: "Digital Mailroom Automation", href: "#", icon: <Mail className="h-5 w-5" /> },
        { title: "Optimum GRC", description: "Governance, Risk & Compliance", href: "#", icon: <Shield className="h-5 w-5" /> },
        { title: "WithIn", description: "Internal Collaboration Hub", href: "#", icon: <Users className="h-5 w-5" /> },
        { title: "K-Office Writer", description: "Secure Document Editor", href: "#", icon: <FilePenLine className="h-5 w-5" /> },
        { title: "K-Scanner", description: "Capture & Indexing", href: "#", icon: <Scan className="h-5 w-5" /> },
        { title: "K-Esign", description: "Electronic Signature", href: "#", icon: <PenTool className="h-5 w-5" /> },
        { title: "Heka", description: "Healthcare Solutions", href: "#", icon: <HeartPulse className="h-5 w-5" /> },
        { title: "Lucas", description: "AI Assistant", href: "#", icon: <Sparkles className="h-5 w-5" /> },
      ],
    },
  ],
};

const services: NavItem = {
  type: "dropdown",
  title: "Services",
  widthClass: "w-[400px]",
  sections: [
    {
      items: [
        { title: "Custom Application Development", href: "/services/custom-application-development" },
        { title: "Application Support & Maintenance", href: "/services/application-support-maintenance" },
        { title: "Document Management", href: "/services/document-management" },
        { title: "Strategic Watch & Economic Intelligence", href: "/services/strategic-watch-economic-intelligence" },
        { title: "Training", href: "/services/training", icon: <GraduationCap className="h-4 w-4" /> },
      ],
    },
  ],
};

const resources: NavItem = {
  type: "dropdown",
  title: "Resources",
  widthClass: "w-[250px]",
  sections: [
    {
      items: [
        { title: "Blog", href: "#", icon: <Newspaper className="h-4 w-4" /> },
        { title: "Case Studies", href: "#", icon: <MonitorCheck className="h-4 w-4" /> },
        { title: "Webinars", href: "#", icon: <Video className="h-4 w-4" /> },
        { title: "Masterclass", href: "#", icon: <GraduationCap className="h-4 w-4" /> },
        { title: "Videos", href: "#", icon: <Video className="h-4 w-4" /> },
      ],
    },
  ],
};

const company: NavItem = {
  type: "dropdown",
  title: "Company",
  widthClass: "w-[350px]",
  sections: [
    {
      items: [
        { title: "About Us", href: "#", icon: <Home className="h-4 w-4" /> },
        { title: "What's New?", href: "#", icon: <Sparkles className="h-4 w-4" /> },
        { title: "Our Partners / Become a Distributor", href: "#", icon: <Handshake className="h-4 w-4" /> },
        { title: "Client References", href: "#", icon: <BarChart3 className="h-4 w-4" /> },
        { title: "Recruitment", href: "#", icon: <Users className="h-4 w-4" /> },
        { title: "Contact", href: "/contact", icon: <Phone className="h-4 w-4" /> },
      ],
    },
  ],
};

const desktopNav: NavItem[] = [
  products,
  services,
  resources,
  company,
  { type: "link", title: "Kairos Community", href: "#", icon: <Users className="h-4 w-4" /> },
];

const lightNavLinks: NavLink[] = [
  { title: "Platform", href: "#" },
  { title: "Solutions", href: "/solutions" },
  { title: "Partners", href: "#" },
  { title: "Case Studies", href: "#" },
  { title: "Resources", href: "#" },
];

function Dropdown({
  item,
  variant,
}: {
  item: Extract<NavItem, { type: "dropdown" }>;
  variant: HeaderVariant;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  const bg =
    variant === "dark"
      ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] border-slate-700/50 backdrop-blur-xl"
      : "bg-white/95 dark:bg-[#18181b]/95 border-gray-200 dark:border-gray-700 backdrop-blur-xl";
  const hover =
    variant === "dark"
      ? "hover:bg-gradient-to-r hover:from-slate-800/60 hover:to-slate-800/40 hover:border-sky-500/20"
      : "hover:bg-gradient-to-r hover:from-gray-100/80 hover:to-gray-50/60 dark:hover:from-white/10 dark:hover:to-white/5";
  const titleColor =
    variant === "dark" ? "text-slate-300 hover:text-white" : "text-gray-600 dark:text-gray-300 hover:text-primary";

  return (
    <div
      className="group h-full flex items-center relative px-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className={cn("flex items-center gap-1.5 text-sm font-medium transition-all duration-300", titleColor)} type="button">
        {item.title}
        <ChevronDown className={cn(
          "h-4 w-4 opacity-70 transition-all duration-300",
          isHovered && "rotate-180 opacity-100"
        )} />
      </button>

      {/* Decorative line on hover */}
      <div className={cn(
        "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 transition-all duration-300",
        variant === "dark" ? "bg-gradient-to-r from-transparent via-sky-500 to-transparent" : "bg-gradient-to-r from-transparent via-primary to-transparent",
        isHovered && "w-full"
      )} />

      <div
        className={cn(
          "absolute top-[calc(100%+8px)] left-[-100px] opacity-0 invisible translate-y-4 scale-95",
          "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100",
          "transition-all duration-300 ease-out rounded-2xl border p-6 shadow-2xl",
          item.widthClass,
          bg,
          variant === "dark" && "shadow-sky-500/5",
        )}
        style={{
          boxShadow: variant === "dark"
            ? "0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(148, 163, 184, 0.1), 0 0 30px -5px rgba(14, 165, 233, 0.1)"
            : "0 20px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)"
        }}
      >
        {/* Glow effect */}
        {variant === "dark" && (
          <div className="absolute -inset-px bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        )}

        <div className={cn("grid gap-x-8 gap-y-1", item.widthClass === "w-[600px]" ? "grid-cols-2" : "grid-cols-1")}>
          {item.sections.map((section, idx) => (
            <React.Fragment key={idx}>
              {section.title ? (
                <div className={cn(
                  "col-span-full pb-3 mb-3 border-b flex items-center gap-2",
                  variant === "dark" ? "border-slate-800/50" : "border-gray-200 dark:border-gray-800"
                )}>
                  <div className={cn(
                    "h-1 w-1 rounded-full",
                    variant === "dark" ? "bg-sky-500" : "bg-primary"
                  )} />
                  <span
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest",
                      variant === "dark" ? "text-sky-400" : "text-primary",
                    )}
                  >
                    {section.title}
                  </span>
                </div>
              ) : null}
              {section.items.map((entry, entryIdx) => (
                <Link
                  key={entry.title}
                  href={entry.href}
                  className={cn(
                    "group/item flex items-start gap-3 rounded-xl p-3 transition-all duration-200 border border-transparent",
                    hover,
                    variant === "dark" ? "text-slate-200" : "text-gray-900 dark:text-gray-100",
                  )}
                  style={{
                    animationDelay: `${entryIdx * 30}ms`,
                  }}
                >
                  {entry.icon ? (
                    <span className={cn(
                      "mt-0.5 shrink-0 transition-all duration-300 group-hover/item:scale-110",
                      variant === "dark" ? "text-sky-500 group-hover/item:text-sky-400" : "text-primary group-hover/item:text-primary/80"
                    )}>
                      {entry.icon}
                    </span>
                  ) : (
                    <span className={cn(
                      "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300",
                      variant === "dark" ? "bg-sky-500/40 group-hover/item:bg-sky-400 group-hover/item:scale-150" : "bg-primary/40 group-hover/item:bg-primary"
                    )} />
                  )}
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block text-sm font-semibold transition-colors duration-200",
                        variant === "dark" ? "text-white group-hover/item:text-sky-300" : "group-hover/item:text-primary",
                      )}
                    >
                      {entry.title}
                    </span>
                    {entry.description ? (
                      <span className={cn(
                        "block text-xs mt-0.5 transition-colors duration-200",
                        variant === "dark" ? "text-slate-400 group-hover/item:text-slate-300" : "text-gray-500 dark:text-gray-400 group-hover/item:text-gray-600 dark:group-hover/item:text-gray-300"
                      )}>
                        {entry.description}
                      </span>
                    ) : null}
                  </span>

                  {/* Hover arrow indicator */}
                  <span className={cn(
                    "opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0",
                    variant === "dark" ? "text-sky-500" : "text-primary"
                  )}>
                    →
                  </span>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({ item, variant }: { item: NavItem; variant: HeaderVariant }) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (item.type === "link") {
    return (
      <Link
        href={item.href}
        className={cn(
          "group flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-xl transition-all duration-200 border border-transparent",
          variant === "dark"
            ? "text-slate-200 hover:bg-slate-800/50 hover:border-sky-500/20 hover:text-white"
            : "text-gray-900 hover:bg-gray-100 hover:border-primary/20"
        )}
      >
        {item.icon && (
          <span className={cn(
            "transition-all duration-300 group-hover:scale-110",
            variant === "dark" ? "text-sky-500 group-hover:text-sky-400" : "text-primary"
          )}>
            {item.icon}
          </span>
        )}
        <span className="flex-1">{item.title}</span>
        <span className={cn(
          "opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0",
          variant === "dark" ? "text-sky-500" : "text-primary"
        )}>
          →
        </span>
      </Link>
    );
  }

  return (
    <div className="py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group flex w-full items-center justify-between text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300 border",
          variant === "dark"
            ? "text-slate-200 hover:bg-slate-800/50 border-transparent hover:border-sky-500/20"
            : "text-gray-900 hover:bg-gray-100 border-transparent hover:border-primary/20",
          isOpen && (variant === "dark" ? "bg-slate-800/50 text-sky-400 border-sky-500/20" : "bg-gray-100 text-primary border-primary/20")
        )}
      >
        <span className="flex items-center gap-3">
          <div className={cn(
            "h-1.5 w-1.5 rounded-full transition-all duration-300",
            variant === "dark"
              ? isOpen ? "bg-sky-500 scale-150" : "bg-slate-600"
              : isOpen ? "bg-primary scale-150" : "bg-gray-400"
          )} />
          {item.title}
        </span>
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-xs font-medium transition-all duration-300",
            variant === "dark" ? "text-slate-500" : "text-gray-500",
            isOpen && "opacity-0"
          )}>
            {item.sections.reduce((acc, section) => acc + section.items.length, 0)}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-all duration-300",
              isOpen && "rotate-180",
              variant === "dark"
                ? isOpen ? "text-sky-400" : "text-slate-400"
                : isOpen ? "text-primary" : "text-gray-400"
            )}
          />
        </div>
      </button>

      {/* Animated dropdown content */}
      <div className={cn(
        "grid transition-all duration-300 ease-out overflow-hidden",
        isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
      )}>
        <div className="overflow-hidden">
          <div className={cn(
            "pl-6 space-y-1 border-l-2 ml-4 py-2",
            variant === "dark" ? "border-slate-800/50" : "border-gray-200"
          )}>
            {item.sections.map((section, idx) => (
              <div
                key={idx}
                className="space-y-1"
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out ${idx * 50}ms both` : 'none'
                }}
              >
                {section.title && (
                  <div className={cn(
                    "text-xs font-bold uppercase tracking-widest mb-2 mt-3 flex items-center gap-2",
                    variant === "dark" ? "text-slate-500" : "text-gray-500"
                  )}>
                    <div className={cn(
                      "h-px flex-1",
                      variant === "dark" ? "bg-slate-800" : "bg-gray-200"
                    )} />
                    <span>{section.title}</span>
                    <div className={cn(
                      "h-px flex-1",
                      variant === "dark" ? "bg-slate-800" : "bg-gray-200"
                    )} />
                  </div>
                )}
                {section.items.map((subItem, subIdx) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className={cn(
                      "group/sub flex items-center gap-3 text-sm py-2.5 px-3 rounded-lg transition-all duration-200 border border-transparent",
                      variant === "dark"
                        ? "text-slate-400 hover:text-white hover:bg-slate-800/50 hover:border-sky-500/20"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50 hover:border-primary/20"
                    )}
                    style={{
                      animationDelay: `${(idx * 50) + (subIdx * 30)}ms`
                    }}
                  >
                    {subItem.icon ? (
                      <span className={cn(
                        "shrink-0 transition-all duration-300 group-hover/sub:scale-110",
                        variant === "dark"
                          ? "text-sky-500/70 group-hover/sub:text-sky-400"
                          : "text-primary/70 group-hover/sub:text-primary"
                      )}>
                        {subItem.icon}
                      </span>
                    ) : (
                      <span className={cn(
                        "h-1 w-1 rounded-full shrink-0 transition-all duration-300 group-hover/sub:scale-150",
                        variant === "dark"
                          ? "bg-sky-500/40 group-hover/sub:bg-sky-400"
                          : "bg-primary/40 group-hover/sub:bg-primary"
                      )} />
                    )}
                    <span className="flex-1 min-w-0">
                      <span className="block font-medium truncate">{subItem.title}</span>
                      {subItem.description && (
                        <span className={cn(
                          "block text-xs mt-0.5 truncate",
                          variant === "dark" ? "text-slate-500" : "text-gray-500"
                        )}>
                          {subItem.description}
                        </span>
                      )}
                    </span>
                    <span className={cn(
                      "opacity-0 -translate-x-2 transition-all duration-200 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 text-xs",
                      variant === "dark" ? "text-sky-500" : "text-primary"
                    )}>
                      →
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({ variant = "dark" }: { variant?: HeaderVariant }) {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkVariant = variant === "dark";

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300",
        isDarkVariant
          ? scrolled
            ? "bg-[#020617]/95 border-slate-800/80 shadow-lg shadow-black/20"
            : "bg-[#020617]/80 border-slate-800/50"
          : scrolled
            ? "bg-white/95 dark:bg-[#18181b]/95 border-gray-200 dark:border-gray-800 shadow-lg"
            : "bg-white/80 dark:bg-[#18181b]/80 border-gray-200/50 dark:border-gray-800/50",
      )}
    >
      <div className={cn("mx-auto flex h-20 items-center justify-between px-6 transition-all duration-300", isDarkVariant ? "max-w-[1440px]" : "max-w-7xl")}>
        <Logo variant={variant} className="h-full" />

        {/* Desktop */}
        <nav className={cn("hidden items-center h-full", isDarkVariant ? "xl:flex gap-1" : "md:flex gap-8")}>
          {isDarkVariant ? (
            <>
              {desktopNav.map((item) =>
                item.type === "dropdown" ? (
                  <Dropdown key={item.title} item={item} variant={variant} />
                ) : (
                  <div key={item.title} className="h-full flex items-center px-4">
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-slate-300 hover:text-sky-300 transition-colors flex items-center gap-2"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </div>
                ),
              )}
            </>
          ) : (
            <>
              {lightNavLinks.map((l) => (
                <Link key={l.title} href={l.href} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  {l.title}
                </Link>
              ))}
            </>
          )}
        </nav>

        <div className={cn("hidden items-center gap-4", isDarkVariant ? "xl:flex" : "md:flex")}>
          {isDarkVariant ? (
            <>
              <Button
                variant="secondary"
                className="rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700/50 text-slate-100 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-slate-700/20"
              >
                Sign In
              </Button>
              <Button className="group rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transition-all duration-300 hover:scale-105">
                Get a Demo
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                EN <ChevronDown className="h-4 w-4 opacity-70" />
              </button>
              <Button className="rounded bg-primary hover:bg-teal-400 text-gray-900 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40">
                Free Demo
              </Button>
            </>
          )}
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={cn(
                "inline-flex items-center justify-center rounded-lg p-2.5 transition-all duration-200",
                isDarkVariant
                  ? "xl:hidden text-slate-300 hover:text-white hover:bg-slate-800/50"
                  : "md:hidden text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className={cn(
              "w-[85vw] sm:w-[400px]",
              isDarkVariant
                ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-slate-100 border-slate-800/50 backdrop-blur-xl"
                : "bg-white dark:bg-[#18181b]"
            )}
          >
            <SheetHeader>
              <SheetTitle className={cn("flex items-center gap-3", isDarkVariant ? "text-white" : "text-gray-900 dark:text-white")}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold shadow-lg shadow-sky-500/30">
                  K
                </span>
                <span className="text-xl font-bold">Kairos</span>
              </SheetTitle>
            </SheetHeader>

            <div className="mt-8 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
              <div className="flex flex-col gap-1">
                {isDarkVariant ? (
                  <>
                    {desktopNav.map((item) => (
                      <MobileNavItem key={item.title} item={item} variant={variant} />
                    ))}
                  </>
                ) : (
                  <>
                    {lightNavLinks.map((l) => (
                      <Link
                        key={l.title}
                        href={l.href}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors py-2"
                      >
                        {l.title}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </div>

            <Separator className={cn("my-6", isDarkVariant ? "bg-slate-800/50" : "bg-gray-200 dark:bg-gray-800")} />

            {isDarkVariant ? (
              <div className="space-y-3">
                <Button className="w-full rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                  Sign In
                </Button>
                <Button className="w-full rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transition-all duration-300">
                  Get a Demo →
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Button className="w-full rounded bg-primary hover:bg-teal-400 text-gray-900 font-semibold">
                  Free Demo
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  Toggle theme
                </Button>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}


