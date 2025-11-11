import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ui/ModeToggoler";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const renderAuthButtons = (isMobile = false) => {
    const commonClass = isMobile ? "w-full justify-start" : "";
    if (user) {
      return (
        <>
          <Button
            asChild
            variant={isMobile ? "ghost" : "default"}
            size="sm"
            className={commonClass}
          >
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          <Button
            onClick={handleLogout}
            variant="ghost"
            size="sm"
            className={`${commonClass} text-destructive hover:text-destructive`}
          >
            Logout
          </Button>
        </>
      );
    }
    return (
      <>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className={commonClass}
        >
          <Link to="/login">Sign In</Link>
        </Button>
        <Button asChild size="sm" className={commonClass}>
          <Link to="/register">Get Started</Link>
        </Button>
      </>
    );
  };

  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-48 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.href} className="w-full">
                      <NavigationMenuLink asChild>
                        <NavLink
                          to={link.href}
                          className={({ isActive }) =>
                            cn(
                              "block w-full px-3 py-2 text-sm",
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground"
                            )
                          }
                        >
                          {link.label}
                        </NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  <div className="w-full p-2 flex flex-col gap-2">
                    {renderAuthButtons(true)}
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img
                className="h-10 w-10"
                src={logo}
                alt="Swift Ship Logo"
              />
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Swift Ship
                </h2>
                <p className="-mt-1 text-xs text-muted-foreground flex items-center gap-1">
                  Fast & Secure
                  <IoShieldCheckmarkSharp className="text-green-500" />
                </p>
              </div>
            </Link>
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                          cn(
                            "px-3 py-1.5 text-sm font-medium",
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground hover:text-primary"
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-2 max-md:hidden">
          <ModeToggle />
          {renderAuthButtons(false)}
        </div>
      </div>
    </header>
  );
}