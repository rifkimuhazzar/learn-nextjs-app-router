import Image from "next/image";
import Link from "next/link";

import logo from "$assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logo}
            alt="Logo"
            loading="eager"
            width={240}
            height={240}
          />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meal</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
