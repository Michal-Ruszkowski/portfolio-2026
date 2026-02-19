import { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: ReactNode;
  className?: string;
  download?: boolean | string;
}

const Button = ({ children, href, variant = 'primary', icon, className, download }: ButtonProps) => {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      className={`${styles.button} ${styles[variant]} ${className}`}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      download={download}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </Component>
  );
};

export default Button;