import styles from './Skills.module.css';
import Typography from '../ui/Typography/Typography';
import { skillCategories } from '../../data/skills';

const Skills = () => {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <Typography variant="h2" className={styles.sectionTitle}>
          Technical Skills
        </Typography>

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <Typography variant="h3" className={styles.categoryTitle}>
                {category.title}
              </Typography>
              
              <ul className={styles.skillList}>
                {category.skills.map((skill, index) => (
                  <li key={index}>
                    <Typography variant="body" className={styles.skillItem}>
                      {skill}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;