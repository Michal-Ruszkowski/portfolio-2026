import Typography from '../ui/Typography/Typography';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navLinks = [
    { name: 'projects', href: '#projects' },
    { name: 'experience', href: '#experience' },
    { name: 'skills', href: '#skills' },
    { name: 'contact', href: '#contact' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className={styles.link}>
                <Typography variant="tag" className={styles.navText}>
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