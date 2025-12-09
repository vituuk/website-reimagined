import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardView } from "@/components/DashboardView";
import { NewsView } from "@/components/NewsView";
import { MediaView } from "@/components/MediaView";
import { SettingsView } from "@/components/SettingsView";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardView onNavigate={setActiveTab} />;
      case "news":
        return <NewsView />;
      case "media":
        return <MediaView />;
      case "settings":
        return <SettingsView />;
      default:
        return <DashboardView onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen mesh-gradient">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
