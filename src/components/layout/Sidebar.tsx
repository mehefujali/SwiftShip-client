import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { Role } from "@/types";
import {
  Bell,
  Home,
  LogOut,
  Package,
  PackagePlus,
  Truck,
  Users,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.png";
import { ModeToggle } from "../ui/ModeToggoler";

const AdminSidebarItems = [
  { name: "Manage Users", path: "/dashboard/admin/manage-users", icon: Users },
  { name: "All Parcels", path: "/dashboard/admin/all-parcels", icon: Package },
];

const SenderSidebarItems = [
  {
    name: "Create Parcel",
    path: "/dashboard/sender/create-parcel",
    icon: PackagePlus,
  },
  { name: "My Parcels", path: "/dashboard/sender/my-parcels", icon: Package },
];

const ReceiverSidebarItems = [
  {
    name: "Incoming Parcels",
    path: "/dashboard/receiver/incoming",
    icon: Truck,
  },
];

export function Sidebar() {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let sidebarItems: any[] = [];
  let userRole = "Dashboard";

  if (user?.role === Role.ADMIN) {
    sidebarItems = AdminSidebarItems;
    userRole = "Admin";
  }
  if (user?.role === Role.SENDER) {
    sidebarItems = SenderSidebarItems;
    userRole = "Sender";
  }
  if (user?.role === Role.RECEIVER) {
    sidebarItems = ReceiverSidebarItems;
    userRole = "Receiver";
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const NavItem = ({
    to,
    icon: Icon,
    label,
  }: {
    to: string;
    icon: React.ElementType;
    label: string;
  }) => (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          isActive && "bg-muted text-primary"
        )
      }
    >
      <Icon className="h-4 w-4" />
      {label}
    </NavLink>
  );

  return (
    <div className="hidden border-r bg-card md:block">
      <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
        <div className="flex h-16 items-center border-b px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <span className="">Swift Ship</span>
          </NavLink>
          <div className="ml-auto flex items-center gap-2">
            <ModeToggle />
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="grid items-start px-4 text-sm font-medium">
            <div className="py-2">
              <h2 className="mb-2 px-3 text-lg font-semibold tracking-tight">
                {userRole}
              </h2>
              <div className="space-y-1">
                <NavItem to="/dashboard" icon={Home} label="Overview" />
                {sidebarItems.map((item) => (
                  <NavItem
                    key={item.path}
                    to={item.path}
                    icon={item.icon}
                    label={item.name}
                  />
                ))}
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start text-destructive hover:text-destructive"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}