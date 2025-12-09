import { Newspaper, Users, Settings, TrendingUp, Activity, Globe } from "lucide-react";

interface DashboardViewProps {
  onNavigate: (tab: string) => void;
}

const features = [
  {
    id: "news",
    title: "LTNG NEWS",
    description: "News Radar - Track trending topics and personalized feeds",
    icon: Newspaper,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    stats: "12 new articles",
  },
  {
    id: "media",
    title: "LTNG MEDIA",
    description: "Facebook Account List - Manage your social accounts",
    icon: Users,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    stats: "3 accounts connected",
  },
  {
    id: "settings",
    title: "Settings",
    description: "Configure your preferences and account settings",
    icon: Settings,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    stats: "All synced",
  },
];

const statsCards = [
  { label: "Active Sessions", value: "1,234", icon: Activity, trend: "+12%" },
  { label: "News Sources", value: "48", icon: Globe, trend: "+5%" },
  { label: "Engagement", value: "89%", icon: TrendingUp, trend: "+8%" },
];

export const DashboardView = ({ onNavigate }: DashboardViewProps) => {
  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">Welcome back</h2>
        <p className="text-muted-foreground mt-1">
          Here's what's happening with your LTNG platform today.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statsCards.map((stat, index) => (
          <div
            key={stat.label}
            className="glass-card p-5 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-emerald-400">{stat.trend}</span>
            </div>
            <p className="text-2xl font-bold text-foreground mt-3">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Feature Cards */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Access</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => onNavigate(feature.id)}
              className="feature-card text-left group animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {feature.description}
              </p>
              <p className="text-xs text-primary mt-3 font-medium">{feature.stats}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Goals Section */}
      <div className="glass-card p-6 animate-fade-up" style={{ animationDelay: "600ms" }}>
        <h3 className="text-lg font-semibold text-foreground mb-4">This Week's Target</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">User friendly & easy to use</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">Professional (Simple & Useful)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">Lightweight performance</span>
          </div>
        </div>
      </div>
    </div>
  );
};
