import styles from './Skills.module.css';
import Typography from '../ui/Typography/Typography';
import { skillCategories } from '../../data/skills';
import Section from '../ui/Section/Section';

const Skills = () => {
  return (
    <Section id="skills" title="Technical Skills" isAlternative={true}>
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
    </Section>
  );
};

export default Skills;