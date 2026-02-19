import { experiences } from '../../data/experience';
import Section from '../ui/Section/Section';
import Typography from '../ui/Typography/Typography';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.item}>
            <Typography variant="tag" className={styles.company}>
              {exp.company}
            </Typography>
            
            <Typography variant="h3" className={styles.role}>
              {exp.role}
            </Typography>
            
            <Typography variant="desc" className={styles.period}>
              {exp.period}
            </Typography>

            <ul className={styles.list}>
              {exp.description.map((bullet, index) => (
                <li key={index}>
                  <Typography variant="body">{bullet}</Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;