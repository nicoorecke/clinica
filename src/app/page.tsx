import Link from "next/link";
import styles from "./page.module.css";

const features = [
  {
    icon: "🩺",
    title: "Atención Personalizada",
    desc: "Cada paciente es único. Nuestros profesionales dedicarán el tiempo necesario para entender tu situación.",
  },
  {
    icon: "🏥",
    title: "Tecnología de Vanguardia",
    desc: "Equipamiento moderno y diagnóstico preciso para ofrecerte el mejor tratamiento posible.",
  },
  {
    icon: "🤝",
    title: "Equipo Comprometido",
    desc: "Más de 20 especialistas con vocación de servicio y formación continua en sus áreas.",
  },
];

const services = [
  { emoji: "❤️", name: "Cardiología", desc: "Salud cardiovascular integral" },
  { emoji: "🧒", name: "Pediatría", desc: "Cuidado desde el primer día" },
  { emoji: "🌿", name: "Clínica Médica", desc: "Medicina general preventiva" },
  { emoji: "🧴", name: "Dermatología", desc: "Piel, cabello y uñas" },
  { emoji: "🔬", name: "Laboratorio", desc: "Resultados en línea 24hs" },
  { emoji: "🦷", name: "Odontología", desc: "Sonrisas saludables" },
  { emoji: "💆", name: "Psicología", desc: "Salud mental y bienestar" },
  { emoji: "🤱", name: "Ginecología", desc: "Salud de la mujer" },
];

const testimonials = [
  {
    quote: "La atención fue excelente desde el primer momento. El doctor se tomó todo el tiempo para explicarme el diagnóstico con claridad.",
    name: "María G.",
    role: "Paciente desde 2021",
    avatar: "👩",
  },
  {
    quote: "Encontré en Clínica Serena un lugar donde me siento escuchado. El equipo de pediatría es increíble con mis hijos.",
    name: "Carlos R.",
    role: "Paciente desde 2020",
    avatar: "👨",
  },
  {
    quote: "El sistema de turnos online es muy cómodo y el consultorio es moderno y limpio. Muy recomendable.",
    name: "Lucía M.",
    role: "Paciente desde 2022",
    avatar: "👩‍💼",
  },
];

const marqueeItems = [
  "Atención Integral", "Turnos Online", "Resultados Digitales",
  "20+ Especialidades", "Más de 15 Años de Experiencia",
  "Atención Integral", "Turnos Online", "Resultados Digitales",
  "20+ Especialidades", "Más de 15 Años de Experiencia",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />

        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Medicina que te escucha</span>
          <h1 className={styles.heroTitle}>
            Tu salud,<br />
            nuestro <em>compromiso</em><br />
            de siempre
          </h1>
          <p className={styles.heroDesc}>
            Clínica Serena ofrece atención médica integral con un enfoque humano
            y personalizado. Más de 20 especialidades para acompañarte en cada etapa.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contacto" className={styles.btnPrimary}>
              Sacar turno online
            </Link>
            <Link href="/nosotros" className={styles.btnSecondary}>
              Conocer más
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <div className={styles.heroIllustration}>
              <span className={styles.heroIllustrationIcon}>🏥</span>
            </div>
            <div className={styles.heroCardInfo}>
              <div className={styles.heroCardText}>
                <h3>Clínica Serena</h3>
                <p>Av. Corrientes 1234, CABA</p>
              </div>
              <span className={styles.heroBadge}>Abierto ahora</span>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <strong>15+</strong>
              <span>Años</span>
            </div>
            <div className={styles.heroStat}>
              <strong>20k+</strong>
              <span>Pacientes</span>
            </div>
            <div className={styles.heroStat}>
              <strong>20+</strong>
              <span>Especialistas</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeSection}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              <strong>◆</strong> {item}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Por qué elegirnos</span>
          <h2 className={styles.sectionTitle}>
            Medicina con <em>vocación</em>
          </h2>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className={styles.servicesPreview}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Especialidades</span>
          <h2 className={styles.sectionTitle}>
            Todo lo que <em>necesitás</em>
          </h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <div key={i} className={styles.serviceCard}>
              <span className={styles.serviceEmoji}>{s.emoji}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.sectionCta}>
          <Link href="/servicios" className={styles.btnPrimary}>
            Ver todos los servicios
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Testimonios</span>
          <h2 className={styles.sectionTitle}>
            Lo que dicen nuestros <em>pacientes</em>
          </h2>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialQuote}>"{t.quote}"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.avatar}</div>
                <div className={styles.authorInfo}>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaContent}>
          <h2>¿Listo para <em>cuidar tu salud</em>?</h2>
          <p>
            Reservá tu turno online en minutos. Atendemos en CABA de lunes a viernes
            de 8 a 20hs y sábados de 9 a 14hs.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/contacto" className={styles.btnLight}>
            Reservar turno
          </Link>
          <p className={styles.ctaPhone}>
            o llamanos al <Link href="tel:01143215678">(011) 4321-5678</Link>
          </p>
        </div>
      </div>
    </>
  );
}