import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of AI-Powered Document Management",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the way organizations handle, analyze, and extract insights from their documents.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    },
    {
      title: "5 Ways to Improve Document Security in 2024",
      excerpt:
        "Learn about the latest security best practices and how to protect your sensitive documents from emerging threats.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    },
    {
      title: "Streamlining Workflows with Automation",
      excerpt:
        "Explore how workflow automation can save time, reduce errors, and improve productivity across your organization.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    },
    {
      title: "Case Study: How TechCorp Increased Efficiency by 300%",
      excerpt:
        "A detailed look at how one company transformed their document management processes and achieved remarkable results.",
      author: "David Park",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
    {
      title: "Understanding RAG: The Future of AI Knowledge Bases",
      excerpt:
        "Deep dive into Retrieval-Augmented Generation and how it's changing the landscape of AI-powered knowledge management.",
      author: "Sarah Johnson",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    },
    {
      title: "Best Practices for Document Version Control",
      excerpt:
        "Master the art of version control to ensure your team always works with the latest, most accurate documents.",
      author: "Michael Chen",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    },
  ];

  const categories = ["All", "AI & Technology", "Security", "Productivity", "Case Studies", "Best Practices"];

  return (
    <div className="min-h-screen bg-white dark:bg-[#18181b] text-gray-900 dark:text-gray-100">
      <SiteHeader variant="light" />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white dark:from-[#1a1f35] dark:to-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-brand)] text-gray-900 dark:text-white">
                Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Resources</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Stay updated with the latest insights, tips, and best practices in document management, AI, and business
                productivity.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white dark:bg-[#18181b] border-b border-gray-200 dark:border-gray-800 sticky top-20 z-10 backdrop-blur-sm bg-white/80 dark:bg-[#18181b]/80">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    category === "All"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0"
                      : "hover:bg-blue-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white dark:bg-[#18181b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#202022] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-[var(--font-brand)] text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:gap-2 transition-all"
                      >
                        Read more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-[var(--font-brand)]">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Subscribe to our newsletter and never miss an article, update, or industry insight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full bg-white/90 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter variant="light" />
    </div>
  );
}

