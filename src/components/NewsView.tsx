import { Newspaper, TrendingUp, Clock, ExternalLink, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const newsItems = [
  {
    id: 1,
    title: "Breaking: Tech Industry Sees Major Shift in AI Development",
    source: "Tech Daily",
    time: "2 hours ago",
    trending: true,
    category: "Technology",
  },
  {
    id: 2,
    title: "Global Markets React to New Economic Policies",
    source: "Finance Weekly",
    time: "4 hours ago",
    trending: true,
    category: "Finance",
  },
  {
    id: 3,
    title: "Climate Summit Reaches Historic Agreement",
    source: "World News",
    time: "6 hours ago",
    trending: false,
    category: "Environment",
  },
  {
    id: 4,
    title: "Sports: Championship Finals Set for This Weekend",
    source: "Sports Hub",
    time: "8 hours ago",
    trending: false,
    category: "Sports",
  },
  {
    id: 5,
    title: "Healthcare Innovation: New Treatment Shows Promise",
    source: "Health Journal",
    time: "10 hours ago",
    trending: true,
    category: "Health",
  },
];

const trendingTopics = [
  { name: "AI Development", count: 234 },
  { name: "Climate Action", count: 189 },
  { name: "Market Trends", count: 156 },
  { name: "Tech Innovation", count: 142 },
];

export const NewsView = () => {
  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Newspaper className="w-8 h-8 text-primary" />
            LTNG NEWS
          </h2>
          <p className="text-muted-foreground mt-1">News Radar - Track what matters</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search news..."
            className="pl-10 input-glass"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* News Feed */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Latest Articles</h3>
          {newsItems.map((news, index) => (
            <article
              key={news.id}
              className="glass-card p-5 hover-lift cursor-pointer group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
                      {news.category}
                    </span>
                    {news.trending && (
                      <span className="flex items-center gap-1 text-xs text-emerald-400">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    )}
                  </div>
                  <h4 className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {news.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground">
                    <span>{news.source}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.time}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </article>
          ))}
        </div>

        {/* Trending Sidebar */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Trending Topics</h3>
          <div className="glass-card p-5 space-y-4">
            {trendingTopics.map((topic, index) => (
              <div
                key={topic.name}
                className="flex items-center justify-between py-2 border-b border-border/50 last:border-0 animate-fade-up"
                style={{ animationDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-muted-foreground">
                    #{index + 1}
                  </span>
                  <span className="font-medium text-foreground">{topic.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{topic.count}</span>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="glass-card p-5 animate-fade-up" style={{ animationDelay: "900ms" }}>
            <h4 className="font-medium text-foreground mb-3">News Radar Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sources Tracked</span>
                <span className="text-foreground font-medium">48</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Articles Today</span>
                <span className="text-foreground font-medium">127</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Topics Monitored</span>
                <span className="text-foreground font-medium">24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
