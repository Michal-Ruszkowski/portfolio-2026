import Typography from '../ui/Typography/Typography';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navLinks = [
    { name: 'projekty', href: '#projects' },
    { name: 'kompetencje', href: '#skills' },
    { name: 'doświadczenie', href: '#experience' },
    { name: 'kontakt', href: '#contact' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className={styles.link}>
                <Typography variant="body" className={styles.navText}>
                  {link.name}
                </Typography>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;