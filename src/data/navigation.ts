export interface NavItem {
  label: string;
  path: string;
  cursor?: string;
}

export const navItems: NavItem[] = [
  { label: "INDEX", path: "/" },
  { label: "LAB", path: "/lab", cursor: "ENTER" },
  { label: "CONTACT", path: "/contact" },
];
