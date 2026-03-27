import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Servicios | Clínica Serena",
  description: "Conocé todas las especialidades y servicios que ofrece Clínica Serena.",
};

const services = [
  {
    emoji: "❤️",
    name: "Cardiología",
    desc: "Evaluación y tratamiento de enfermedades del corazón. Electrocardiogramas, Holter y ecocardiogramas en el mismo lugar.",
    tags: ["Electrocardiograma", "Ecocardiografía", "Holter", "Doppler"],
  },
  {
    emoji: "🧒",
    name: "Pediatría",
    desc: "Atención integral de niños y adolescentes. Controles de crecimiento, vacunación y seguimiento del desarrollo.",
    tags: ["Controles periódicos", "Vacunación", "Neonatología"],
  },
  {
    emoji: "🌿",
    name: "Clínica Médica",
    desc: "Medicina general preventiva y de diagnóstico. El primer escalón para evaluar y orientar tu salud.",
    tags: ["Chequeos anuales", "Medicina preventiva", "Certificados"],
  },
  {
    emoji: "🧴",
    name: "Dermatología",
    desc: "Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas. Dermatoscopia digital de lunares.",
    tags: ["Dermatoscopia", "Tratamientos estéticos", "Biopsias"],
  },
  {
    emoji: "🤱",
    name: "Ginecología",
    desc: "Salud femenina en todas las etapas. Controles ginecológicos, colposcopía y obstetricia.",
    tags: ["Papanicolau", "Colposcopía", "Ecografía transvaginal"],
  },
  {
    emoji: "💆",
    name: "Psicología",
    desc: "Apoyo psicológico para adultos, adolescentes y niños. Terapia individual, de pareja y familiar.",
    tags: ["Terapia individual", "Terapia de pareja", "Psicoterapia infantil"],
  },
  {
    emoji: "🔬",
    name: "Laboratorio",
    desc: "Análisis clínicos con resultados online en 24 horas. Extracción con y sin turno previo.",
    tags: ["Resultados online", "Extracción a domicilio", "Análisis especiales"],
  },
  {
    emoji: "🦷",
    name: "Odontología",
    desc: "Salud bucal integral: prevención, estética dental, ortodoncia y cirugía bucal.",
    tags: ["Limpieza dental", "Blanqueamiento", "Ortodoncia", "Implantes"],
  },
  {
    emoji: "🧠",
    name: "Neurología",
    desc: "Diagnóstico y tratamiento de enfermedades del sistema nervioso. EEG y estudios neurológicos.",
    tags: ["Electroencefalograma", "Consulta neurológica", "Neuropediatría"],
  },
];

const obras = [
  "OSDE", "Swiss Medical", "Galeno", "Medifé", "IOMA",
  "PAMI", "Obra Social del Personal de Comercio", "OSECAC",
  "Medicus", "Omint", "Accord Salud", "Sancor Salud",
];

export default function ServiciosPage() {
  return (
    <>
      <div className={styles.pageHero}>
        <span className={styles.eyebrow}>Lo que ofrecemos</span>
        <h1 className={styles.heroTitle}>
          Todas las <em>especialidades</em><br />
          en un solo lugar
        </h1>
        <p className={styles.heroDesc}>
          Más de 20 especialidades médicas para acompañarte en cada etapa de tu vida.
          Pedí tu turno online y empezá hoy.
        </p>
      </div>

      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.serviceTop}>
                <div className={styles.serviceEmoji}>{s.emoji}</div>
                <h3>{s.name}</h3>
              </div>
              <p>{s.desc}</p>
              <div className={styles.serviceTags}>
                {s.tags.map((t, j) => (
                  <span key={j} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.obrasSociales}>
        <span className={styles.eyebrow}>Cobertura</span>
        <h2 className={styles.heroTitle}>
          Trabajamos con las principales<br />
          <em>obras sociales</em>
        </h2>
        <p className={styles.heroDesc}>
          Aceptamos la mayoría de las obras sociales y prepagos del país.
          Consultá si la tuya está incluida.
        </p>
        <div className={styles.obrasList}>
          {obras.map((o, i) => (
            <span key={i} className={styles.obraItem}>{o}</span>
          ))}
        </div>
      </section>
    </>
  );
}