import { useState } from "react";
import { Users, Plus, MoreVertical, CheckCircle, AlertCircle, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface FacebookAccount {
  id: string;
  name: string;
  email: string;
  status: "connected" | "pending" | "error";
  addedAt: string;
}

const initialAccounts: FacebookAccount[] = [
  { id: "1", name: "Marketing Team", email: "marketing@company.com", status: "connected", addedAt: "2 days ago" },
  { id: "2", name: "Sales Account", email: "sales@company.com", status: "connected", addedAt: "1 week ago" },
  { id: "3", name: "Support Page", email: "support@company.com", status: "pending", addedAt: "3 days ago" },
];

export const MediaView = () => {
  const [accounts, setAccounts] = useState<FacebookAccount[]>(initialAccounts);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAccount, setNewAccount] = useState({ name: "", email: "" });

  const handleAddAccount = () => {
    if (!newAccount.name || !newAccount.email) {
      toast({
        title: "Please fill all fields",
        description: "Account name and email are required",
        variant: "destructive",
      });
      return;
    }

    const account: FacebookAccount = {
      id: Date.now().toString(),
      name: newAccount.name,
      email: newAccount.email,
      status: "pending",
      addedAt: "Just now",
    };

    setAccounts([...accounts, account]);
    setNewAccount({ name: "", email: "" });
    setShowAddForm(false);

    toast({
      title: "Account Added",
      description: `${account.name} has been added successfully`,
    });
  };

  const handleRemoveAccount = (id: string) => {
    setAccounts(accounts.filter((acc) => acc.id !== id));
    toast({
      title: "Account Removed",
      description: "The account has been removed from your list",
    });
  };

  const getStatusIcon = (status: FacebookAccount["status"]) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case "pending":
        return <AlertCircle className="w-4 h-4 text-amber-400" />;
      case "error":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
    }
  };

  const getStatusText = (status: FacebookAccount["status"]) => {
    switch (status) {
      case "connected":
        return "Connected";
      case "pending":
        return "Pending";
      case "error":
        return "Error";
    }
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            LTNG MEDIA
          </h2>
          <p className="text-muted-foreground mt-1">Facebook Account Management</p>
        </div>
        <Button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Facebook Account
        </Button>
      </div>

      {/* Add Account Form */}
      {showAddForm && (
        <div className="glass-card p-6 animate-fade-up">
          <h3 className="text-lg font-semibold text-foreground mb-4">Add New Facebook Account</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Account Name</label>
              <Input
                placeholder="e.g., Marketing Team"
                value={newAccount.name}
                onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
                className="input-glass"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <Input
                type="email"
                placeholder="e.g., marketing@company.com"
                value={newAccount.email}
                onChange={(e) => setNewAccount({ ...newAccount, email: e.target.value })}
                className="input-glass"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Button onClick={handleAddAccount}>
              Add Account
            </Button>
            <Button variant="outline" onClick={() => setShowAddForm(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Account Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-5 animate-fade-up" style={{ animationDelay: "100ms" }}>
          <p className="text-2xl font-bold text-foreground">{accounts.length}</p>
          <p className="text-sm text-muted-foreground">Total Accounts</p>
        </div>
        <div className="glass-card p-5 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <p className="text-2xl font-bold text-emerald-400">
            {accounts.filter((a) => a.status === "connected").length}
          </p>
          <p className="text-sm text-muted-foreground">Connected</p>
        </div>
        <div className="glass-card p-5 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <p className="text-2xl font-bold text-amber-400">
            {accounts.filter((a) => a.status === "pending").length}
          </p>
          <p className="text-sm text-muted-foreground">Pending</p>
        </div>
      </div>

      {/* Account List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Your Accounts</h3>
        {accounts.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-foreground font-medium">No accounts yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Add your first Facebook account to get started
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {accounts.map((account, index) => (
              <div
                key={account.id}
                className="glass-card p-5 hover-lift animate-fade-up"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {account.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{account.name}</h4>
                      <p className="text-sm text-muted-foreground">{account.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(account.status)}
                      <span className="text-sm text-muted-foreground">
                        {getStatusText(account.status)}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground hidden md:block">
                      Added {account.addedAt}
                    </span>
                    <button
                      onClick={() => handleRemoveAccount(account.id)}
                      className="p-2 hover:bg-destructive/10 rounded-lg transition-colors group"
                    >
                      <Trash2 className="w-4 h-4 text-muted-foreground group-hover:text-destructive" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
