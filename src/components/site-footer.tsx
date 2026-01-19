"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo, LogoFallback } from "@/components/logo";

export function SiteFooter({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  const isLight = variant === "light";

  return (
    <footer
      className={cn(
        "border-t",
        isDark
          ? "bg-[#020617] border-slate-800 text-slate-300"
          : "bg-white dark:bg-[#18181b] border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400",
      )}
    >
      <div className={cn("mx-auto px-6 py-16", isDark ? "max-w-[1440px]" : "max-w-7xl")}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant={variant} showTagline={true} className="mb-6" />
            <p
              className={cn(
                "mb-6 leading-relaxed max-w-sm",
                isDark ? "text-slate-400" : "text-gray-600 dark:text-gray-400",
              )}
            >
              Empowering organizations by implementing and creating comprehensive digital information systems 
              for enterprises and organizations.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4
                className={cn(
                  "font-semibold text-sm uppercase tracking-wider mb-2",
                  isDark ? "text-slate-200" : "text-gray-900 dark:text-white",
                )}
              >
                Newsletter
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className={cn(
                    "h-10",
                    isDark
                      ? "bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                      : "bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white",
                  )}
                />
                <Button
                  size="icon"
                  className={cn(
                    "h-10 w-10 shrink-0",
                    isDark
                      ? "bg-sky-500 hover:bg-sky-600 text-white"
                      : "bg-cyan-500 hover:bg-cyan-600 text-white",
                  )}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4
              className={cn(
                "font-semibold text-sm uppercase tracking-wider mb-4",
                isDark ? "text-slate-200" : "text-gray-900 dark:text-white",
              )}
            >
              Products
            </h4>
            <ul className="space-y-3">
              {[
                { title: "Kairos-KM", href: "#" },
                { title: "Kairos-Web Scan", href: "#" },
                { title: "Document Factory", href: "#" },
                { title: "Lucas AI Assistant", href: "#" },
                { title: "All Products", href: "#" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm hover:underline transition-colors",
                      isDark
                        ? "text-slate-400 hover:text-sky-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400",
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4
              className={cn(
                "font-semibold text-sm uppercase tracking-wider mb-4",
                isDark ? "text-slate-200" : "text-gray-900 dark:text-white",
              )}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { title: "About Us", href: "/about" },
                { title: "Services", href: "/services" },
                { title: "Case Studies", href: "#" },
                { title: "Careers", href: "#" },
                { title: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm hover:underline transition-colors",
                      isDark
                        ? "text-slate-400 hover:text-sky-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400",
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4
              className={cn(
                "font-semibold text-sm uppercase tracking-wider mb-4",
                isDark ? "text-slate-200" : "text-gray-900 dark:text-white",
              )}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { title: "Blog", href: "/blog" },
                { title: "Documentation", href: "#" },
                { title: "Webinars", href: "#" },
                { title: "Support", href: "#" },
                { title: "Community", href: "#" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm hover:underline transition-colors",
                      isDark
                        ? "text-slate-400 hover:text-sky-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400",
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t",
            isDark ? "border-slate-800" : "border-gray-200 dark:border-gray-800",
          )}
        >
          <div className="flex items-start gap-3">
            <MapPin
              className={cn("h-5 w-5 shrink-0 mt-0.5", isDark ? "text-sky-400" : "text-cyan-500")}
            />
            <div>
              <p className={cn("text-sm font-medium mb-1", isDark ? "text-slate-200" : "text-gray-900 dark:text-white")}>
                Address
              </p>
              <p className={cn("text-sm", isDark ? "text-slate-400" : "text-gray-600 dark:text-gray-400")}>
                100 Smith Street<br />
                Collingwood VIC 3066 AU
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className={cn("h-5 w-5 shrink-0 mt-0.5", isDark ? "text-sky-400" : "text-cyan-500")} />
            <div>
              <p className={cn("text-sm font-medium mb-1", isDark ? "text-slate-200" : "text-gray-900 dark:text-white")}>
                Phone
              </p>
              <a
                href="tel:+1555000000"
                className={cn(
                  "text-sm hover:underline transition-colors",
                  isDark
                    ? "text-slate-400 hover:text-sky-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-600",
                )}
              >
                +1 (555) 000-0000
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className={cn("h-5 w-5 shrink-0 mt-0.5", isDark ? "text-sky-400" : "text-cyan-500")} />
            <div>
              <p className={cn("text-sm font-medium mb-1", isDark ? "text-slate-200" : "text-gray-900 dark:text-white")}>
                Email
              </p>
              <a
                href="mailto:hello@kairos.ai"
                className={cn(
                  "text-sm hover:underline transition-colors",
                  isDark
                    ? "text-slate-400 hover:text-sky-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-cyan-600",
                )}
              >
                hello@kairos.ai
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={cn(
            "flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t",
            isDark ? "border-slate-800" : "border-gray-200 dark:border-gray-800",
          )}
        >
          <p className={cn("text-sm", isDark ? "text-slate-500" : "text-gray-500 dark:text-gray-400")}>
            © {new Date().getFullYear()} Kairos Solutions. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Facebook, href: "#", label: "Facebook" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={cn(
                  "h-9 w-9 rounded-lg flex items-center justify-center transition-all hover:scale-110",
                  isDark
                    ? "bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-sky-400"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400",
                )}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
