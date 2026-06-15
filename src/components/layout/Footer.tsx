import Link from "next/link";

const footerLinks = {
  Platform: [
    { href: "/blog", label: "Blog" },
    { href: "/blog?category=design", label: "Categories" },
    { href: "/author/sarah-chen", label: "Authors" },
    { href: "/search", label: "Search" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Press" },
  ],
  Legal: [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
    { href: "#", label: "Cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-bg-inverse text-text-inverse">
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-display text-2xl text-text-inverse">
              Lumina
            </Link>
            <p className="mt-4 text-sm text-text-tertiary leading-relaxed max-w-xs">
              Stories worth reading. Ideas worth sharing. The modern publishing platform for creators.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-inverse/80 hover:text-text-inverse transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-text-tertiary">
            © 2026 Lumina. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["X", "LinkedIn", "GitHub", "RSS"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-text-tertiary hover:text-text-inverse transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
