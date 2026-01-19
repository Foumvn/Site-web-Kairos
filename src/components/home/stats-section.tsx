import { TrendingUp, Users, FileText, Shield } from "lucide-react";

export function StatsSection() {
  const stats = [
    { icon: Users, value: "2,000+", label: "Organizations Served", color: "from-blue-500 to-cyan-500" },
    { icon: FileText, value: "500+", label: "Systems Implemented", color: "from-cyan-500 to-sky-500" },
    { icon: Shield, value: "99.9%", label: "System Uptime", color: "from-sky-500 to-blue-500" },
    { icon: TrendingUp, value: "150+", label: "Countries Served", color: "from-blue-500 to-indigo-500" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30 dark:from-[#18181b] dark:to-[#1a1f35]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

