import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nosotros | Clínica Serena",
  description: "Conocé nuestra historia, valores y el equipo médico de Clínica Serena.",
};

const values = [
  {
    num: "01",
    title: "Vocación de Servicio",
    desc: "Elegimos la medicina por convicción. Cada consulta es una oportunidad de hacer una diferencia real en la vida de una persona.",
  },
  {
    num: "02",
    title: "Excelencia Clínica",
    desc: "Capacitación continua, protocolos actualizados y tecnología de vanguardia para garantizar los mejores diagnósticos y tratamientos.",
  },
  {
    num: "03",
    title: "Trato Humano",
    desc: "Más allá del diagnóstico, nos importan tus emociones, tu contexto y tu historia. La medicina es ante todo una relación de confianza.",
  },
  {
    num: "04",
    title: "Accesibilidad",
    desc: "Creemos que la salud de calidad debe ser accesible. Por eso trabajamos con múltiples obras sociales y prepagos.",
  },
];

const team = [
  { avatar: "👨‍⚕️", name: "Dr. Martín Álvarez", specialty: "Director Médico · Clínica General", bio: "20 años de experiencia en medicina interna." },
  { avatar: "👩‍⚕️", name: "Dra. Sofía Ramírez", specialty: "Cardióloga", bio: "Especialista en cardiología preventiva y ecocardiografía." },
  { avatar: "👨‍⚕️", name: "Dr. Pablo Torres", specialty: "Pediatra", bio: "Dedicado al cuidado integral de niños y adolescentes." },
  { avatar: "👩‍⚕️", name: "Dra. Ana Benítez", specialty: "Dermatóloga", bio: "Experta en dermatología clínica y estética avanzada." },
];

export default function NosotrosPage() {
  return (
    <>
      <section className={styles.hero}>
        <div>
          <span className={styles.eyebrow}>Nuestra historia</span>
          <h1 className={styles.heroTitle}>
            Más de 15 años<br />
            <em>cuidando personas</em>
          </h1>
          <p className={styles.heroDesc}>
            Clínica Serena nació en 2009 con una misión clara: brindar atención médica
            de alta calidad con un enfoque profundamente humano. Hoy somos un equipo
            de más de 20 especialistas que compartimos esa misma pasión por la medicina
            y el cuidado de las personas.
          </p>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.statCard}>
            <strong>15+</strong>
            <span>Años de experiencia</span>
          </div>
          <div className={styles.statCard}>
            <strong>20k+</strong>
            <span>Pacientes atendidos</span>
          </div>
          <div className={styles.statCard}>
            <strong>20+</strong>
            <span>Especialistas</span>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Nuestros valores</span>
          <h2 className={styles.sectionTitle}>
            Lo que nos <em>define</em>
          </h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} className={styles.valueCard}>
              <span className={styles.valueNumber}>{v.num}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Nuestro equipo</span>
          <h2 className={styles.sectionTitle}>
            Los <em>profesionales</em> detrás de Serena
          </h2>
        </div>
        <div className={styles.teamGrid}>
          {team.map((m, i) => (
            <div key={i} className={styles.teamCard}>
              <div className={styles.teamAvatar}>{m.avatar}</div>
              <div className={styles.teamInfo}>
                <h3>{m.name}</h3>
                <span className={styles.specialty}>{m.specialty}</span>
                <p>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}