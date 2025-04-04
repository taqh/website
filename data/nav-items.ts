interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];
