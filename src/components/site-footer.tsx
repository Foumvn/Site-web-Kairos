"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { useTranslation } from "@/lib/i18n";

export function SiteFooter({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { t } = useTranslation();
  const isDark = variant === "dark";

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
              {t("footer.description")}
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4
                className={cn(
                  "font-semibold text-sm uppercase tracking-wider mb-2",
                  isDark ? "text-slate-200" : "text-gray-900 dark:text-white",
                )}
              >
                {t("footer.newsletter")}
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
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
                    "bg-primary hover:opacity-90 text-white",
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
              {t("footer.products")}
            </h4>
            <ul className="space-y-3">
              {[
                { title: "Kairos-KM", href: "#" },
                { title: "Kairos-Web Scan", href: "#" },
                { title: "Document Factory", href: "#" },
                { title: "Assistant IA Lucas", href: "#" },
                { title: t("footer.allProducts"), href: "#" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm hover:underline transition-colors",
                      isDark
                        ? "text-slate-400 hover:text-primary"
                        : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary",
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
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {[
                { title: t("footer.aboutUs"), href: "/about" },
                { title: t("header.services"), href: "/services" },
                { title: t("footer.caseStudies"), href: "#" },
                { title: t("footer.careers"), href: "#" },
                { title: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm hover:underline transition-colors",
                      isDark
                        ? "text-slate-400 hover:text-primary"
                        : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary",
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
              {t("footer.resources")}
            </h4>
            <ul className="space-y-3">
              {[
                { title: "Blog", href: "/blog" },
                { title: "Documentation", href: "#" },
                { title: t("footer.webinars"), href: "#" },
                { title: "Support", href: "#" },
                { title: t("footer.community"), href: "#" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm hover:underline transition-colors",
                      isDark
                        ? "text-slate-400 hover:text-primary"
                        : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary",
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
              className={cn("h-5 w-5 shrink-0 mt-0.5", "text-primary")}
            />
            <div>
              <p className={cn("text-sm font-medium mb-1", isDark ? "text-slate-200" : "text-gray-900 dark:text-white")}>
                {t("footer.address")}
              </p>
              <p className={cn("text-sm", isDark ? "text-slate-400" : "text-gray-600 dark:text-gray-400")}>
                100 Smith Street<br />
                Collingwood VIC 3066 AU
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className={cn("h-5 w-5 shrink-0 mt-0.5", "text-primary")} />
            <div>
              <p className={cn("text-sm font-medium mb-1", isDark ? "text-slate-200" : "text-gray-900 dark:text-white")}>
                {t("footer.phone")}
              </p>
              <a
                href="tel:+1555000000"
                className={cn(
                  "text-sm hover:underline transition-colors",
                  isDark
                    ? "text-slate-400 hover:text-primary"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary",
                )}
              >
                +1 (555) 000-0000
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className={cn("h-5 w-5 shrink-0 mt-0.5", "text-primary")} />
            <div>
              <p className={cn("text-sm font-medium mb-1", isDark ? "text-slate-200" : "text-gray-900 dark:text-white")}>
                {t("footer.email")}
              </p>
              <a
                href="mailto:hello@kairos.ai"
                className={cn(
                  "text-sm hover:underline transition-colors",
                  isDark
                    ? "text-slate-400 hover:text-primary"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary",
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
            © {new Date().getFullYear()} Kairos Solutions. {t("footer.allRightsReserved")}
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
                    ? "bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-primary"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary",
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
