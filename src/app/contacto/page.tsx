import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contacto y Turnos | Clínica Serena",
  description: "Sacá tu turno online o comunicate con Clínica Serena.",
};

const specialties = [
  "Clínica Médica", "Cardiología", "Pediatría", "Dermatología",
  "Ginecología", "Psicología", "Neurología", "Odontología",
  "Laboratorio", "Otra especialidad",
];

export default function ContactoPage() {
  return (
    <div className={styles.page}>
      {/* INFO */}
      <div className={styles.contactInfo}>
        <span className={styles.eyebrow}>Estamos para vos</span>
        <h1 className={styles.title}>
          Tomá el<br />
          primer <em>paso</em>
        </h1>
        <p className={styles.subtitle}>
          Reservá tu turno online o comunicate con nosotros por cualquier consulta.
          Te respondemos a la brevedad.
        </p>

        <div className={styles.infoItems}>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📍</div>
            <div>
              <h4>Dirección</h4>
              <p>Av. Corrientes 1234, Piso 3<br />CABA, Argentina (B1234ABC)</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📞</div>
            <div>
              <h4>Teléfono</h4>
              <p>(011) 4321-5678<br />WhatsApp: (011) 1562-345678</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>✉️</div>
            <div>
              <h4>Email</h4>
              <p>turnos@clinicaserena.com.ar<br />info@clinicaserena.com.ar</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>🕐</div>
            <div>
              <h4>Horarios</h4>
              <p>Lunes a Viernes: 8:00 – 20:00<br />Sábados: 9:00 – 14:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className={styles.formCard}>
        <h2>Reservá tu turno</h2>
        <p>Completá el formulario y nos comunicamos en menos de 2 horas hábiles.</p>

        <form>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="apellido">Apellido</label>
              <input type="text" id="apellido" name="apellido" placeholder="Tu apellido" required />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="tu@email.com" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" id="telefono" name="telefono" placeholder="(011) 1234-5678" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="especialidad">Especialidad</label>
            <select id="especialidad" name="especialidad" required>
              <option value="">Seleccioná una especialidad</option>
              {specialties.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="obraSocial">Obra Social / Prepago</label>
            <input type="text" id="obraSocial" name="obraSocial" placeholder="Ej: OSDE 310, Swiss Medical, Particular..." />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mensaje">Motivo de consulta (opcional)</label>
            <textarea id="mensaje" name="mensaje" placeholder="Contanos brevemente por qué consultás..." />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Enviar solicitud de turno
          </button>
          <p className={styles.formNote}>
            Te contactaremos dentro de las 2 horas hábiles siguientes. Sin compromiso.
          </p>
        </form>
      </div>
    </div>
  );
}