import { Settings, User, Bell, Shield, Palette, Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const settingsSections = [
  {
    id: "profile",
    title: "Profile Settings",
    icon: User,
    items: [
      { label: "Display Name", type: "input", placeholder: "Your Name" },
      { label: "Email", type: "input", placeholder: "your@email.com" },
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: Bell,
    items: [
      { label: "Email Notifications", type: "switch", enabled: true },
      { label: "Push Notifications", type: "switch", enabled: false },
      { label: "News Alerts", type: "switch", enabled: true },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    icon: Shield,
    items: [
      { label: "Two-Factor Authentication", type: "switch", enabled: false },
      { label: "Activity Logging", type: "switch", enabled: true },
    ],
  },
];

export const SettingsView = () => {
  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <Settings className="w-8 h-8 text-primary" />
          Settings
        </h2>
        <p className="text-muted-foreground mt-1">Manage your account preferences</p>
      </div>

      {/* Settings Sections */}
      <div className="grid gap-6">
        {settingsSections.map((section, sectionIndex) => (
          <div
            key={section.id}
            className="glass-card p-6 animate-fade-up"
            style={{ animationDelay: `${sectionIndex * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <section.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
            </div>

            <div className="space-y-4">
              {section.items.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                >
                  <span className="text-foreground">{item.label}</span>
                  {item.type === "switch" ? (
                    <Switch defaultChecked={item.enabled} />
                  ) : (
                    <Input
                      placeholder={item.placeholder}
                      className="w-64 input-glass"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Appearance */}
        <div className="glass-card p-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Appearance</h3>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-foreground">Theme</span>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-lg bg-slate-900 ring-2 ring-primary ring-offset-2 ring-offset-background" />
              <button className="w-8 h-8 rounded-lg bg-slate-100 ring-1 ring-border" />
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="glass-card p-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Language & Region</h3>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-foreground">Language</span>
            <select className="bg-muted/50 border border-glass-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};
