import Section from '../ui/Section/Section';
import Typography from '../ui/Typography/Typography';
import Button from '../ui/Button/Button';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section 
      id="contact" 
      title="Let's talk about projects" 
      as="footer" 
    >
      <div className={styles.footerContent}>
        <div className={styles.contactSection}>
          <Button 
            href="mailto:michrusz89@gmail.com" 
            variant="primary" 
            className={styles.mainEmail}
          >
            Send an email
          </Button>

          <div className={styles.socialLinks}>
            <a 
              href="https://www.linkedin.com/in/micha%C5%82-ruszkowski-b663801ba/" 
              target="_blank" 
              rel="noopener" 
              className={styles.socialLink}
            >
              <Typography variant="body">LinkedIn</Typography>
            </a>
            <a 
              href="https://github.com/Michal-Ruszkowski" 
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
            Download CV
          </Typography>
          
          <div className={styles.cvRow}>
            <Button 
              href="/cv/Michal_Ruszkowski_HTML_Email_Developer_CV.pdf" 
              variant="outline" 
              className={styles.cvButton}
              download
            >
              Front-End
            </Button>
            <Button 
              href="/cv/Michal_Ruszkowski_HTML_Email_Developer_CV.pdf" 
              variant="outline" 
              className={styles.cvButton}
              download
            >
              Mobile
            </Button>
            <Button 
              href="/cv/Michal_Ruszkowski_HTML_Email_Developer_CV.pdf" 
              variant="outline" 
              className={styles.cvButton}
              download
            >
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