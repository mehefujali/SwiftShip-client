import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Create Parcel", href: "/register" },
        { label: "Track Parcel", href: "/track" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="mx-auto container space-y-8 px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img
                className="h-10 w-10"
                src={logo}
                alt="Swift Ship Logo"
              />
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Swift Ship
                </h2>
                <p className="mt-1 max-w-xs text-muted-foreground text-sm">
                  Fast, reliable, and secure parcel delivery you can trust.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="font-medium text-foreground">{section.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground transition hover:opacity-75"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Swift Ship. All rights reserved.
        </p>
      </div>
    </footer>
  );
}