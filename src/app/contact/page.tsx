import { Mail, MapPin, Phone, Send } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 dark:bg-[#18181b] dark:text-gray-100 transition-colors duration-300">
      <SiteHeader variant="light" />

      <main className="relative pt-12 pb-24 overflow-hidden min-h-screen">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gray-200/50 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="flex flex-col justify-center h-full pt-8">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Get in Touch</span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 dark:text-white text-gray-900">
                Let’s build the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  future together.
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-lg">
                Have questions about our AI solutions or need a custom integration? Our team is ready to help you
                transform your business with Kairos.
              </p>

              <div className="space-y-8 mb-12">
                <InfoRow
                  icon={<Mail className="h-6 w-6 text-primary" />}
                  title="Chat to us"
                  subtitle="Our friendly team is here to help."
                >
                  <a className="text-primary font-medium hover:text-teal-300 transition-colors" href="mailto:hello@kairos.ai">
                    hello@kairos.ai
                  </a>
                </InfoRow>

                <InfoRow
                  icon={<MapPin className="h-6 w-6 text-primary" />}
                  title="Visit us"
                  subtitle="Come say hello at our office HQ."
                >
                  <span className="text-gray-700 dark:text-gray-300">
                    100 Smith Street
                    <br />
                    Collingwood VIC 3066 AU
                  </span>
                </InfoRow>

                <InfoRow
                  icon={<Phone className="h-6 w-6 text-primary" />}
                  title="Call us"
                  subtitle="Mon-Fri from 8am to 5pm."
                >
                  <a className="text-primary font-medium hover:text-teal-300 transition-colors" href="tel:+1555000000">
                    +1 (555) 000-0000
                  </a>
                </InfoRow>
              </div>

              <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg map-container relative group">
                <iframe
                  allowFullScreen
                  height="100%"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792000835!2d144.9805553153186!3d-37.80587797975373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642eaf0a70183%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1622617015096!5m2!1sen!2sus"
                  style={{ border: 0, width: "100%" }}
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl pointer-events-none transition-colors duration-300" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float" />
              <Card className="bg-white dark:bg-[#202022] rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-200 dark:border-gray-700 relative z-10">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Send us a message</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
                    You can reach us anytime via <span className="text-primary">hi@kairos.ai</span>
                  </p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Field label="First name">
                        <Input placeholder="Jane" />
                      </Field>
                      <Field label="Last name">
                        <Input placeholder="Doe" />
                      </Field>
                    </div>
                    <Field label="Email">
                      <Input placeholder="jane@company.com" type="email" />
                    </Field>
                    <Field label="Phone number">
                      <Input placeholder="+1 (555) 000-0000" type="tel" />
                    </Field>
                    <Field label="Message">
                      <Textarea placeholder="Tell us about your project..." rows={4} />
                    </Field>

                    <div className="flex items-center gap-2 mb-4">
                      <Checkbox id="privacy" />
                      <label htmlFor="privacy" className="text-sm text-gray-500 dark:text-gray-400">
                        I agree to the{" "}
                        <a className="underline hover:text-primary" href="#">
                          privacy policy
                        </a>
                        .
                      </label>
                    </div>

                    <Button className="w-full bg-primary hover:bg-teal-400 text-gray-900 font-bold py-6 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
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

function InfoRow({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#202022] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm group-hover:border-primary/50 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      {children}
    </div>
  );
}


