import Section from '../ui/Section/Section';
import Typography from '../ui/Typography/Typography';
import Button from '../ui/Button/Button';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section 
      id="contact" 
      title="Porozmawiajmy o projektach" 
      as="footer" 
    >
      <div className={styles.footerContent}>
        <div className={styles.contactSection}>
          <Button 
            href="mailto:twoj@email.com" 
            variant="primary" 
            className={styles.mainEmail}
          >
            Napisz e-mail
          </Button>

          <div className={styles.socialLinks}>
            <a 
              href="https://linkedin.com/in/twojprofil" 
              target="_blank" 
              rel="noopener" 
              className={styles.socialLink}
            >
              <Typography variant="body">LinkedIn</Typography>
            </a>
            <a 
              href="https://github.com/twojgithub" 
              target="_blank" 
              rel="noopener" 
              className={styles.socialLink}
            >
              <Typography variant="body">GitHub</Typography>
            </a>
          </div>
        </div>

        <div className={styles.cvSection}>
          <Typography variant="tag" className={styles.cvLabel}>
            Pobierz CV
          </Typography>
          
          <div className={styles.cvRow}>
            <Button href="/cv/michal-ruszkowski-frontend.pdf" variant="outline">
              Front-End
            </Button>
            <Button href="/cv/michal-ruszkowski-mobile.pdf" variant="outline">
              Mobile
            </Button>
            <Button href="/cv/michal-ruszkowski-email.pdf" variant="outline">
              HTML Email
            </Button>
          </div>
        </div>

        <div className={styles.legal}>
          <Typography variant="desc" className={styles.center}>
            © {currentYear} Michał Ruszkowski
          </Typography>
        </div>
      </div>
    </Section>
  );
};

export default Footer;