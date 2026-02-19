import Typography from '../ui/Typography/Typography';
import styles from './Skills.module.css';

const Skills = () => {
  const categories = [
    { title: "Core", items: ["React", "TypeScript", "JavaScript (ES6+)"] },
    { title: "Mobile", items: ["React Native", "Firebase", "App Store/Google Play Deployment"] },
    { title: "Professional", items: ["Veeva Vault", "HTML Email Development", "Agile/Scrum"] }
  ];

  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <Typography variant="h2" className={styles.sectionTitle}>Kompetencje</Typography>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <Typography variant="tag" className={styles.catTitle}>{cat.title}</Typography>
              {cat.items.map(item => (
                <Typography key={item} variant="body" className={styles.skillItem}>{item}</Typography>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;