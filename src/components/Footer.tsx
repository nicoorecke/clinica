import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <div className={styles.brandName}>Clínica Serena</div>
          <div className={styles.brandSub}>Medicina Integral</div>
          <p>
            Un espacio de salud pensado para vos. Médicos comprometidos con el bienestar
            integral de cada paciente, con un enfoque humano y cercano.
          </p>
        </div>

        <div className={styles.footerCol}>
          <h4>Navegación</h4>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Especialidades</h4>
          <ul>
            <li><Link href="/servicios">Clínica Médica</Link></li>
            <li><Link href="/servicios">Pediatría</Link></li>
            <li><Link href="/servicios">Cardiología</Link></li>
            <li><Link href="/servicios">Dermatología</Link></li>
            <li><Link href="/servicios">Ginecología</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Contacto</h4>
          <ul className={styles.footerContact}>
            <li>
              <span className={styles.icon}>📍</span>
              <span>Av. Corrientes 1234, Piso 3<br />CABA, Argentina</span>
            </li>
            <li>
              <span className={styles.icon}>📞</span>
              <span>(011) 4321-5678</span>
            </li>
            <li>
              <span className={styles.icon}>✉️</span>
              <span>turnos@clinicaserena.com.ar</span>
            </li>
            <li>
              <span className={styles.icon}>🕐</span>
              <span>Lun–Vie 8:00–20:00<br />Sáb 9:00–14:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerDivider} />

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Clínica Serena. Todos los derechos reservados.</p>
        <div className={styles.legal}>
          <Link href="#">Política de Privacidad</Link>
          <Link href="#">Términos de Uso</Link>
        </div>
      </div>
    </footer>
  );
}