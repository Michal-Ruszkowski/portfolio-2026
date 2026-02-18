import Typography from '../ui/Typography/Typography';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <Typography variant="h1" className={styles.name}>
          MICHAŁ RUSZKOWSKI
        </Typography>
        
        <div className={styles.infoWrapper}>
          <Typography variant="h3" className={styles.role}>
            HTML Email Developer
          </Typography>
          <Typography variant="h3" className={styles.role}>
            Front-End Developer
          </Typography>
          <Typography variant="h3" className={styles.role}>
            React Native Developer
          </Typography>
        </div>

        <div className={styles.contactWrapper}>
          <a href="mailto:michrusz89@gmail.com" className={styles.link}>
            <Typography variant="body">
              michrusz89@gmail.com
            </Typography>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;