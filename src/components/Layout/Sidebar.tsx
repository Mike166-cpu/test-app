import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { useAuth } from '@/contexts/AuthContext';
import {
  Users,
  GraduationCap,
  LayoutDashboard,
  Menu,
  LogOut,
  Moon,
  Sun,
  Settings,
  BarChart,
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { pathname } = useLocation();
  const { setTheme, theme } = useTheme();
  const { logout } = useAuth();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Onboarding', path: '/onboarding' },
    { icon: GraduationCap, label: 'Training', path: '/training' },
    { icon: BarChart, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div
      className={`sidebar-transition relative min-h-screen bg-card ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-4 z-50"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Menu className="h-4 w-4" />
      </Button>

      <div className="flex h-full flex-col justify-between p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-center py-4">
            {!isCollapsed && (
              <h1 className="text-xl font-bold text-primary">HR Dashboard</h1>
            )}
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-transition flex items-center gap-4 rounded-lg p-2 ${
                  pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2">Light Mode</span>}
              </>
            ) : (
              <>
                <Moon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2">Dark Mode</span>}
              </>
            )}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-destructive"
            onClick={logout}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;