import React, { ReactNode } from 'react';
import styles from './Typography.module.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'desc' | 'tag';

interface TypographyProps {
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
}

const Typography = ({ 
  variant = 'body', 
  children, 
  className = '' 
}: TypographyProps) => {
  const components: Record<TypographyVariant, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    desc: 'p',
    tag: 'span'
  };

  const Component = components[variant] || 'p';
  const combinedClassName = `${styles[variant]} ${className}`.trim();

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
};

export default Typography;