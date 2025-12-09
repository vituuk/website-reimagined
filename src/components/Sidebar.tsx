import { LayoutDashboard, Newspaper, Users, Settings, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "news", label: "LTNG NEWS", icon: Newspaper },
  { id: "media", label: "LTNG MEDIA", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center animate-pulse-glow">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">LTNG</h1>
            <p className="text-xs text-muted-foreground">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              "sidebar-item w-full animate-slide-in",
              activeTab === item.id && "sidebar-item-active"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="glass-card p-4">
          <p className="text-sm font-medium text-foreground">Pro Version</p>
          <p className="text-xs text-muted-foreground mt-1">Unlock all features</p>
          <button className="mt-3 w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
};
