"use client";

import classes from "./NavLinks.module.css";
import Link from "next/link";
import {
  UserGroupIcon,
  HomeIcon,
  UserIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Players", href: "/players", icon: UserIcon },
  { name: "Teams", href: "/teams", icon: UserGroupIcon },
  { name: "News", href: "/news", icon: NewspaperIcon },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className={classes.navLinks}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${classes.link} ${
                pathname === link.href ? `${classes.active}` : null
              }`}
            >
              <Icon className={classes.icon} />
              <span>{link.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
