"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoName}>Clínica Serena</span>
          <span className={styles.logoTagline}>Medicina Integral</span>
        </Link>

        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Inicio</Link>
          <Link href="/nosotros" className={styles.navLink}>Nosotros</Link>
          <Link href="/servicios" className={styles.navLink}>Servicios</Link>
          <Link href="/contacto" className={styles.navCta}>Turno Online</Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link href="/nosotros" className={styles.navLink} onClick={() => setMenuOpen(false)}>Nosotros</Link>
          <Link href="/servicios" className={styles.navLink} onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link href="/contacto" className={styles.navCta} onClick={() => setMenuOpen(false)}>Turno Online</Link>
        </div>
      )}
    </>
  );
}